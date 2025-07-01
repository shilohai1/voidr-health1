"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/TestimonialsColumn";
const testimonials = [{
  text: "ClinicBot honestly saved me hours and hours last week. The automated documentation is a game-changer. The other cool feature is the part where they can shorten documents to just mere prescriptions",
  name: "Dr. Aisha",
  role: "Intern",
 
}, {
  text: "I finally *understand* pathology thanks to PathoSketch. The visual learning is incredible. Free plan was useful but now I needed to take the premium plan cause I'm completley dependant on it now",
  name: "Zaid",
  role: "2nd Year Med Student",
 
}, {
  text: "I'm an Indian medical student and come from a curriculum where it is solely based on books and rote learning. Atleast Voidr helped me find a different approach to learning new concepts",
  name: "Divya Naik",
  role: "1st Year Med Student",

}, {
  text: "I'm usually a visual learner. Medical school would've been a nightmare without Voidr",
  name: "Asher",
  role: "2nd Year Med Student",
  
}, {
  text: "StudyWithAI helped me review the entire systems in clinical pathophysiologyin minutes. Perfect for USMLE step 1 prep!",
  name: "Riya",
  role: "USMLE Prep student",
  
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
