import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardProfile from "../pages/DashboardProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "../ProtectedRoutes";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='*'element={<Navigate replace to="/"/>} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
