import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Quiénes somos</h3>
          <p>
            Innovamos tu relación con las finanzas para que puedas centrarte en
            lo que realmente importa.
          </p>
        </div>
        <div className="footer-col">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/productos">productos</Link>
            </li>
            <li>
              <Link to="/login">iniciar sesión</Link>
            </li>
            <li>
              <Link to="/registro">registrarse</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li>Puerto Madero, Buenos Aires, Argentina</li>
            <li>
              <a href="mailto:contacto@exemplo.com">contacto@exemplo.com</a>
            </li>
            <li>
              <a href="tel:+54999999999">+54 999 999 999</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Socials</h3>
          <SocialIcons />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 All rights reserved</p>
      </div>
    </footer>
  )
}
