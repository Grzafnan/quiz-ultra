import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;

  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    const rightAnswer = localStorage.getItem("RightAnswer");
    if (rightAnswer) {
      setRight(rightAnswer);
    }
  }, []);

  useEffect(() => {
    const wrongAnswer = localStorage.getItem("WrongAnswer");
    if (wrongAnswer) {
      setWrong(wrongAnswer);
    }
  }, []);

  const clearQuiz = () => {
    localStorage.clear();
    setRight(0);
    setWrong(0);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl italic text-blue-500 font-bold text-center">
        Quiz Of {name}
      </h2>
      <div className="shadow-lg w-[40%] mt-6 mx-auto p-4 rounded-lg text-center bg-base-200">
        <h3 className="text-2xl font-bold mb-4 u">Result</h3>
        <div className="lg:flex justify-around items-center">
          <h4 className="text-green-600 font-semibold font-2xl ">
            Right Answer: <span className="text-lg">{right}</span>
          </h4>
          <h4 className="text-red-500 font-semibold">
            Wrong Answer: <span className="text-lg">{wrong}</span>
          </h4>
          <button
            onClick={clearQuiz}
            className="py-[4px] px-4 bg-blue-600 mt-2 lg:mt-0 rounded-md font-bold text-white "
          >
            Clear Quiz
          </button>
        </div>
      </div>
      <div>
        {questions.map((questionData, idx) => (
          <Questions
            key={idx}
            idx={idx}
            questionData={questionData}
            right={right}
            wrong={wrong}
            setRight={setRight}
            setWrong={setWrong}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
