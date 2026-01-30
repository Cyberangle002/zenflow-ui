import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, LayoutDashboard, Calendar, UserRound, 
  Pill, FileText, User, Settings, Heart 
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  // Primary Medical Navigation
  const medicalItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={22} /> },
    { name: "Appointments", path: "/appointments", icon: <Calendar size={22} /> },
    { name: "Doctors", path: "/doctors", icon: <UserRound size={22} /> },
    { name: "Prescriptions", path: "/prescriptions", icon: <Pill size={22} /> },
    { name: "Reports", path: "/reports", icon: <FileText size={22} /> },
  ];

  // Account Settings Navigation
  const accountItems = [
    { name: "Profile", path: "/profile", icon: <User size={22} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={22} /> },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: isOpen ? 280 : 88,
        transition: { type: "spring", stiffness: 300, damping: 30 } 
      }}
      className="fixed left-0 top-0 h-screen bg-slate-900 text-slate-400 z-50 flex flex-col shadow-2xl"
    >
      {/* Sidebar Header */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-white"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Heart size={18} className="fill-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">MediCloud</span>
            </motion.div>
          ) : (
            <motion.div key="icon-only" className="w-full flex justify-center">
               <Heart size={24} className="text-blue-500 fill-blue-500" />
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {!isOpen && (
        <div className="flex justify-center py-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-2xl transition-all text-white shadow-lg"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto no-scrollbar">
        {medicalItems.map((item) => (
          <SidebarLink key={item.path} item={item} isOpen={isOpen} location={location} />
        ))}
        
        {/* Divider */}
        <div className="my-6 border-t border-slate-800 mx-2" />
        
        {/* Account & Settings added here */}
        {accountItems.map((item) => (
          <SidebarLink key={item.path} item={item} isOpen={isOpen} location={location} />
        ))}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 bg-slate-950/50">
        <div className={`flex items-center gap-3 p-2 rounded-2xl ${isOpen ? "" : "justify-center"}`}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex-shrink-0" />
          {isOpen && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Dr. Alex Smith</p>
              <p className="text-xs text-slate-500 truncate">Admin Access</p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}

// Reusable Link Component for cleaner code
function SidebarLink({ item, isOpen, location }) {
  const isActive = location.pathname === item.path;
  return (
    <Link to={item.path}>
      <motion.div
        whileHover={{ x: 5 }}
        className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${
          isActive 
          ? "bg-blue-600 text-white" 
          : "hover:bg-slate-800 hover:text-slate-100"
        }`}
      >
        <div className={`${isActive ? "text-white" : "group-hover:text-blue-400"}`}>
          {item.icon}
        </div>
        {isOpen && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium text-sm"
          >
            {item.name}
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
}