/*
 * Encabezado con el logo y la navegación principal (productos,
 * iniciar sesión y registro). En pantallas chicas el menú se abre
 * con el botón hamburguesa; al cambiar de ruta se cierra solo.
 */
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useMenu from '../hooks/useMenu.js'
import logo from '../assets/logo.png'

export default function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu()
  const location = useLocation()

  // Cierra el menú móvil cada vez que cambia la ruta.
  useEffect(() => {
    closeMenu()
  }, [location.pathname, closeMenu])

  return (
    <header className={menuOpen ? 'header menu-open' : 'header'}>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo de Bank" />
      </Link>

      <button
        type="button"
        className="menu-button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav aria-label="Navegación principal">
        <ul>
          <li className="button">
            <Link to="/productos">productos</Link>
          </li>
          <li className="button">
            <Link to="/login">iniciar sesión</Link>
          </li>
          <li className="button">
            <Link to="/registro">registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
