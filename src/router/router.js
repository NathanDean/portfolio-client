import { createBrowserRouter } from "react-router-dom";
import Root, { loader as languagesLoader } from "../routes/Root";
import Projects, { loader as projectsLoader } from "../routes/Projects";
import ProjectDetail, { loader as projectDetailLoader } from "../routes/ProjectDetail";
import About, { loader as aboutLoader } from "../routes/About";
import ErrorPage from "../routes/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: languagesLoader,
    children: [
      {
        path: "/",
        element: <Projects />,
        loader: projectsLoader
      },
      {
        path: "/:slug",
        element: <ProjectDetail />,
        loader: projectDetailLoader
      },
      {
        path: "/about",
        element: <About />,
        loader: aboutLoader
      },
    ]
  }
])

export default router