import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Search, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Doctors() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const doctorList = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", rating: 4.9, reviews: 120, image: "👨‍⚕️" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Dermatologist", rating: 4.8, reviews: 85, image: "👩‍⚕️" },
    { id: 3, name: "Dr. Emily Williams", specialty: "Neurologist", rating: 5.0, reviews: 210, image: "👨‍⚕️" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className={`flex-1 p-8 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
          <div className="max-w-6xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Find a Specialist</h1>
                <p className="text-slate-500">Book an appointment with top-rated doctors.</p>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search by name or specialty..." 
                  className="pl-12 pr-6 py-3 w-full md:w-80 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctorList.map((doc) => (
                <motion.div 
                  key={doc.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl">
                      {doc.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{doc.name}</h3>
                      <p className="text-teal-600 text-sm font-semibold">{doc.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="font-bold text-slate-700">{doc.rating}</span> ({doc.reviews})
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} /> New York, NY
                    </div>
                  </div>

                  <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-colors">
                    Book Appointment
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}