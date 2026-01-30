import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🏥
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                FindOC
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05, color: "#0891b2" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-700 hover:text-cyan-600 font-semibold transition-colors"
            >
              🔔
            </motion.button>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                J
              </motion.button>

              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                >
                  <Link to="/profile">
                    <div className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                      <p className="font-semibold text-gray-900">My Profile</p>
                      <p className="text-sm text-gray-500">View and edit</p>
                    </div>
                  </Link>
                  <Link to="/admin">
                    <div className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer border-t">
                      <p className="text-gray-700">Admin Panel</p>
                    </div>
                  </Link>
                  <div
                    onClick={() => navigate("/login")}
                    className="px-4 py-3 hover:bg-red-50 transition-colors cursor-pointer border-t text-red-600"
                  >
                    Sign Out
                  </div>
                </motion.div>
              )}
            </div>

            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gray-50 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold"
              >
                Login
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}