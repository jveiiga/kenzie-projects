import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

const ProtectedRoutes  = () => {

    const {user, loading} = useContext(AuthContext)
    
    if(loading) {
        return null
    }

  return user ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoutes