/*
 * Formulario de registro controlado. Un solo estado guarda todos los
 * campos. Al enviar, comprueba que las contraseñas coincidan; si todo
 * está bien, muestra la confirmación. El alta es simulada, sin servidor.
 * initialDni permite precargar el documento cuando viene desde el inicio.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormCard from '../FormCard/FormCard.jsx'
import FormField, { CheckboxField } from '../FormField/FormField.jsx'
import FormHint, { FormError } from '../FormHint/FormHint.jsx'
import './Contact.css'

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

const fields = [
  {
    id: 'nombre',
    name: 'nombre',
    label: 'Nombre completo',
    autoComplete: 'name',
    placeholder: 'Ingrese tu nombre completo',
  },
  {
    id: 'email-registro',
    name: 'email',
    label: 'E-mail',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Ingrese tu e-mail',
  },
  {
    id: 'dni-registro',
    name: 'dni',
    label: 'DNI',
    inputMode: 'numeric',
    autoComplete: 'off',
    placeholder: 'Ingrese tu DNI',
  },
  {
    id: 'telefono-registro',
    name: 'telefono',
    label: 'Teléfono',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: 'Ingrese tu teléfono',
  },
  {
    id: 'fecha-nacimiento',
    name: 'fechaNacimiento',
    label: 'Fecha de nacimiento',
    type: 'date',
    autoComplete: 'bday',
  },
  {
    id: 'password-registro',
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Mínimo 8 caracteres',
    minLength: 8,
  },
  {
    id: 'password-confirm',
    name: 'passwordConfirm',
    label: 'Confirmar contraseña',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Repetí tu contraseña',
    minLength: 8,
  },
]

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

    // Validación propia: el resto de los campos usa los required del HTML.
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
      <FormCard title="Cuenta creada">
        <FormHint>
          Gracias, {form.nombre}. Ya podés iniciar sesión con {form.email}.
        </FormHint>
        <p className="auth-links">
          <Link to="/login">Ir a iniciar sesión</Link>
        </p>
      </FormCard>
    )
  }

  return (
    <FormCard title="Crear tu cuenta">
      <form className="register-form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            value={form[field.name]}
            onChange={handleChange}
          />
        ))}

        <CheckboxField
          id="terminos"
          name="terminos"
          label="Acepto los términos y condiciones y la política de privacidad"
          checked={form.terminos}
          onChange={handleChange}
        />

        {error ? <FormError>{error}</FormError> : null}

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
    </FormCard>
  )
}
