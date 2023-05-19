import { useState } from "react";
import { Link } from "react-router-dom";

import "/src/styles/components-styles/SocialLinks.scss";

import pathGitHub from "/src/assets/SVG/iconGitHub.svg";
import pathGitHubHover from "/src/assets/SVG/iconGitHub-hover.svg";
import pathLinkedIn from "/src/assets/SVG/iconLinkedIn.svg";
import pathLinkedInHover from "/src/assets/SVG/iconLinkedIn-hover.svg";

function SocialLinks() {
  const [isHoverGitHub, setIsHoverGitHub] = useState(false);
  const [isHoverLinkedIn, setIsHoverLinkedIn] = useState(false);


  return (
    <div className="SocialLinks">
      <Link
        className="icon-link"
        to="https://github.com/bdumesnildot"
        target="_blank"
        onMouseEnter={() => setIsHoverGitHub(true)}
        onMouseLeave={() => setIsHoverGitHub(false)}
        > 
          <img
            className="icon"
            src={isHoverGitHub? pathGitHubHover : pathGitHub}
            alt="iconGitHub" />
        </Link>

        <Link
          className="icon-link"
          to="https://www.linkedin.com/in/bdumesnildot/"
          target="_blank"
          onMouseEnter={() => setIsHoverLinkedIn(true)}
          onMouseLeave={() => setIsHoverLinkedIn(false)}
          >
            <img
              className="icon"
              src={isHoverLinkedIn? pathLinkedInHover : pathLinkedIn}
              alt="iconGitHub" />
          </Link>
    </div>
  );
}

export default SocialLinks;