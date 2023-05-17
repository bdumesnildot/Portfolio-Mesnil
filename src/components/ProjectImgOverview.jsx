import { Link } from "react-router-dom";

function ProjectImgOverview({currentProject}) {

  return (
    <div className='project-description'>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.description}</p>

      <div className="details">
        <h3>Détails</h3>
        <ul className="detailsList" >
          <li>type : {currentProject.type}</li>
          <li>client : {currentProject.client}</li>
          <li>année : {currentProject.year}</li>
          <li>durée : {currentProject.duration}</li>
          <li>équipe : {currentProject.team} personnes</li>
        </ul>
      </div>
      <div className="stack">
        <h3>Principaux outils</h3>
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
        >visiter le website</Link>


    </div>
  )
}

export default ProjectImgOverview;
