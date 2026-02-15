import { Link } from "react-router-dom"
import Logo from "../components/Logo"

function ForgotPassword() {
  return (
    <div className="mobile-container">
      <Logo />

      <input type="email" placeholder="Ingresa tu correo" />

      <button className="primary-btn">Recuperar contraseña</button>

      <Link to="/" className="link">
        Volver al inicio
      </Link>
    </div>
  )
}

export default ForgotPassword
