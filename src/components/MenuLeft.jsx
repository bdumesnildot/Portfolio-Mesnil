import { useState, useEffect } from "react";

import "/src/styles/components-styles/Menu.scss";

function MenuLeft({ menuIsActive }) {
  const [leftTranslateY, setLeftTranslateY] = useState(-100);
  const [leftScaleY, setLeftScaleY] = useState(0);

  useEffect(() => {
    if (menuIsActive) {
      setLeftTranslateY(0);
      setLeftScaleY(1);
    } else {
      setLeftTranslateY(-100);
      setLeftScaleY(0);
    }
  }, [menuIsActive])

  return (
      <div 
        className="menu-left-cont"
        style={{
          transform: `translateY(${leftTranslateY}vh)`
        }}
      >
        <p className="big-text">Portfolio</p>
        <div 
          className="menu-left-image"
          style={{
            transform: `scaleY(${leftScaleY})`,
            transformOrigin: "top",
          }}
        >
          <div className="background"></div>
        </div>
        <p className="big-text">Portfolio</p>
        
      </div>
  );
}

export default MenuLeft;