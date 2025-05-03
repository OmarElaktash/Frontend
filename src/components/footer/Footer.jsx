import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Crisis Support Section */}
        <div className="py-8 grid md:grid-cols-3 gap-6">
          {/* Samaritans */}
          <motion.a
            href="tel:116123"
            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 bg-[#A3C1E5]/10 rounded-full flex items-center justify-center">
              <FiPhone className="text-[#A3C1E5] text-lg" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">The Samaritans</h3>
              <p className="text-[#A3C1E5] font-semibold">116 123</p>
            </div>
          </motion.a>

          {/* Shout Crisis Line */}
          <motion.a
            href="sms:85258"
            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 bg-[#A9D4A7]/10 rounded-full flex items-center justify-center">
              <FiMessageSquare className="text-[#A9D4A7] text-lg" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Shout Crisis Line</h3>
              <p className="text-[#A9D4A7] font-semibold">85258</p>
            </div>
          </motion.a>

          {/* NHS Emergency */}
          <motion.a
            href="tel:111"
            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <FiAlertCircle className="text-red-500 text-lg" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">NHS Emergency</h3>
              <p className="text-red-500 font-semibold">111</p>
            </div>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]">
              <span className="font-light">Spera</span>
              <span className="font-semibold">Nova</span>
            </span>
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()}
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="/resources" className="text-sm text-gray-600 hover:text-[#A3C1E5] transition-colors duration-300">
              Resources
            </a>
            <a href="/privacy" className="text-sm text-gray-600 hover:text-[#A3C1E5] transition-colors duration-300">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-[#A3C1E5] transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;