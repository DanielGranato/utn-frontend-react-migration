import './FormCard.css'

/* Tarjeta violeta que envuelve los formularios de login y de registro. */
export default function FormCard({ title, children }) {
  return (
    <aside className="form-card">
      <h3>{title}</h3>
      {children}
    </aside>
  )
}
