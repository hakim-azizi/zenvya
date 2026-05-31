import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import NavBar from "./NavBar";

function Header() {
  const location = useLocation().pathname;

  return location === "/" ? <NavBar /> : <Menu />;
}
export default Header;
