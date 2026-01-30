import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const stats = [
    {
      title: "Appointments",
      value: "24",
      change: "+12%",
      icon: "📅",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Consultations",
      value: "18",
      change: "+8%",
      icon: "💬",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Prescriptions",
      value: "32",
      change: "+15%",
      icon: "💊",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Reports",
      value: "12",
      change: "+5%",
      icon: "📊",
      color: "from-orange-500 to-red-500",
    },
  ];

  const upcomingAppointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Today, 2:00 PM",
      type: "Video Call",
      status: "confirmed",
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "Tomorrow, 10:30 AM",
      type: "In-Person",
      status: "pending",
    },
    {
      doctor: "Dr. Emily Williams",
      specialty: "Neurologist",
      date: "Feb 2, 3:00 PM",
      type: "Video Call",
      status: "confirmed",
    },
  ];

  const recentActivity = [
    {
      action: "Prescription received",
      doctor: "Dr. Sarah Johnson",
      time: "2 hours ago",
      icon: "💊",
    },
    {
      action: "Appointment scheduled",
      doctor: "Dr. Michael Chen",
      time: "5 hours ago",
      icon: "📅",
    },
    {
      action: "Lab report uploaded",
      doctor: "City Lab",
      time: "1 day ago",
      icon: "🔬",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"
            }`}
        >
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-10 rounded-2xl`} />
                <Card className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{stat.icon}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                      className={`px-3 py-1 bg-linear-to-r ${stat.color} text-white text-sm font-semibold rounded-full`}
                    >
                      {stat.change}
                    </motion.span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Upcoming Appointments */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
                  <motion.button
                    onClick={() => navigate("/appointments")} // Now matches the route!
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book New
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="p-4 bg-linear-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                            👨‍⚕️
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{appointment.date}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-600">{appointment.type}</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${appointment.status === "confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                                }`}
                            >
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>

                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl"
                      >
                        {activity.icon}
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.doctor}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-left flex items-center gap-3"
                    >
                      <span>📞</span>
                      <span>Call Support</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-left flex items-center gap-3"
                    >
                      <span>📄</span>
                      <span>View Reports</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-left flex items-center gap-3"
                    >
                      <span>💳</span>
                      <span>Payment History</span>
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Health Tips Banner */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600 p-8 text-white">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">💡 Health Tip of the Day</h3>
                <p className="text-blue-100 mb-4">
                  Regular health checkups can help detect problems before they become serious. Schedule your annual checkup today!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}