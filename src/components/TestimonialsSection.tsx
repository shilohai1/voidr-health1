"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/TestimonialsColumn";
const testimonials = [{
  text: "ClinicBot honestly saved me hours last week. The automated documentation is a game-changer.",
  name: "Dr. Aisha",
  role: "Intern",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
}, {
  text: "I finally *understand* pathology thanks to PathoSketch. The visual learning is incredible.",
  name: "Zaid",
  role: "2nd Year Med Student",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
}, {
  text: "StudyWithAI helped me review entire systems in minutes. Perfect for USMLE prep!",
  name: "Riya",
  role: "USMLE Prepper",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face"
}];
export const TestimonialsSection = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Medical Students & Doctors
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Join with the other medical professionals who are already using Voidr.Health</p>
        </motion.div>

        <div className="flex justify-center">
          <TestimonialsColumn testimonials={testimonials} className="hidden md:block" duration={15} />
        </div>

        {/* Mobile testimonials */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="p-6 rounded-2xl border shadow-lg bg-white max-w-sm mx-auto">
              <p className="text-slate-700 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};