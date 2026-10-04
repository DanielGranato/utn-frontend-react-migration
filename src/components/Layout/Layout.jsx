/*
 * Estructura común de todas las páginas: encabezado, contenido
 * de la ruta activa (Outlet) y pie de página.
 */
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
