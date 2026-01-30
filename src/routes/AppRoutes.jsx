import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import Prescriptions from "../pages/Prescriptions";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/prescriptions" element={<Prescriptions />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}