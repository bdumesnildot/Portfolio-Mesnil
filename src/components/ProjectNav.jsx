import { useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { projectList } from "../data/projectsData"

function ProjectNav() {
  const { projectIndex, setProjectIndex } = useOutletContext()

  const handlePrevclick = () => {
    projectIndex !== 0 ? setProjectIndex(projectIndex - 1) : setProjectIndex(projectList.length - 1)
  }
  const handleNextclick = () => {
    projectIndex !== projectList.length - 1 ? setProjectIndex(projectIndex + 1) : setProjectIndex(0)
  }

  return (
    <div className='project-nav'>
      <FontAwesomeIcon icon={faArrowUp}
        className='btn-img-nav'
        onClick={ handlePrevclick }
      />
      <FontAwesomeIcon icon={faArrowDown}
        className='btn-img-nav'
        onClick={ handleNextclick }
      />
    </div>
  )
}

export default ProjectNav;
