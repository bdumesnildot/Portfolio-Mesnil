import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import "/src/styles/components-styles/ProjectImgDisplayer.scss"

import { projectList } from "/src/data/projectsData"

import ProjectImgNav from '/src/components/ProjectImgNav';
import ProjectImgOverview from '/src/components/ProjectImgOverview';
import ProjectImgGallery from '/src/components/ProjectImgGallery';

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
    if (devise === "desktop" && event.deltaY > 0) {
      projectIndex !== projectList.length - 1 ? setProjectIndex(projectIndex + 1) : setProjectIndex(0)
    } else if (devise === "desktop" && event.deltaY < 0) {
      projectIndex !== 0 ? setProjectIndex(projectIndex - 1) : setProjectIndex(projectList.length - 1)
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
        handlePrevclick={handlePrevclick}
        handleNextclick={handleNextclick}
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
