import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-teal-100 lg:justify-around justify-between shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist">ToDoList</Link>
            </li>
            {user && (
              <li>
                <button
                  className="font-semibold"
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  Log Out
                </button>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login">Log In</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          ToDoList
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todolist">ToDoList</Link>
          </li>
          {user && (
            <li>
              <button
                className="font-semibold"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Log Out
              </button>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login">Log In</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
