import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../index.scss";
import "../styles/Root.scss";

import Navbar from "../components/Navbar";
import CircularText from "../components/CircularText";

function Root() {
  const location = useLocation();
  const [isRootPage, setIsRootPage] = useState(location.pathname === "/");

  useEffect(() => {
    setIsRootPage(location.pathname === "/");
  }, [location]);

  return (
    <div className="root-page">
      <Navbar />
      <div className="root-content">
        {isRootPage && <CircularText text={"welcome here"} radius={60} fontSize={12} />}
        <Outlet />
      </div>
    </div>
  );
}

export default Root;