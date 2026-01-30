import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowRight, Activity, ShieldPlus, CheckCircle } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50 bg-white/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-slate-900 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Activity size={24} />
            </div>
            <span>FindOC</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={() => navigate("/login")} className="text-sm font-bold text-gray-600 hover:text-teal-600 transition">
              Log in
            </button>
            <button onClick={() => navigate("/signup")} className="px-6 py-2.5 bg-teal-600 text-white rounded-full text-sm font-bold hover:shadow-lg hover:bg-teal-700 transition active:scale-95">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Professional Content */}
          <Motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Trusted by 10k+ Patients</span>
            </div>
            
            <h1 className="text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Healthcare <br/> 
              <span className="text-teal-600">Simplified.</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
              Find top-rated specialists, manage digital prescriptions, and book appointments in seconds. Your health journey starts here.
            </p>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => navigate("/signup")} 
                className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-teal-200 hover:scale-105 transition duration-300"
              >
                Get Started Now <ArrowRight size={22} />
              </button>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle size={16} className="text-teal-500" /> Free medical consultation
                </p>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle size={16} className="text-teal-500" /> 24/7 Expert support
                </p>
              </div>
            </div>
          </Motion.div>

          {/* Right Side: Professional Visual Card */}
          <Motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-full blur-[100px]"></div>
            <div className="relative bg-white rounded-[3rem] p-12 shadow-2xl border border-white/50 backdrop-blur-sm">
               <div className="flex items-center gap-5 mb-12">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600">
                    <ShieldPlus size={36} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900 tracking-tight">Health Hub</h3>
                    <p className="text-gray-400 font-medium">Your data is encrypted</p>
                  </div>
               </div>
               
               <div className="space-y-6">
                  <div className="h-4 w-3/4 bg-slate-50 rounded-full overflow-hidden">
                    <Motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 1, duration: 1 }} className="h-full bg-teal-400 rounded-full"></Motion.div>
                  </div>
                  <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden">
                    <Motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1.2, duration: 1 }} className="h-full bg-blue-400 rounded-full"></Motion.div>
                  </div>
                  <div className="h-4 w-1/2 bg-slate-50 rounded-full overflow-hidden">
                    <Motion.div initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ delay: 1.4, duration: 1 }} className="h-full bg-purple-400 rounded-full"></Motion.div>
                  </div>
                  
                  <div className="pt-10 flex -space-x-4">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className={`w-14 h-14 rounded-full border-4 border-white bg-slate-200 shadow-sm overflow-hidden`}>
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-white bg-teal-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      +12k
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-400 italic">Join our community of healthy users</p>
               </div>
            </div>
          </Motion.div>

        </div>
      </main>
    </div>
  );
}