import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "/src/pages/Root";
import ErrorPage from "/src/pages/ErrorPage";
import Projects from "/src/pages/Projects";
import Info from "/src/pages/Info";
import Contact from "/src/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projets/",
        element: <Projects />,
      },
      {
        path: "infos/",
        element: <Info />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
