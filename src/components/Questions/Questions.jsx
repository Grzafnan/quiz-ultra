import React from "react";
import Options from "../Options/Options";

const Questions = ({ questionData, idx }) => {
  const { correctAnswer, id, options, question } = questionData;

  return (
    <div className="card bg-base-200 w-3/4 mx-auto mb-6 shadow-lg mt-10 ">
      <h3 className="p-4 md:p-10 text-xl text-center">
        <span className="font-semibold">Quiz: {idx + 1}</span> {question}
      </h3>
      <div className="grid md:grid-cols-2 mb-6 px-2">
        {options.map((option, idx) => (
          <Options key={idx} option={option} correctAnswer={correctAnswer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
