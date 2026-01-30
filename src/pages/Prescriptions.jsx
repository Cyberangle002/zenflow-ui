import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Prescriptions() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const prescriptions = [
    { id: 1, med: "Amoxicillin", dose: "500mg", doctor: "Dr. Sarah Johnson", date: "Jan 25, 2026" },
    { id: 2, med: "Lisinopril", dose: "10mg", doctor: "Dr. Michael Chen", date: "Jan 10, 2026" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className={`flex-1 p-8 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all`}>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Active Prescriptions</h1>
          <div className="grid gap-4">
            {prescriptions.map(p => (
              <Card key={p.id}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">{p.med} ({p.dose})</h3>
                    <p className="text-sm text-gray-500">Prescribed by {p.doctor}</p>
                  </div>
                  <span className="text-gray-400">{p.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}