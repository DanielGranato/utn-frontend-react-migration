import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialForm = {
  nombre: '',
  email: '',
  dni: '',
  telefono: '',
  fechaNacimiento: '',
  password: '',
  passwordConfirm: '',
  terminos: false,
}

export default function Contact({ initialDni = '' }) {
  const [form, setForm] = useState({
    ...initialForm,
    dni: initialDni,
  })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, type, checked, value } = event.target
    const nextValue = type === 'checkbox' ? checked : value

    console.log(`[Contact] campo alterado: ${name} ->`, nextValue)

    setForm((prev) => ({
      ...prev,
      [name]: nextValue,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('[Contact] submit disparado com:', form)

    if (form.password !== form.passwordConfirm) {
      setError('Las contraseñas no coinciden.')
      console.log('[Contact] erro de validación: contraseñas no coinciden')
      return
    }

    setError('')
    setSubmitted(true)
    console.log('[Contact] cuenta creada (simulado, sin backend)')
  }

  function handleReset() {
    console.log('[Contact] formulario reseteado')
    setForm(initialForm)
    setError('')
  }

  if (submitted) {
    return (
      <aside className="form-card">
        <h3>Cuenta creada</h3>
        <p className="form-hint">
          Gracias, {form.nombre}. Ya podés iniciar sesión con {form.email}.
        </p>
        <p className="auth-links">
          <Link to="/login">Ir a iniciar sesión</Link>
        </p>
      </aside>
    )
  }

  return (
    <aside className="form-card">
      <h3>Crear tu cuenta</h3>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            autoComplete="name"
            placeholder="Ingrese tu nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-registro">E-mail</label>
          <input
            type="email"
            id="email-registro"
            name="email"
            autoComplete="email"
            placeholder="Ingrese tu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dni-registro">DNI</label>
          <input
            type="text"
            id="dni-registro"
            name="dni"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Ingrese tu DNI"
            value={form.dni}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono-registro">Teléfono</label>
          <input
            type="tel"
            id="telefono-registro"
            name="telefono"
            autoComplete="tel"
            placeholder="Ingrese tu teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
          <input
            type="date"
            id="fecha-nacimiento"
            name="fechaNacimiento"
            autoComplete="bday"
            value={form.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password-registro">Contraseña</label>
          <input
            type="password"
            id="password-registro"
            name="password"
            autoComplete="new-password"
            placeholder="Mínimo 8 caracteres"
            minLength={8}
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password-confirm">Confirmar contraseña</label>
          <input
            type="password"
            id="password-confirm"
            name="passwordConfirm"
            autoComplete="new-password"
            placeholder="Repetí tu contraseña"
            minLength={8}
            value={form.passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            checked={form.terminos}
            onChange={handleChange}
            required
          />
          <label htmlFor="terminos">
            Acepto los términos y condiciones y la política de privacidad
          </label>
        </div>

        {error ? <p className="form-error">{error}</p> : null}

        <div className="form-actions">
          <button type="submit">Crear cuenta</button>
          <button type="button" className="form-reset" onClick={handleReset}>
            Limpiar formulario
          </button>
        </div>
      </form>

      <p className="auth-links">
        ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
      </p>
    </aside>
  )
}
