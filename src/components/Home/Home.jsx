import React from "react";
import quiz from "../../assets/quiz.json";
import Lottie from "lottie-react";
import { Link, useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";
import { QuizContext } from "../Root/Root";

const Home = () => {
  // const topicsData = useContext(QuizContext);

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center md:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Lottie animationData={quiz} loop={true} />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:mt-24 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl">
              Explore
              <span className="dark:text-violet-400"> Quiz</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              We’ve even made it our mission to get as many
              <br className="hidden md:inline lg:hidden" />
              people quizzing as we possibly can.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-2  text-lg font-semibold rounded bg-violet-500 text-gray-100 hover:bg-violet-600 hover:text-white transition-all"
              >
                Topics
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/about"
                className="px-8 py-2 text-lg font-semibold border rounded border-gray-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Topics />
    </div>
  );
};

export default Home;
