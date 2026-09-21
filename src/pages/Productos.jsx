import { useEffect } from 'react'
import Card from '../components/Card.jsx'
import img01 from '../assets/img01.png'
import img02 from '../assets/img02.jpg'
import img03 from '../assets/img03.jpg'
import img04 from '../assets/img04.jpg'
import img05 from '../assets/img05.jpg'
import img06 from '../assets/img06.jpg'

const products = [
  {
    title: 'Tarjeta de Crédito',
    description: 'Gestiona tus compras con seguridad y sin complicaciones.',
    image: img01,
    alt: 'Ella esta frente al mar y tiene en su mano un celular con la aplicacion del banco',
  },
  {
    title: 'Bank Auto',
    description: 'Financiación de autos y motos en cuestión de momentos.',
    image: img02,
    alt: 'Ella esta en una autopista y tiene una tarjeta del banco en su mano',
  },
  {
    title: 'Cuenta Global',
    description: 'Cuentas en dólares y euros con comisiones mucho más bajas',
    image: img03,
    alt: 'El esta en viaje internacional y tiene un celular com la aplicacion del banco',
  },
  {
    title: 'Bank Invest',
    description: 'Invierte en el extranjero usando la misma aplicación.',
    image: img04,
    alt: 'Ella esta de vacaciones y tiene un celular con la aplicacion del banco',
  },
  {
    title: 'Lugares Seguros',
    description: 'Tecnología de seguridad basada en la geolocalización.',
    image: img05,
    alt: 'Ella esta en su vecindario y tiene la aplicacion del banco en su celular',
  },
  {
    title: 'Préstamos Personales',
    description: 'Crédito para mantener las facturas al día.',
    image: img06,
    alt: 'Ella esta surfeando y tiene la aplicacion del banco en su celular',
  },
]

export default function Productos() {
  useEffect(() => {
    document.title = 'Bank | Productos'
  }, [])

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bank, una experiencia financiera extraordinaria</h1>
          </div>

          <aside className="hero-card">
            <div className="card-arrow-container">
              <svg
                className="elegant-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              <h3>Descubra nuestros productos financieros y beneficios</h3>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <h2>Vos elegís los beneficios que más te importan</h2>

        <div className="products-grid">
          {products.map((product) => (
            <Card
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
