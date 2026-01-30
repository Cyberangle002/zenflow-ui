import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    bloodGroup: "O+",
    address: "123 Main Street, Nagpur, Maharashtra",
    emergencyContact: "+91 98765 43211",
  });

  const medicalHistory = [
    { condition: "Hypertension", diagnosed: "2020", status: "Controlled" },
    { condition: "Type 2 Diabetes", diagnosed: "2019", status: "Managed" },
    { condition: "Asthma", diagnosed: "2015", status: "Occasional" },
  ];

  const medications = [
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Albuterol Inhaler", dosage: "As needed", frequency: "When required" },
  ];

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile saved:", profileData);
  };

  return (
    <div className="min-h-screen bg-linear-to-brrom-purple-50 via-white to-pink-50">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your personal information and preferences</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative inline-block mb-4"
                  >
                    <div className="w-32 h-32 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl text-white font-bold shadow-xl">
                      {profileData.name.charAt(0)}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white"
                    >
                      📷
                    </motion.button>
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
                  <p className="text-gray-600 mb-4">{profileData.email}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <span>📱</span>
                      <span>{profileData.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <span>🩸</span>
                      <span>Blood Group: {profileData.bloodGroup}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(!isEditing)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      isEditing
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    }`}
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </motion.button>
                </div>
              </Card>

              {/* Quick Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Card>
                  <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Total Appointments</span>
                      <span className="text-lg font-bold text-blue-600">24</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Prescriptions</span>
                      <span className="text-lg font-bold text-green-600">32</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Lab Reports</span>
                      <span className="text-lg font-bold text-purple-600">18</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              {/* Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {["personal", "medical", "security"].map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>

              {/* Personal Information */}
              {activeTab === "personal" && (
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        value={profileData.gender}
                        onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Blood Group
                      </label>
                      <input
                        type="text"
                        value={profileData.bloodGroup}
                        onChange={(e) => setProfileData({...profileData, bloodGroup: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        disabled={!isEditing}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Emergency Contact
                      </label>
                      <input
                        type="tel"
                        value={profileData.emergencyContact}
                        onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 mt-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSave}
                        className="flex-1 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg"
                      >
                        Save Changes
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsEditing(false)}
                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400"
                      >
                        Cancel
                      </motion.button>
                    </motion.div>
                  )}
                </Card>
              )}

              {/* Medical History */}
              {activeTab === "medical" && (
                <div className="space-y-6">
                  <Card>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical History</h2>
                    <div className="space-y-4">
                      {medicalHistory.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="p-4 bg-linear-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900">{item.condition}</h3>
                              <p className="text-sm text-gray-600">Diagnosed: {item.diagnosed}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              item.status === "Controlled" ? "bg-green-100 text-green-700" :
                              item.status === "Managed" ? "bg-blue-100 text-blue-700" :
                              "bg-yellow-100 text-yellow-700"
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>

                  <Card>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Medications</h2>
                    <div className="space-y-4">
                      {medications.map((med, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl"
                        >
                          <h3 className="font-bold text-gray-900 mb-1">{med.name}</h3>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span>💊 {med.dosage}</span>
                            <span>⏰ {med.frequency}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {/* Security */}
              {activeTab === "security" && (
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                        />
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold"
                        >
                          Update Password
                        </motion.button>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900">Enable 2FA</p>
                          <p className="text-sm text-gray-600">Add an extra layer of security</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-14 h-8 bg-gray-300 rounded-full relative transition-colors"
                        >
                          <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}