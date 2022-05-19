import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center bg-slate-200">
      <div className="lg:w-8/12 w-11/12 text-center">
        <h1 className="text-5xl text-cyan-500 font font-extrabold">
          My To Do APP
        </h1>
        <p className="my-6 font-semibold">
          The benefits of using a daily to-do list range from higher
          productivity to better mental health. It might also have a major
          impact on your personal life, as you can be more productive at work
          and enjoy your personal time without stress. Regularly creating a list
          can help you track your short-term goals, ideas, and, accomplishments,
          while having an overall positive effect on your career.
        </p>
        <Link className="btn btn-outline" to="/todolist">
          Add List
        </Link>
      </div>
    </div>
  );
};

export default Banner;
