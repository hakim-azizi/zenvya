import { Link } from "react-router-dom";


function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="health">Santé</Link></li>
        <li><Link to="finance">Finances</Link></li>
        <li><Link to="past-tense">Temps</Link></li>
        <li><Link to="habits">Habitude</Link></li>
        <li><Link to="ai-consulting">AI conseils</Link></li>
      </ul>
    </nav>

  );
}
export default Menu;
