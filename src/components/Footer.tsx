
"use client";
import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start space-x-6"
          >
           <div className="flex space-x-4">
           <a href="https://instagram.com/voidr.health" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://x.com/voidrhealth" target="_blank" rel="noopener noreferrer">
            <img src="/icons/x.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-slate-300 text-lg">
              Built by a med student with ❤️ for med students
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © 2025 Voidr.Health. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
