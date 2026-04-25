import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";

import "./style/App.css"

function App() {
  const location = useLocation().pathname;
   const homeId = location === '/' ? ' contener-home' : '';

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
