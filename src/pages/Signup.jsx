import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "patient",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    navigate("/dashboard");
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-purple-500 via-pink-500 to-red-500">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl px-6"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          className="text-center mb-8"
        >
          <div className="inline-block p-4 bg-white rounded-2xl shadow-2xl mb-4">
            <span className="text-5xl">🎯</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-purple-100">Join thousands of satisfied users</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <motion.div
                  animate={{
                    scale: step >= s ? 1.1 : 1,
                    backgroundColor: step >= s ? "#ffffff" : "#ffffff40",
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-purple-600 shadow-lg"
                >
                  {step > s ? "✓" : s}
                </motion.div>
                {s < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: step > s ? 1 : 0 }}
                    className="flex-1 h-1 bg-white mx-2 origin-left"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-white/80 px-2">
            <span>Account Info</span>
            <span>Personal Details</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl"
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait" custom={step}>
              {/* Step 1: Account Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Information</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Password & User Type */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Security & Type</h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      I am a...
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.userType === "patient"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="userType"
                          value="patient"
                          checked={formData.userType === "patient"}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className="text-4xl mb-2">👤</span>
                        <span className="font-semibold">Patient</span>
                      </motion.label>

                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.userType === "doctor"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="userType"
                          value="doctor"
                          checked={formData.userType === "doctor"}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className="text-4xl mb-2">👨‍⚕️</span>
                        <span className="font-semibold">Doctor</span>
                      </motion.label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Review & Confirm</h3>

                  <div className="bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-2xl space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-semibold">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-semibold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Type:</span>
                      <span className="font-semibold capitalize">{formData.userType}</span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link to="/terms" className="text-purple-600 font-semibold hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-purple-600 font-semibold hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all"
                >
                  Back
                </motion.button>
              )}
              
              {step < 3 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Create Account
                </motion.button>
              )}
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <Link
            to="/"
            className="text-white hover:text-purple-100 transition-colors inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}