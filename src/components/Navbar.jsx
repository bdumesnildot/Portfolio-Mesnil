import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import "../styles/components-styles/Navbar.scss"

function Navbar({ setMenuIsActive }) {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  const handleMenuclick = () => setMenuIsActive(true);

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
          <Link to="/infos" >Infos</Link>
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
