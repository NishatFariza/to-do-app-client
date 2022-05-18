import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="sm:w-4/12 w-11/12 mx-auto border rounded-md px-8  my-16 py-12">
      <h3 className="text-3xl text-center font-bold text-slate-600">LogIn</h3>
      <div class="form-control w-full max-w-xl">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          class="input input-bordered w-full max-w-xs"
        />
        <label class="label">
          <small class="label-text-alt text-red-400">
            Please Enter Your Email
          </small>
        </label>
      </div>
      <div class="form-control w-full max-w-xl">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          required
          class="input input-bordered w-full max-w-xs"
        />
        <label class="label">
          <small class="label-text-alt text-red-400">
            Please Enter Your valid password
          </small>
        </label>
      </div>
      <p className="my-5 text-xl font-semibold">
        <small>
          New To Do App?
          <Link className="ml-2 text-cyan-600" to="/signUp">
            Create new account!!
          </Link>
        </small>
      </p>
      <div class="divider my-8">OR</div>
      <button class="btn btn-block ">Continue With Google</button>
    </div>
  );
};

export default LogIn;
