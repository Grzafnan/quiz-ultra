import React from "react";

const Topics = ({ topic }) => {
  const { name, logo, id, total } = topic;
  return (
    <>
      <article className="flex flex-col shadow-lg rounded-lg">
        <img alt="" className="rounded-lg w-full h-52 bg-gray-400" src={logo} />
        <div className="flex flex-col flex-1 p-4">
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {name}
          </h3>
          <p className="font-semibold">Quiz: {total}</p>
        </div>
        <button
          type="button"
          className="px-8 py-3 font-semibold text-white rounded-lg bg-violet-600"
        >
          Start Practice
        </button>
      </article>
    </>
  );
};

export default Topics;
