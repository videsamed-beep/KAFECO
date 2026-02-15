import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (role) => {
    const fakeUser = {
      name: "Usuario Kafeco",
      role: role,
    }

    setUser(fakeUser)

    // Redirección según rol
    if (role === "usuario") navigate("/user")
    if (role === "proveedor") navigate("/proveedor")
    if (role === "admin") navigate("/admin")
  }

  const logout = () => {
    setUser(null)
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
