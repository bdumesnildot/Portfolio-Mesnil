import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../index.scss";
import "../styles/Root.scss";

import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

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
        {isRootPage && <Welcome /> }
        <Outlet />
      </div>
    </div>
  );
}

export default Root;