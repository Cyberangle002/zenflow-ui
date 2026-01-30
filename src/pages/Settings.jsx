import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className={`flex-1 p-8 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all`}>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>
          <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Notification Emails</label>
                <input type="checkbox" className="mt-2 h-4 w-4 text-blue-600" defaultChecked />
              </div>
              <button className="px-6 py-2 bg-red-500 text-white rounded-lg">Deactivate Account</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}