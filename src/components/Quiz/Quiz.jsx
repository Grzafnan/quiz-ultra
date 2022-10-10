import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;

  return (
    <div className="mt-8">
      <h2 className="text-2xl italic text-blue-500 font-bold text-center">
        Quiz Of {name}
      </h2>
      <div>
        {questions.map((questionData, idx) => (
          <Questions key={idx} idx={idx} questionData={questionData} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
