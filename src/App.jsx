import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import UserMenu from "./pages/UsuarioMenu"
import ProveedorMenu from "./pages/ProveedorMenu"
import AdminMenu from "./pages/AdminMenu"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<UserMenu />} />
      <Route path="/proveedor" element={<ProveedorMenu />} />
      <Route path="/admin" element={<AdminMenu />} />
    </Routes>
  )
}

export default App
