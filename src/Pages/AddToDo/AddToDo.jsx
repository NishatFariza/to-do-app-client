import React from "react";

const AddToDo = () => {
  return (
    <div className="lg:w-9/12 w-11/12 mx-auto mt-16 mb-20">
      <div className="my-10 lg:w-4/12 w-11/12 mx-auto flex items-center justify-center shadow-lg rounded-md">
        <div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold">Task Name</span>
            </label>
            <input
              type="text"
              placeholder="Task Name"
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
            ></textarea>
          </div>
          <input
            className="btn btn-outline my-4 w-full"
            type="submit"
            value="Add Task"
          />
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToDo;
