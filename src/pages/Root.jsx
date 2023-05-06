import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../index.scss";
import "../styles/Root.scss";


import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import SocialLinks from "../components/SocialLinks";
import MenuLeft from "../components/MenuLeft";
import MenuRight from "../components/MenuRight";

function Root() {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const location = useLocation();
  const [isRootPage, setIsRootPage] = useState(location.pathname === "/");

  useEffect(() => {
    setIsRootPage(location.pathname === "/");
  }, [location]);

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
    </div>
  );
}

export default Root;