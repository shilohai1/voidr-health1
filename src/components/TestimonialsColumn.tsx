
"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image?: string; // Optional image URL
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }: TestimonialsColumnProps) => {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%)'
        }}
      />
      <motion.div
        animate={{
          translateY: ["0%", "-50%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {testimonials.map((testimonial, index) => (
              <div
                key={`${arrayIndex}-${index}`}
                className="p-8 rounded-2xl border shadow-lg bg-white max-w-xs w-full mx-auto"
              >
                <p className="text-slate-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                
              
                  <div>
                    <div className="font-medium text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
