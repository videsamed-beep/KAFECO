import Logo from "../components/Logo"

function UsuarioMenu() {
  return (
    <div className="mobile-container">
      
      <header className="top-bar">
        <Logo />
        <div className="icons">
          🔍 🛍
        </div>
      </header>

      <h2>Bienvenido!</h2>
      <p>Comienza a explorar café fresco y auténtico</p>

      <h3>Catálogo</h3>

      <div className="card-grid">
        <div className="card">Café orgánico</div>
        <div className="card">Café Arábigo</div>
        <div className="card">Café molido</div>
      </div>

      <h3>Productos destacados</h3>

      <div className="card-grid">
        <div className="card">Café de origen</div>
        <div className="card">Café artesanal</div>
        <div className="card">Café reserva andina</div>
      </div>

    </div>
  )
}

export default UsuarioMenu
