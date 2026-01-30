import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Users", value: "12,543", change: "+15%", icon: "👥", color: "from-blue-500 to-cyan-500" },
    { title: "Active Doctors", value: "3,842", change: "+8%", icon: "👨‍⚕️", color: "from-purple-500 to-pink-500" },
    { title: "Appointments", value: "24,891", change: "+23%", icon: "📅", color: "from-green-500 to-emerald-500" },
    { title: "Revenue", value: "$89,432", change: "+12%", icon: "💰", color: "from-orange-500 to-red-500" },
  ];

  const recentUsers = [
    { name: "Alice Johnson", email: "alice@example.com", type: "Patient", status: "Active", joined: "2 days ago" },
    { name: "Dr. Robert Smith", email: "robert@example.com", type: "Doctor", status: "Active", joined: "3 days ago" },
    { name: "Emma Williams", email: "emma@example.com", type: "Patient", status: "Pending", joined: "5 days ago" },
    { name: "Dr. Michael Brown", email: "michael@example.com", type: "Doctor", status: "Active", joined: "1 week ago" },
  ];

  const recentAppointments = [
    { patient: "Sarah Miller", doctor: "Dr. Johnson", date: "Today, 2:00 PM", status: "Confirmed" },
    { patient: "John Davis", doctor: "Dr. Williams", date: "Today, 3:30 PM", status: "Pending" },
    { patient: "Lisa Anderson", doctor: "Dr. Chen", date: "Tomorrow, 10:00 AM", status: "Confirmed" },
    { patient: "Mark Wilson", doctor: "Dr. Taylor", date: "Tomorrow, 2:00 PM", status: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`flex-1 p-6 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage your platform from here.</p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 mb-8 overflow-x-auto pb-2"
          >
            {["overview", "users", "appointments", "analytics"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-5`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{stat.icon}</span>
                    <span className={`px-3 py-1 bg-linear-to-r ${stat.color} text-white text-sm font-semibold rounded-full`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.title}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Users Table */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recent Users</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View All
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {recentUsers.map((user, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{user.name}</h3>
                            <p className="text-sm text-gray-400">{user.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            user.status === "Active" 
                              ? "bg-green-500/20 text-green-400" 
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {user.status}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">{user.joined}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Appointments */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recent Appointments</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Manage
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {recentAppointments.map((appointment, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{appointment.patient}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          appointment.status === "Confirmed" 
                            ? "bg-green-500/20 text-green-400" 
                            : appointment.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{appointment.doctor}</p>
                      <p className="text-xs text-gray-500 mt-1">{appointment.date}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Analytics Chart Placeholder */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Platform Analytics</h2>
              <div className="h-64 bg-linear-to-br from-gray-700/50 to-gray-900/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-6xl mb-4"
                  >
                    📊
                  </motion.div>
                  <p className="text-gray-400">Chart visualization would appear here</p>
                  <p className="text-sm text-gray-500 mt-2">Integrate with charting library for live data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}