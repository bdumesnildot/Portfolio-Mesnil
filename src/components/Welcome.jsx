import "/src/styles/components-styles/Welcome.scss";

function Welcome() {

  return (
    <div className="welcome">
      <div className="background">
        <div className="left-background"></div>
        <div className="right-background"></div>
      </div>
      <svg
        className="circular-text"
        viewBox="0 0 300 300" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path 
          id="SunCatcherStudio" 
          fill="none" 
          stroke="#c54309" 
          strokeWidth="1"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z" />  
        <text fontSize="26" fill="#231815" letterSpacing="1" fontFamily="Poppins, sans-serif">
          <textPath xlinkHref="#SunCatcherStudio" startOffset="50">Benoit du Mesnildot / développeur Web</textPath>
        </text>
      </svg>
    </div>
  );
}

export default Welcome;