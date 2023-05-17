import { video } from '@cloudinary/url-gen/qualifiers/source';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function ProjectImgGallery(props) {
    const {
      currentProject, 
      imgCounter,
      setImgCounter,
      mediaTotal,
    } = props
    const {devise} = useOutletContext()
    const [currentMedia, setCurrentMedia] = useState([])
    const [mediaType, setMediaType] = useState("")
    const [url, setUrl] = useState("")
    const [altText, setAltText] = useState("")

    const handleNextclick = () => {
    imgCounter !== mediaTotal ? setImgCounter(imgCounter + 1) : setImgCounter(1)
    }

    useEffect(() => {
      setCurrentMedia(currentProject.media[devise][imgCounter - 2])
    }, [imgCounter])

    useEffect(() => {
      setMediaType(currentMedia[1])
      setUrl(currentMedia[0])
    }, [currentMedia])

    useEffect(() => {
      if (url) setAltText(url.substring(url.lastIndexOf('/') + 1))
    }, [url])

  return (
    <div className='project-img'>
      {mediaType === "vid" &&
        <video 
          autoplay="true"
          controlsList="nodownload"
          src={url}
          alt={altText}
        ></video>
      }
      {mediaType === "img" && 
        <img 
          src={url} 
          alt={altText}
          onClick={handleNextclick}
        />
      }
    </div>
  )
}

export default ProjectImgGallery;
