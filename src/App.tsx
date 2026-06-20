import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

import "./style/App.css";

function App() {
  const location = useLocation().pathname;
  const homeId = location === "/" ? " contener-home" : "";

  return (
    <>
      <div id={`contener${homeId}`}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
