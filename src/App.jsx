/*
 * Rutas de la aplicación. Todas las páginas comparten el mismo Layout
 * (encabezado y pie). El contenido de cada ruta se muestra en el Outlet.
 *
 *   /            inicio
 *   /login       iniciar sesión y recuperar contraseña
 *   /productos   catálogo de productos
 *   /registro    alta de cuenta
 */
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Productos from './pages/Productos.jsx'
import Registro from './pages/Registro.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
    </Routes>
  )
}
