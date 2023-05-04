import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import "../styles/components-styles/Menu.scss";

function MenuRight({ menuIsActive, setMenuIsActive }) {
  const [rightY, setRightY] = useState(100);

  const handleMenuclick = () => setMenuIsActive(false);

  useEffect(() => {
    if (menuIsActive) {
      setRightY(0);
    } else {
      setRightY(100);
    }
  }, [menuIsActive])

  return (
    <div 
      className="menu-right-cont"
      style={{
        transform: `translateY(${rightY}vh)`
      }}
    >
      <nav className="menu-nav">
        <div 
          className="link"
          onClick={ handleMenuclick }
        >
          <Link to="/" >Home</Link>
        </div>
        <button 
          className="menu-nav-close"
          type="button" 
          onClick={ handleMenuclick }
        >
          Fermer
        </button>
      </nav>

      <div className="big-menu-content">
        <ol>
          <li 
            className="link" 
            onClick={ handleMenuclick } 
          >
          <Link to="/projets" >Projets</Link>
        </li>
        <li 
          className="link" 
          onClick={ handleMenuclick } 
        >
          <Link to="/info" >Info</Link>
        </li>
        <li 
          className="link" 
          onClick={ handleMenuclick } 
        >
          <Link to="/contact" >Contact</Link>
        </li>
        </ol>
      </div>

    </div>
  );
}

export default MenuRight;