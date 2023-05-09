import "../styles/pages-styles/Projects.scss";

import ProjectImgDisplayer from "../components/ProjectImgDisplayer";

function Projets() {

  return(
    <div className="projects">
      <h2>Projets</h2>
      <div className="projects-cont">
        <ProjectImgDisplayer />
      </div>
    </div>
  )
} 

export default Projets;
