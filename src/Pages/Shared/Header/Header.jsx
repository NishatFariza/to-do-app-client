import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="navbar bg-cyan-400 lg:justify-around justify-between">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
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
        <Link to="/" class="btn btn-ghost normal-case text-3xl">
          ToDoList
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todolist">ToDoList</Link>
          </li>
          {user && (
            <li>
              <button
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
