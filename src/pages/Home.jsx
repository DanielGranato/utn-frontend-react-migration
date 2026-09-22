import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../components/Card.jsx'
import appImage from '../assets/img-app.png'

export default function Home() {
  const navigate = useNavigate()
  const [dni, setDni] = useState('')
  const [email, setEmail] = useState('')
  const [newsletterSent, setNewsletterSent] = useState(false)

  useEffect(() => {
    document.title = 'Bank | Experiencia financiera'
  }, [])

  function handleHeroSubmit(event) {
    event.preventDefault()
    console.log('[Home] submit DNI hero:', dni)
    const params = new URLSearchParams()
    if (dni.trim()) {
      params.set('dni', dni.trim())
    }
    navigate(`/registro?${params.toString()}`)
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    console.log('[Home] submit newsletter:', email)
    setNewsletterSent(true)
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bank, una experiencia financiera extraordinaria</h1>
          </div>

          <div className="hero-card">
            <h2 className="hero-card-title">
              Solicita tu tarjeta de crédito y tu cuenta Bank
            </h2>

            <form className="stack-form" onSubmit={handleHeroSubmit}>
              <label htmlFor="dni-hero">DNI</label>
              <input
                type="text"
                id="dni-hero"
                name="dni"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Ingrese tu DNI"
                value={dni}
                onChange={(event) => setDni(event.target.value)}
                required
              />
              <button type="submit">Avanzar</button>
            </form>
          </div>
        </div>
      </section>

      <section className="benefits" aria-labelledby="beneficios-title">
        <h2 id="beneficios-title">
          Todo lo que necesitas de un banco. <br />
          En una sola aplicación.
        </h2>
        <img
          className="app"
          src={appImage}
          alt="Pantalla de inicio de la app Bank"
        />

        <div className="container-benefits">
          <article>
            <h3>Sin comisiones</h3>
            <p>
              Sin cargos por mantenimiento de la cuenta ni por realizar
              transferencias Pix y TED
            </p>
          </article>
          <article>
            <h3>Servicio rápido</h3>
            <p>Asistencia móvil a cualquier hora del día</p>
          </article>
          <article>
            <h3>Rendimiento diario</h3>
            <p>
              El dinero depositado en la cuenta genera más ganancias que en una
              cuenta de ahorros
            </p>
          </article>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Empezá con Bank</h2>

        <div className="container-benefits">
          <Card
            variant="cta"
            title="Recibí novedades"
            description="Dejá tu e-mail y enterate de beneficios y lanzamientos."
          >
            {newsletterSent ? (
              <p className="form-hint">¡Listo! Te vamos a escribir a {email}.</p>
            ) : (
              <form className="stack-form" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="correo-novedades">E-mail</label>
                <input
                  type="email"
                  id="correo-novedades"
                  name="correo"
                  autoComplete="email"
                  placeholder="Ingrese tu e-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <button type="submit">Registrar</button>
              </form>
            )}
          </Card>

          <Card
            variant="cta"
            title="Nuestros productos"
            description="Conocé tarjetas, cuentas y beneficios pensados para vos."
          >
            <Link className="cta-button" to="/productos">
              Ver productos
            </Link>
          </Card>

          <Card
            variant="cta"
            title="Abrí tu cuenta"
            description="Completá tus datos y empezá a usar Bank en minutos."
          >
            <Link className="cta-button" to="/registro">
              Registrarse
            </Link>
          </Card>
        </div>
      </section>
    </main>
  )
}
