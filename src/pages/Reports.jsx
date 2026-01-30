import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className={`flex-1 p-8 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all`}>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Medical Reports</h1>
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center">
            <span className="text-5xl mb-4 block">📊</span>
            <p className="text-gray-500">No lab reports available for download yet.</p>
          </div>
        </main>
      </div>
    </div>
  );
}