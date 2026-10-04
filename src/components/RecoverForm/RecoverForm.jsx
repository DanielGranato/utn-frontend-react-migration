import FormHint from '../FormHint/FormHint.jsx'
import './RecoverForm.css'

/*
 * Barra de recuperación de contraseña, al pie de la página de login.
 * Al enviar, muestra la confirmación en el mismo lugar.
 */
export default function RecoverForm({ email, onChange, onSubmit, submitted }) {
  return (
    <section className="auth-recover" id="recuperar">
      {submitted ? (
        <FormHint>Enviamos las instrucciones a {email}.</FormHint>
      ) : (
        <form className="recover-bar" onSubmit={onSubmit}>
          <label htmlFor="email-recuperar">Recuperar contraseña</label>
          <input
            type="email"
            id="email-recuperar"
            name="email"
            autoComplete="email"
            placeholder="Ingrese tu e-mail"
            value={email}
            onChange={onChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  )
}
