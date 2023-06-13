import LogIn from "../contexts/pages/LogIn/LogIn"
import Register from "../contexts/pages/Register/Register"
import Dashboard from "../contexts/pages/Dashboard/Dashboard"
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes"
import { Navigate, Route, Routes } from "react-router-dom"

const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="/Dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default RoutesMain