import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";

function ProjectImgOverview({currentProject}) {
  const {devise} = useOutletContext()

  return (
    <div className='project-description'>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.description}</p>

      <div className="description-flex-cont">
        <div className="details">
          <h4>Détails</h4>
          <ul className="detailsList" >
            <li>type : {currentProject.type}</li>
            <li>client : {currentProject.client}</li>
            <li>année : {currentProject.year}</li>
            <li>durée : {currentProject.duration}</li>
            <li>équipe : {currentProject.team} personnes</li>
          </ul>
        </div>
        <div className="stack">
          <h4>Principaux outils</h4>
          <ul className="stackList" >
            {currentProject.stack.map((techno) => (
              <li key={techno} >{techno}</li>
            ))}
          </ul>
        </div>
        <Link
          className="icon-link"
          to={currentProject.url}
          target="_blank"
          >
            {<img src={currentProject.media[devise][0][0]} alt="project thumbnail" />}
          </Link>
      </div>
    </div>
  )
}

export default ProjectImgOverview;
