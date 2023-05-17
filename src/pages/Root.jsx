import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { ToastContainer } from "react-toastify";

import "../index.scss";
import "../styles/Root.scss";

import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import SocialLinks from "../components/SocialLinks";
import MenuLeft from "../components/MenuLeft";
import MenuRight from "../components/MenuRight";
import CloseNotify from "../components/Notification/CloseNotify";

import { projectList } from "../data/projectsData"

function Root() {
  const [menuIsActive, setMenuIsActive] = useState(false)
  const [devise, setDevise] = useState("desktop")
  const [currentProject, setCurrentProject] = useState(projectList[0]);
  const [projectIndex, setProjectIndex] = useState(0)

  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const location = useLocation();
  const isRootPage = location.pathname === "/" ? true : false;

  const updateDevise = () => {
    if (isDesktop) {
      setDevise("desktop");
    } else if (isMobile) {
      setDevise("mobile");
    } else {
      setDevise("tablet");
    }
  }

  useEffect(() => {
    updateDevise()
  }, [isDesktop, isMobile])

  useEffect(() => {
    setCurrentProject(projectList[projectIndex])
  }, [projectIndex])

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
            devise,
            currentProject, 
            setCurrentProject,
            projectIndex, 
            setProjectIndex,
          }}
        />
      </div>
      <ToastContainer closeButton={CloseNotify} />
    </div>
  );
}

export default Root;