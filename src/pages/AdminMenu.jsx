import Logo from "../components/Logo"

function AdminMenu() {
  return (
    <div className="mobile-container">
      
      <header className="top-bar">
        <Logo />
      </header>

      <h2>Panel de Administración</h2>

      <div className="admin-grid">
        <div className="card">Gestionar usuarios</div>
        <div className="card">Gestionar productos</div>
        <div className="card">Ver reportes</div>
        <div className="card">Configuración</div>
      </div>

    </div>
  )
}

export default AdminMenu

