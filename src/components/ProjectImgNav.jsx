import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectImgNav(props) {
  const {
    imgCounter, 
    setImgCounter,
    mediaTotal,
    handlePrevclick,
    handleNextclick,
  } = props

  const handleInfoclick = () => {
    setImgCounter(1)
  }

  return (
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
      <p>{imgCounter} <span>/</span> {mediaTotal}</p>
    </div>
  )
}

export default ProjectImgNav;
