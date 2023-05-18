import { useState } from "react";
import { Link } from "react-router-dom";

import "/src/styles/components-styles/SocialLinks.scss";

function SocialLinks() {
  const [isHoverGitHub, setIsHoverGitHub] = useState(false);
  const [isHoverLinkedIn, setIsHoverLinkedIn] = useState(false);

  const pathGitHub = "/src/assets/SVG/iconGitHub.svg";
  const pathGitHubHover = "/src/assets/SVG/iconGitHub-hover.svg";
  const pathLinkedIn = "/src/assets/SVG/iconLinkedIn.svg";
  const pathLinkedInHover = "/src/assets/SVG/iconLinkedIn-hover.svg";

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