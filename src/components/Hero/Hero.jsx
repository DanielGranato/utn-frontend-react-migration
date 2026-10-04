import './Hero.css'

const TITULO = 'Bank, una experiencia financiera extraordinaria'

/*
 * Bloque superior compartido por todas las páginas: imagen de fondo,
 * título y, si hace falta, el contenido de la derecha (formulario o aviso).
 * variant "form" alinea el título como en login; "register" reserva
 * el alto de la pantalla para que el formulario se superponga.
 */
export default function Hero({ variant = 'home', children }) {
  const isForm = variant === 'form' || variant === 'register'
  const sectionClass = variant === 'register' ? 'hero hero-register' : 'hero'
  const contentClass = isForm ? 'hero-content-form' : 'hero-content'

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className={contentClass}>
          <h1>{TITULO}</h1>
        </div>
        {children}
      </div>
    </section>
  )
}
