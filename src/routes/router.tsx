import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import WorkPage from "../pages/WorkPage";
import PostPage, { postLoader } from "../pages/PostPage";

const uri = import.meta.env.VITE_API_URI;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h1>Home</h1> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
        loader: async () => {
          return fetch(`${uri}/posts`, {
            method: "GET",
            mode: "cors",
            cache: "default",
          });
        },
      },
      {
        path: "/blog/:id",
        element: <PostPage />,
        loader: async ({ params }) => {
          return postLoader(params.id);
        },
      },
    ],
  },
]);
