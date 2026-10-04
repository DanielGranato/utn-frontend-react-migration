import './FormHint.css'

/* Mensaje de confirmación después de enviar un formulario. */
export default function FormHint({ children }) {
  return <p className="form-hint">{children}</p>
}

/* Mensaje de error de validación. */
export function FormError({ children }) {
  return <p className="form-error">{children}</p>
}
