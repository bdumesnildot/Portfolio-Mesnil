import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages-styles/Info.scss";
import ToggleButton from "../components/ToggleButton";

function Info() {
  const [isFrench, setIsFrench] = useState(true);
  // const [leftTranslateY, setLeftTranslateY] = useState(-100);

  const location = useLocation();
  const isInfoPage = location.pathname.includes("/infos");
  
  useEffect(() => {

  }, [isInfoPage])

  return(
    <div className="info">
      <h2>Info</h2>
      <div className="info-cont">
        <ToggleButton isFrench={isFrench} setIsFrench={setIsFrench} />
        <section>
          {isFrench &&
            <article id="aPropos">
              <h3>A propos</h3>
              <p>
                Ingénieur en reconversion, je suis passionné par la programmation web. Mon objectif est de développer des applications Web évolutives, maintenables et intuitives qui offrent une expérience utilisateur fluide. J'apprends et expérimente constamment de nouvelles technologies et frameworks.
              </p>
              <p>
                Je cible plus particulièrement les solutions JavaScript, TypeScript, React, Express et Next (et pourquoi pas dans un futur proche Vue.js, Java, Angular, Python, Ruby, RoR et bien d'autres).
              </p>
              <p>
                Je suis à la recherche d'un contrat à débuter dès août 2023 (aussi ouvert aux offres de stages et d'alternances).
              </p>
            </article>
          }
          {!isFrench &&
            <article id="about">
              <h3>About</h3>
              <p>
                Engineer on retraining, I am passionate about web programming. My goal is to develop scalable, maintainable and user-friendly web applications that provide a seamless user experience. I am constantly learning and experimenting new technologies and frameworks.
              </p>
              <p>
                I more specifically target JavaScript, TypeScript, React, Express and Next (and may be in a near future Vue.js, Java, Angular, Python, Ruby, RoR & many others).
              </p>
              <p>
                I am looking for a contract to start in August 2023 (also open to internship and work-study offers).
              </p>
            </article>
          }
        </section>
      </div>
      <div className="background">
        <div className="right-background"></div>
      </div>
    </div>
  )
} 

export default Info;
