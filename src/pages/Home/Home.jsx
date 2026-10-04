/*
 * Página de inicio. Presenta la propuesta de Bank, los beneficios
 * y tres llamados a la acción: newsletter, productos y registro.
 * El formulario del hero pide el DNI y continúa el alta en /registro,
 * llevando ese dato en la URL para precargarlo.
 */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card.jsx'
import FormHint from '../../components/FormHint/FormHint.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import StackForm from '../../components/StackForm/StackForm.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'
import appImage from '../../assets/img-app.png'
import './Home.css'

const benefits = [
  {
    title: 'Sin comisiones',
    text: 'Sin cargos por mantenimiento de la cuenta ni por realizar transferencias Pix y TED',
  },
  {
    title: 'Servicio rápido',
    text: 'Asistencia móvil a cualquier hora del día',
  },
  {
    title: 'Rendimiento diario',
    text: 'El dinero depositado en la cuenta genera más ganancias que en una cuenta de ahorros',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [dni, setDni] = useState('')
  const [email, setEmail] = useState('')
  const [newsletterSent, setNewsletterSent] = useState(false)

  usePageTitle('Bank | Experiencia financiera')

  // Envía el DNI a la página de registro como parámetro de búsqueda.
  function handleHeroSubmit(event) {
    event.preventDefault()
    console.log('[Home] submit DNI hero:', dni)
    const params = new URLSearchParams()
    if (dni.trim()) {
      params.set('dni', dni.trim())
    }
    navigate(`/registro?${params.toString()}`)
  }

  // Formulario controlado del newsletter: guarda el e-mail y muestra la confirmación.
  function handleNewsletterSubmit(event) {
    event.preventDefault()
    console.log('[Home] submit newsletter:', email)
    setNewsletterSent(true)
  }

  return (
    <main>
      <Hero>
        <div className="hero-card">
          <SectionTitle className="hero-card-title">
            Solicita tu tarjeta de crédito y tu cuenta Bank
          </SectionTitle>

          <StackForm
            id="dni-hero"
            label="DNI"
            name="dni"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Ingrese tu DNI"
            value={dni}
            onChange={(event) => setDni(event.target.value)}
            onSubmit={handleHeroSubmit}
            buttonText="Avanzar"
          />
        </div>
      </Hero>

      <section className="benefits" aria-labelledby="beneficios-title">
        <SectionTitle id="beneficios-title">
          Todo lo que necesitas de un banco. <br />
          En una sola aplicación.
        </SectionTitle>
        <img
          className="app"
          src={appImage}
          alt="Pantalla de inicio de la app Bank"
        />

        <div className="container-benefits">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <SectionTitle id="cta-title">Empezá con Bank</SectionTitle>

        <div className="container-benefits">
          <Card
            variant="cta"
            title="Recibí novedades"
            description="Dejá tu e-mail y enterate de beneficios y lanzamientos."
          >
            {newsletterSent ? (
              <FormHint>¡Listo! Te vamos a escribir a {email}.</FormHint>
            ) : (
              <StackForm
                id="correo-novedades"
                label="E-mail"
                name="correo"
                type="email"
                autoComplete="email"
                placeholder="Ingrese tu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onSubmit={handleNewsletterSubmit}
                buttonText="Registrar"
              />
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
