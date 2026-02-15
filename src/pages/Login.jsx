import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Logo from "../components/Logo"
import { useState } from "react"

function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
  if (email.endsWith("@adminkafeco.com")) {
    login("admin")
  } else if (email.endsWith("@proveedorkafeco.com")) {
    login("proveedor")
  } else {
    login("usuario")
  }
}


  return (
    <div className="mobile-container">
      <Logo />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary-btn" onClick={handleLogin}>
        Iniciar sesión
      </button>

      <Link to="/forgot" className="link">
        ¿Olvidaste tu contraseña?
      </Link>

      <Link to="/register" className="link">
        Crear cuenta
      </Link>
    </div>
  )
}

export default Login

