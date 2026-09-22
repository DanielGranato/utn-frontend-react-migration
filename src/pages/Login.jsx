import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    identifier: '',
    password: '',
  })
  const [recoverEmail, setRecoverEmail] = useState('')
  const [loginSubmitted, setLoginSubmitted] = useState(false)
  const [recoverSubmitted, setRecoverSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Bank | Iniciar sesión'
  }, [])

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
      <section className="hero">
        <div className="container">
          <div className="hero-content-form">
            <h1>Bank, una experiencia financiera extraordinaria</h1>
          </div>

          <aside className="form-card">
            <h3>Iniciar sesión</h3>

            {loginSubmitted ? (
              <p className="form-hint">
                Sesión iniciada como {loginForm.identifier}.
              </p>
            ) : (
              <form className="register-form" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="login-identifier">E-mail o DNI</label>
                  <input
                    type="text"
                    id="login-identifier"
                    name="identifier"
                    autoComplete="username"
                    placeholder="Ingrese tu e-mail o DNI"
                    value={loginForm.identifier}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="login-password">Contraseña</label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Ingrese tu contraseña"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <button type="submit">Ingresar</button>
              </form>
            )}

            <p className="auth-links">
              <a href="#recuperar">¿Olvidaste tu contraseña?</a>
              <br />
              ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
            </p>
          </aside>
        </div>
      </section>

      <section className="auth-recover" id="recuperar">
        {recoverSubmitted ? (
          <p className="form-hint">
            Enviamos las instrucciones a {recoverEmail}.
          </p>
        ) : (
          <form className="recover-bar" onSubmit={handleRecoverSubmit}>
            <label htmlFor="email-recuperar">Recuperar contraseña</label>
            <input
              type="email"
              id="email-recuperar"
              name="email"
              autoComplete="email"
              placeholder="Ingrese tu e-mail"
              value={recoverEmail}
              onChange={(event) => setRecoverEmail(event.target.value)}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </section>
    </main>
  )
}
