import "../styles/pages-styles/Projects.scss";

import ProjectImgDisplayer from "../components/ProjectImgDisplayer";
import ProjectNav from "../components/ProjectNav";

function Projets() {

  return(
    <div className="projects">
      <h2>Projets</h2>
      <ProjectNav />
      <div className="projects-cont">
        <ProjectImgDisplayer />
      </div>
    </div>
  )
} 

export default Projets;
