import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const AddToDo = () => {
  const [user, loading, error] = useAuthState(auth);
  const [task, setTask] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const handleAddTask = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    // console.log(name, description);

    const newTask = {
      name: name,
      description: description,
      done: false,
    };
    const url = `https://sheltered-sands-62975.herokuapp.com/todo`;

    axios
      .post(url, newTask)
      .then(function (response) {
        console.log(response);
        if (response.data.insertedId) {
          toast.success("Task Added Successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const url = `https://sheltered-sands-62975.herokuapp.com/todos`;
    axios
      .get(url)
      .then(function (response) {
        setTask(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [task, refetch]);

  const handleDone = (id) => {
    const url = `https://sheltered-sands-62975.herokuapp.com/todo/${id}`;
    axios
      .put(url, { done: true })
      .then(function (response) {
        console.log(response.data);
        setRefetch(response.data);
        if (response.data.deletedCount) {
          toast.success("Task Deleted Successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const url = `https://sheltered-sands-62975.herokuapp.com/todo/${id}`;
    axios
      .delete(url)
      .then(function (response) {
        console.log(response.data);
        if (response.data.deletedCount) {
          toast.success("Task Deleted Successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto mt-16 mb-20">
      <div className="my-10 lg:w-4/12 w-11/12 mx-auto flex items-center justify-center shadow-lg rounded-md py-6">
        <form onSubmit={handleAddTask}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Task Name</span>
            </label>
            <input
              type="text"
              placeholder="Task Name"
              name="name"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              name="description"
              required
            ></textarea>
          </div>
          <input
            className="btn btn-outline my-4 w-full"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <div className="flex justify-end">
                <th className="mr-2">Done</th>
                <th>Remove</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {task.map((data) => (
              <tr key={data._id}>
                <td className={`${data.done && "line-through"}`}>
                  {data.name}
                </td>
                <td className={`${data.done && "line-through"}`}>
                  {data.description}
                </td>
                <td>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDone(data._id)}
                      className="btn btn-active mr-2"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-square btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToDo;
