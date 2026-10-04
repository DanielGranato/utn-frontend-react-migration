import './SectionTitle.css'

/*
 * Título de sección (h2). El estilo base es el mismo en todo el sitio;
 * className permite la variante del formulario de registro o del hero.
 */
export default function SectionTitle({ id, className, children }) {
  return (
    <h2 id={id} className={className}>
      {children}
    </h2>
  )
}
