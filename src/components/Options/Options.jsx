import React from "react";
import { toast } from "react-toastify";

const Options = ({
  option,
  correctAnswer,
  right,
  wrong,
  setRight,
  setWrong,
}) => {
  const handleAnswer = (option) => {
    if (correctAnswer === option) {
      toast.success("Correct answer!", { autoClose: 500 });
      setRight(right + 1);
      localStorage.setItem("RightAnswer", right + 1);
    } else {
      toast.error("Wrong answer!", { autoClose: 500 });
      setWrong(wrong + 1);
      localStorage.setItem("WrongAnswer", wrong + 1);
    }
  };

  return (
    <div className="md:w-2/3 w-full h-22 mb-2 border border-violet-500 rounded-lg text-xl p-2 mx-auto">
      <input
        onClick={() => handleAnswer(option)}
        type="radio"
        id={option}
        name="fav_language"
        value={option}
      />
      <label className="ml-2" htmlFor={option}>
        {option}
      </label>
    </div>
  );
};

export default Options;
