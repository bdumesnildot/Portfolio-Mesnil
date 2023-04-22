import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import TestPage from "./tests/TestPage";

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
        path: "info/",
        element: <Info />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "test/",
        element: <TestPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
