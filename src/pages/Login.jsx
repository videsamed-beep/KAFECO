import { Link } from "react-router-dom"
import Logo from "../components/Logo"

function Login() {
  return (
    <div className="mobile-container">
      <Logo />

      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />

      <button className="primary-btn">Iniciar sesión</button>

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

