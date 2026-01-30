import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}