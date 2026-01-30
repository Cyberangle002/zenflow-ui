import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Appointments() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className={`flex-1 p-8 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all`}>
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-500 mt-2">Manage and schedule your medical visits.</p>
          
          <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-center py-10 text-gray-400 italic">No new appointments to display. Click 'Book New' to start.</p>
          </div>
        </main>
      </div>
    </div>
  );
}