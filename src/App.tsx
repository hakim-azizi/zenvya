import { Outlet } from "react-router-dom";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
