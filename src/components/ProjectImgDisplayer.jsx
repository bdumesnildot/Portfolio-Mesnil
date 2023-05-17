import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import "../styles/components-styles/ProjectImgDisplayer.scss"

import ProjectImgNav from './ProjectImgNav';
import ProjectImgOverview from './ProjectImgOverview';
import ProjectImgGallery from './ProjectImgGallery';

function ProjectImgDisplayer() {
  const { devise, currentProject } = useOutletContext()
  const [imgCounter, setImgCounter] = useState(1);
  const [mediaTotal, setMediaTotal] = useState(1)

  useEffect(() => {
    setImgCounter(1)
    setMediaTotal(currentProject.media[devise].length + 1)
  }, [currentProject, devise])

  return (
    <div className='project-displayer'>
      <ProjectImgNav 
        imgCounter={imgCounter} 
        setImgCounter={setImgCounter}
        mediaTotal={mediaTotal} 
      />
      <div className='project-img-flex-cont'>
        {imgCounter === 1 && 
          <ProjectImgOverview currentProject={currentProject} /> }
        {imgCounter >= 2 && 
          <ProjectImgGallery 
            currentProject={currentProject} 
            imgCounter={imgCounter} 
            setImgCounter={setImgCounter}
            mediaTotal={mediaTotal} 
          /> }
      </div>
    </div>
  )
}

export default ProjectImgDisplayer;
