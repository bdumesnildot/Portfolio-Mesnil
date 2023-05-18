import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import "../styles/components-styles/ProjectImgDisplayer.scss"

import { projectList } from "../data/projectsData"

import ProjectImgNav from './ProjectImgNav';
import ProjectImgOverview from './ProjectImgOverview';
import ProjectImgGallery from './ProjectImgGallery';

function ProjectImgDisplayer() {
  const { 
    devise, 
    currentProject, 
    projectIndex, 
    setProjectIndex
  } = useOutletContext()

  const [imgCounter, setImgCounter] = useState(1);
  const [mediaTotal, setMediaTotal] = useState(1)

  const handlePrevclick = () => {
    imgCounter !== 1 ? setImgCounter(imgCounter - 1) : setImgCounter(mediaTotal)
  }
  const handleNextclick = () => {
    imgCounter !== mediaTotal ? setImgCounter(imgCounter + 1) : setImgCounter(1)
  }
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      projectIndex !== projectList.length - 1 ? setProjectIndex(projectIndex + 1) : setProjectIndex(0)
      console.log("down")
    } else if (event.deltaY < 0) {
      projectIndex !== 0 ? setProjectIndex(projectIndex - 1) : setProjectIndex(projectList.length - 1)
      console.log("up")
    }
  }

  useEffect(() => {
    setImgCounter(1)
    setMediaTotal(currentProject.media[devise].length + 1)
  }, [currentProject, devise])

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [projectIndex]);

  return (
    <div className='project-displayer'>
      <ProjectImgNav 
        imgCounter={imgCounter} 
        setImgCounter={setImgCounter}
        mediaTotal={mediaTotal} 
      />
      <div 
        className='project-img-flex-cont'
      >
        {imgCounter === 1 && 
          <ProjectImgOverview 
            currentProject={currentProject}
          /> }
        {imgCounter >= 2 && 
          <ProjectImgGallery 
            currentProject={currentProject} 
            imgCounter={imgCounter} 
          /> }

          <div
            className='clickArea previous'
            onClick={handlePrevclick}
          ></div>
          <div 
            className='clickArea next'
            onClick={handleNextclick}
          ></div>
      </div>
    </div>
  )
}

export default ProjectImgDisplayer;
