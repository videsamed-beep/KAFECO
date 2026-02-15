import Logo from "../components/Logo"

function ProveedorMenu() {
  return (
    <div className="mobile-container">
      
      <header className="top-bar">
        <Logo />
        <div className="icons">
          🔍 🛍
        </div>
      </header>

      <h2>Bienvenido!</h2>
      <p>Administra tus productos y conecta con tus clientes</p>

      <h3>Tus productos</h3>

      <div className="card-grid">
        <div className="card">Café orgánico</div>
        <div className="card">Café Arábigo</div>
        <div className="card">Café molido</div>
      </div>

      <h3>Pedidos recibidos</h3>

      <div className="card-grid">
        <div className="card">Café de origen</div>
        <div className="card">Café artesanal</div>
        <div className="card">Café reserva andina</div>
      </div>

      <h3>Tus ventas</h3>

    </div>
  )
}

export default ProveedorMenu

