import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import { sendPasswordResetEmail } from "firebase/auth";

const LogIn = () => {
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
  //reset password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Mail Sent!", { id: "signUp" });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/missing-email") {
          toast.error("Please Enter Email", { id: "signUp" });
          console.log(errorCode);
        }
      });
  };

  const handleLogInUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="sm:w-4/12 w-11/12 mx-auto border rounded-md px-8  my-16 py-12">
      <h3 className="text-3xl text-center font-bold text-slate-600">Log In</h3>
      <form onSubmit={handleLogInUser} class="form-control w-full max-w-xl">
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
            Log In
          </button>
        </div>
      </form>
      <p className="text-stone-700 text-sm mt-4">
        Forget Password?
        <button
          onClick={handleResetPassword}
          className="text-sm lg:ml-3 link-text text-cyan-600 font-semibold"
        >
          Click Reset!
        </button>
      </p>
      <p className=" text-xl font-semibold">
        <small>
          New To Do App?
          <Link className="ml-2 text-cyan-600" to="/signUp">
            Create new account!!
          </Link>
        </small>
      </p>
      <div class="divider my-5">OR</div>
      <button onClick={() => signInWithGoogle()} class="btn btn-block ">
        Continue With Google
      </button>
    </div>
  );
};

export default LogIn;
