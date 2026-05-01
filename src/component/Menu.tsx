import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import '../style/Menu.css'

function Menu() {
    const [image, Setimage] = useState("../images/images/menu-burger.png");
    const [value, setValue] = useState(0);
    const [height, setHeight] = useState(0);
    const containerRef = useRef<HTMLUListElement | null>(null);
    const [windowWidth,setWindowWidth] = useState<boolean>(window.matchMedia('(min-width: 801px)').matches);
    const measureHeight = () => {
        if (containerRef.current) {
          setHeight(containerRef.current.scrollHeight);
        }
      };
    const menu = containerRef.current;
    useEffect(() => {
      window.addEventListener("resize", () => {
      const menu = containerRef.current;

      if (!menu) return;

      setWindowWidth(window.matchMedia("(min-width: 801px)").matches);
      if (window.matchMedia("(min-width: 801px)").matches) {
        menu.style.visibility = "visible";
        menu.style.height = `${height}px`;
      } else {
      if (value === 1) {
        menu.style.visibility = "visible";
        menu.style.marginTop='80px';
      } else {
        menu.style.marginTop=`-${height+80}px`;
        menu.style.visibility = "hidden";
    }
    }
 }); 
 }, [windowWidth, height, value]);
    
      useEffect(() => {
        measureHeight();
      }, []);

    const openMenu = () => {
  
    if(menu){
  
    if (value === 0) {
      setValue(1);
      Setimage("../images/images/menu-burger1.png");
      menu.style.marginTop='80px';
      menu.style.visibility = "visible";
      // transform: scale(1);
      menu.style.height = `${height}px`;
    } else {
      setValue(0);
      Setimage("../images/images/menu-burger.png");
      menu.style.marginTop=`-${height+80}px`;
      // menu.style.height = "0px";
      setTimeout(() => {
        menu.style.visibility = "hidden";
      }, 250); // Durée de l'animation de fermeture
    }}
  };

  return (
    <header className='vertical-menu'>
      <div>
        <p>
          Z
        </p>
        <p>
          ZENVYA<br />
          Assistant intelligent
        </p>
      </div>
    <nav className="menu">
      <button type="button" onClick={openMenu}>
        <img src={image} alt="Ouverture du menu" />
      </button>
                <ul
            className="open-menu"
            ref={containerRef}
            style={{
              transition: "margin-top 0.3s ease",
            }}
            >
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="health">Santé</Link></li>
        <li><Link to="finance">Finances</Link></li>
        <li><Link to="past-tense">Temps</Link></li>
        <li><Link to="habits">Habitude</Link></li>
        <li><Link to="ai-consulting">AI conseils</Link></li>
      </ul>
    </nav>
  </header>
  );
}
export default Menu;
