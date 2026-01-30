import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Enterprise"],
    Company: ["About", "Careers", "Blog", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                🏥
              </div>
              <span className="text-2xl font-bold">FindOC</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Your trusted partner in finding the best healthcare professionals. Book appointments, consult online, and manage your health records seamlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-xl"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (categoryIndex + 1) }}
            >
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h3 className="font-bold text-lg mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest health tips and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm"
        >
          <p>© 2026 FindOC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}