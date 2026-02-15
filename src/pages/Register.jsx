import { Link } from "react-router-dom"
import Logo from "../components/Logo"

function Register() {
  return (
    <div className="mobile-container">
      <Logo />

      <input type="text" placeholder="Nombre completo" />
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />

      <button className="primary-btn">Registrarse</button>

      <Link to="/" className="link">
        Ya tengo cuenta
      </Link>
    </div>
  )
}

export default Register
