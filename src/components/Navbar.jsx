import { Link } from "react-router-dom";
import "../styles/components-styles/Navbar.scss"

function Navbar() {

  return(
    <div className="navbar">
      <Link to="/">
        <img
          className="nav-logo"
          src="src/assets/svg/Mesnil-logo.svg" 
          alt="Logo"
        />
      </Link>
      <ul className="nav-links">
        <li className="link">
          <Link to="/projets" >Projets</Link>
          <span className="underline"></span>
        </li>
        <li className="link">
          <Link to="/info" >Info</Link>
          <span className="underline"></span>
        </li>
        <li className="link">
          <Link to="/contact" >Contact</Link>
          <span className="underline"></span>
        </li>
      </ul>
    </div>
  )
} 

export default Navbar;
