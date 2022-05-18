import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const AddToDo = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleAddTask = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    // console.log(name, description);
    const newTask = {
      name: name,
      description: description,
    };

    const url = `https://sheltered-sands-62975.herokuapp.com/`;

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

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto mt-16 mb-20">
      <div className="my-10 lg:w-4/12 w-11/12 mx-auto flex items-center justify-center shadow-lg rounded-md py-6">
        <form onSubmit={handleAddTask}>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold">Task Name</span>
            </label>
            <input
              type="text"
              placeholder="Task Name"
              name="name"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold">Description</span>
            </label>
            <textarea
              class="textarea textarea-bordered"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          <input
            className="btn btn-outline my-4 w-full"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button class="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>

            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>
                <button class="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>

            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <button class="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <button class="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <button class="btn btn-square btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToDo;
