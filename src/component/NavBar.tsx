 import { Link } from 'react-router-dom';
import '../style/NavBar.css'
function NavBar() {
  
  return (
    <header className='center navbar'>
        <nav>
            <ul>
                <li>ZENVYA</li>
                <li>Features</li>
                <li>Career Coach</li>
                <li className='begin'><Link to='dashboard'>GET STARTED</Link></li>
            </ul>
        </nav>
    </header>
  )   
}

export default NavBar;