import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import "/src/styles/components-styles/Menu.scss";

import SocialLinks from "/src/components/SocialLinks";

function MenuRight({ menuIsActive, setMenuIsActive }) {
  const [rightTranslateY, setRightTranslateY] = useState(100);

  const handleMenuclick = () => setMenuIsActive(false);

  useEffect(() => {
    menuIsActive ? setRightTranslateY(0) : setRightTranslateY(100);
  }, [menuIsActive])

  return (
    <div 
      className="menu-right-cont"
      style={{
        transform: `translateY(${rightTranslateY}vh)`
      }}
    >
      <nav className="menu-nav">
        <div 
          className="link"
          onClick={ handleMenuclick }
        >
          <Link to="/" >Accueil</Link>
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
            style={{
              transform: `translateY(${rightTranslateY * 1}vh)`
            }}
          >
          <Link to="/projets" >Projets</Link>
        </li>
        <li 
          className="link" 
          onClick={ handleMenuclick }
          style={{
            transform: `translateY(${rightTranslateY * 2}vh)`
          }}
        >
          <Link to="/infos" >Infos</Link>
        </li>
        <li 
          className="link" 
          onClick={ handleMenuclick }
          style={{
            transform: `translateY(${rightTranslateY * 3}vh)`
          }}
        >
          <Link to="/contact" >Contact</Link>
        </li>
        </ol>
      </div>
      <SocialLinks />
    </div>
  );
}

export default MenuRight;