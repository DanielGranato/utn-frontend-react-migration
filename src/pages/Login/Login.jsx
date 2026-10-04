/*
 * Inicio de sesión y recuperación de contraseña.
 * Ambos formularios son controlados: el estado guarda lo que escribe
 * el usuario y, al enviar, se simula el resultado en pantalla
 * (no hay backend; los datos se registran en la consola).
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormCard from '../../components/FormCard/FormCard.jsx'
import FormField from '../../components/FormField/FormField.jsx'
import FormHint from '../../components/FormHint/FormHint.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import RecoverForm from '../../components/RecoverForm/RecoverForm.jsx'
import usePageTitle from '../../hooks/usePageTitle.js'

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    identifier: '',
    password: '',
  })
  const [recoverEmail, setRecoverEmail] = useState('')
  const [loginSubmitted, setLoginSubmitted] = useState(false)
  const [recoverSubmitted, setRecoverSubmitted] = useState(false)

  usePageTitle('Bank | Iniciar sesión')

  function handleLoginChange(event) {
    const { name, value } = event.target
    console.log(`[Login] campo alterado: ${name} ->`, value)
    setLoginForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleLoginSubmit(event) {
    event.preventDefault()
    console.log('[Login] submit disparado con:', loginForm)
    setLoginSubmitted(true)
  }

  function handleRecoverSubmit(event) {
    event.preventDefault()
    console.log('[Login] recuperación de contraseña solicitada para:', recoverEmail)
    setRecoverSubmitted(true)
  }

  return (
    <main>
      <Hero variant="form">
        <FormCard title="Iniciar sesión">
          {loginSubmitted ? (
            <FormHint>Sesión iniciada como {loginForm.identifier}.</FormHint>
          ) : (
            <form className="register-form" onSubmit={handleLoginSubmit}>
              <FormField
                id="login-identifier"
                name="identifier"
                label="E-mail o DNI"
                autoComplete="username"
                placeholder="Ingrese tu e-mail o DNI"
                value={loginForm.identifier}
                onChange={handleLoginChange}
              />

              <FormField
                id="login-password"
                name="password"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                placeholder="Ingrese tu contraseña"
                value={loginForm.password}
                onChange={handleLoginChange}
              />

              <button type="submit">Ingresar</button>
            </form>
          )}

          <p className="auth-links">
            <a href="#recuperar">¿Olvidaste tu contraseña?</a>
            <br />
            ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
          </p>
        </FormCard>
      </Hero>

      <RecoverForm
        email={recoverEmail}
        onChange={(event) => setRecoverEmail(event.target.value)}
        onSubmit={handleRecoverSubmit}
        submitted={recoverSubmitted}
      />
    </main>
  )
}
