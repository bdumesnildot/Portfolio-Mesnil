import "/src/styles/pages-styles/Projects.scss";

import ProjectImgDisplayer from "/src/components/ProjectImgDisplayer";
import ProjectNav from "/src/components/ProjectNav";

function Projets() {

  return(
    <div className="projects">
      <div className="project-left-container">
        <h2>Projets</h2>
        <ProjectNav />

      </div>
      <div className="projects-cont">
        <ProjectImgDisplayer />
      </div>
    </div>
  )
} 

export default Projets;
