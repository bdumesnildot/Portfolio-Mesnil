import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import "../index.scss";

import Navbar from "../components/Navbar";

function Root() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
