import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const SignUp = () => {
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (error) {
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        toast.error("Password went Wrong");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("User Not Found. Please!! Sign Up");
      }
    }
  }, [error]);

  useEffect(() => {
    if (user || gUser) {
      toast.success("LogIn Successful");

      navigate(from, { replace: true });
    }
  }, [user, gUser]);

  //login user data email and password
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const createNewUser = (event) => {
    event.preventDefault();
    console.log(email, password);

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="sm:w-4/12 w-11/12 mx-auto border rounded-md px-8  my-16 py-12">
      <h3 className="text-3xl text-center font-bold text-slate-600">Sign Up</h3>
      <form onSubmit={createNewUser} class="form-control w-full max-w-xl">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          required
          class="input input-bordered w-full max-w-xs"
        />

        <div class="form-control w-full max-w-xl">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            onBlur={handleEmailBlur}
            placeholder="Enter Your Email"
            required
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xl">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            onBlur={handlePasswordBlur}
            placeholder="Password"
            required
            class="input input-bordered w-full max-w-xs"
          />
          <button type="submit" class="btn mt-4 w-5/12">
            Sign In
          </button>
        </div>
      </form>
      <p className="my-5 text-xl font-semibold">
        <small>
          Already have an account?
          <Link className="ml-2 text-cyan-600" to="/logIn">
            LogIn!!
          </Link>
        </small>
      </p>
      <div class="divider my-8">OR</div>
      <button onClick={() => signInWithGoogle()} class="btn btn-block ">
        Continue With Google
      </button>
    </div>
  );
};

export default SignUp;
