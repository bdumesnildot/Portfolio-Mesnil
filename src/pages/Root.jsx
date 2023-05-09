import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "../index.scss";
import "../styles/Root.scss";

import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import SocialLinks from "../components/SocialLinks";
import MenuLeft from "../components/MenuLeft";
import MenuRight from "../components/MenuRight";
import CloseNotify from "../components/Notification/CloseNotify";

function Root() {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const location = useLocation();
  const isRootPage = location.pathname === "/" ? true : false;

  return (
    <div className="root-page">
      <Navbar setMenuIsActive={setMenuIsActive} />
      <MenuLeft 
        menuIsActive={menuIsActive}
      />
      <MenuRight 
        menuIsActive={menuIsActive} 
        setMenuIsActive={setMenuIsActive} 
      />
      <SocialLinks />
      <div className="root-content">
        {isRootPage && <Welcome /> }
        <Outlet
          context={{
          }}
        />
      </div>
      <ToastContainer closeButton={CloseNotify} />
    </div>
  );
}

export default Root;