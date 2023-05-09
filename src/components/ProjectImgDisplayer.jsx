import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "../styles/components-styles/ProjectImgDisplayer.scss"

function ProjectImgDisplayer() {
  const [imgCounter, setImgCounter] = useState(1);
  const imgTotal = 10;
  
  const handleInfoclick = () => {
    setImgCounter(1)
  }
  
  const handlePrevclick = () => {
    imgCounter !== 1 ? setImgCounter(imgCounter - 1) : setImgCounter(imgTotal)
  }
  
  const handleNextclick = () => {
    imgCounter !== imgTotal ? setImgCounter(imgCounter + 1) : setImgCounter(1)
  }

  return (
    <div className='project-displayer'>
      <div className='project-img-nav'>
        <FontAwesomeIcon icon={faInfo}
          className='btn-img-nav btn-info'
          onClick={ handleInfoclick }
        />
        <FontAwesomeIcon icon={faArrowLeft}
          className='btn-img-nav'
          onClick={ handlePrevclick }
        />
        <FontAwesomeIcon icon={faArrowRight}
          className='btn-img-nav'
          onClick={ handleNextclick }
        />
        <p>{imgCounter} <span>/</span> {imgTotal}</p>
      </div>
      <div className='project-img-flex-cont'>
        {imgCounter === 1 ? (
          <div 
            className='project-description'
            onCli
          >
            <h1>Deckforge</h1>
          </div>
        ) : (
          <div className='project-img'>
            <img src="src/assets/images/ProjectDeckForge/01-DeckForge-HeroesSelectionPage.png" alt="Heroes selection page" />
          </div>
        )

        }
      </div>
    </div>
  )
}

export default ProjectImgDisplayer;
