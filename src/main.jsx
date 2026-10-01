/*
 * Punto de entrada de Bank, una landing de un producto fintech ficticio.
 * Monta la aplicación React en el elemento #root y la envuelve con
 * BrowserRouter para navegar entre páginas sin recargar el navegador.
 * El basename toma la ruta base de Vite, necesaria al publicar en GitHub Pages.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './css/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
