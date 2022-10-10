import React from "react";
import Options from "../Options/Options";
import Swal from "sweetalert2";

const Questions = ({ questionData, idx }) => {
  const { correctAnswer, id, options, question } = questionData;

  const showAnswer = () => {
    Swal.fire(`${correctAnswer}`);
  };

  return (
    <div className="card bg-base-200 w-3/4 mx-auto mb-6 shadow-lg mt-10 ">
      <div className=" p-4 md:p-10 text-xl">
        <h3 className="relative">
          <span className="font-semibold">Quiz: {idx + 1}</span> {question}
        </h3>
        <button onClick={showAnswer} className="absolute top-11 right-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid md:grid-cols-2 mb-6 px-2">
        {options.map((option, idx) => (
          <Options key={idx} option={option} correctAnswer={correctAnswer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
