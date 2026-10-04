/*
 * Página de alta de cuenta. Si el usuario llegó desde el formulario
 * del inicio, el DNI viene en la URL (?dni=...) y se pasa al formulario
 * para que el campo ya aparezca completo.
 */
import { useSearchParams } from 'react-router-dom'
import Contact from '../../components/Contact/Contact.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'
import './Registro.css'

export default function Registro() {
  const [searchParams] = useSearchParams()
  const initialDni = searchParams.get('dni') ?? ''

  usePageTitle('Bank | Registro')

  return (
    <main>
      <Hero variant="register" />

      <section className="form-follow">
        <div className="container">
          <SectionTitle className="form-h2">El futuro comienza aquí.</SectionTitle>
          <Contact initialDni={initialDni} />
        </div>
      </section>
    </main>
  )
}
