import { useState, useEffect } from "react";

import "../styles/components-styles/Menu.scss";

function Menu({ menuIsActive }) {
  const [leftY, setLeftY] = useState(-100);

  useEffect(() => {
    if (menuIsActive) {
      setLeftY(0);
    } else {
      setLeftY(-100);
    }
  }, [menuIsActive])

  return (
      <div 
        className="menu-left-cont"
        style={{
          transform: `translateY(${leftY}vh)`
        }}
      >
        <p className="big-text">Portfolio</p>
        <p className="big-text">Portfolio</p>
        
        <div className="menu-left-image">
          <div className="background"></div>
        </div>
      </div>
  );
}

export default Menu;