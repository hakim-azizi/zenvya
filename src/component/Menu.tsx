import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import "../style/Menu.css";

function Menu() {
  const [image, Setimage] = useState("../images/menu-burger.png");
  const [value, setValue] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<boolean>(
    window.matchMedia("(min-width: 801px)").matches,
  );
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
        menu.style.marginTop = "0";
      } else {
        if (value === 1) {
          menu.style.visibility = "visible";
          menu.style.marginTop = "80px";
        } else {
          menu.style.marginTop = `-${height + 80}px`;
          menu.style.visibility = "hidden";
        }
      }
    });
  }, [windowWidth, height, value]);

  useEffect(() => {
    measureHeight();
  }, []);

  const openMenu = () => {
    if (menu && buttonRef.current) {
      if (value === 0) {
        setValue(1);
        Setimage("../images/menu-burger1.png");
        menu.style.marginTop = "80px";
        menu.style.visibility = "visible";
        buttonRef.current.style.marginRight = "1em";
      } else {
        setValue(0);
        Setimage("../images/menu-burger.png");
        menu.style.marginTop = `-${height + 80}px`;
        buttonRef.current.style.marginRight = "0";
        setTimeout(() => {
          menu.style.visibility = "hidden";
        }, 250); // Durée de l'animation de fermeture
      }
    }
  };

  return (
    <header className="center vertical-menu">
      <div>
        <p>
          <Link to="./">Z</Link>
        </p>
        <p>
          <Link to="./">
            ZENVYA
            <br />
            Assistant intelligent
          </Link>
        </p>
      </div>

      <nav className="menu">
        <button type="button" onClick={openMenu} ref={buttonRef}>
          <img src={image} alt="Ouverture du menu" />
        </button>
        <ul
          className="open-menu"
          ref={containerRef}
          style={{
            transition: "margin-top 0.3s ease",
          }}
        >
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="health">Santé</Link>
          </li>
          <li>
            <Link to="finance">Finances</Link>
          </li>
          <li>
            <Link to="past-tense">Temps</Link>
          </li>
          <li>
            <Link to="habits">Habitudes</Link>
          </li>
          <li>
            <Link to="ai-consulting">IA conseils</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Menu;
