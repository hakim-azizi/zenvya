import { Link } from "react-router-dom";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <section>
        <article>
          <h2>Z</h2>
          <p>Track less. Live more.</p>
        </article>
        <article>
          <h2>Produit</h2>
          <ul>
            <li>
              <Link to="">Features</Link>
            </li>
            <li>
              <Link to="">Pricing</Link>
            </li>
            <li>
              <Link to="">Roadmap</Link>
            </li>
          </ul>
        </article>
        <article>
          <h2>Ressources</h2>
          <ul>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Guides</Link>
            </li>
            <li>
              <Link to="">API</Link>
            </li>
          </ul>
        </article>
        <article>
          <h2>Legal</h2>
          <ul>
            <li>
              <Link to="">Privacy</Link>
            </li>
            <li>
              <Link to="">Terms</Link>
            </li>
            <li>
              <Link to="">Security</Link>
            </li>
          </ul>
        </article>
      </section>
      <section className="copyright">
        <p className="center">&copy; 2026 ZENVYA. Designed by Hakim AZIZI.</p>
      </section>
    </footer>
  );
}
export default Footer;
