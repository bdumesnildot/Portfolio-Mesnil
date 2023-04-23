import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import "../styles/components-styles/Navbar.scss"

function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [menuIsActive, setMenuIsActive] = useState(false)

  const handleMenuclick = () => setMenuIsActive(!menuIsActive);

  return(
    <div className="navbar">
      <Link to="/">
        <img
          className="nav-logo"
          src="src/assets/svg/Mesnil-logo.svg" 
          alt="Logo"
        />
      </Link>
      {!isTabletOrMobile &&
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
      }
      <button 
        type="button" 
        className="nav-menu"
        onClick={ handleMenuclick }
      >
        Menu
      </button>
    </div>
  )
} 

export default Navbar;
