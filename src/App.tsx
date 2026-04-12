import { Outlet } from "react-router-dom";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import "./style/App.css"

function App() {
  return (
    <>
      <div id="contener">
      <Header />
      <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
