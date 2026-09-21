import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Contact from '../components/Contact.jsx'

export default function Registro() {
  const [searchParams] = useSearchParams()
  const initialDni = searchParams.get('dni') ?? ''

  useEffect(() => {
    document.title = 'Bank | Registro'
  }, [])

  return (
    <main>
      <section className="hero hero-register">
        <div className="container">
          <div className="hero-content-form">
            <h1>Bank, una experiencia financiera extraordinaria</h1>
          </div>
        </div>
      </section>

      <section className="form-follow">
        <div className="container">
          <h2 className="form-h2">El futuro comienza aquí.</h2>
          <Contact initialDni={initialDni} />
        </div>
      </section>
    </main>
  )
}
