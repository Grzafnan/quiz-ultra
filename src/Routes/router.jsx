import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/Errorpage";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Root from "../components/Root/Root";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        exact: true,
        element: <Home />,
      },
      // {
      //   path: "/",
      //   exact: true,
      //   element: <Topics />,
      // },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
      },
    ],
  },
]);
