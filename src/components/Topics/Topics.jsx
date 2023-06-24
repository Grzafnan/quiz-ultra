import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../Root/Root";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topicsData = useContext(QuizContext);
  // console.log(topicsData);
  // const { name, logo, id, total } = topic;
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 md:mt-0 lg:mt-20">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">
            General Knowledge Quiz Questions
          </h2>
          <p className="font-serif text-sm dark:text-gray-400">
            A good general knowledge quiz has a lot to offer. They’re fun, keep
            your brain sharp and best of all, they suit any occasion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {topicsData.data.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
