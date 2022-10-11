import React from "react";
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Topics from "../Topics/Topics";

export const QuizContext = createContext([]);

const Root = () => {
  const topicsData = useLoaderData();

  return (
    <QuizContext.Provider value={topicsData}>
      <Header />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Root;
