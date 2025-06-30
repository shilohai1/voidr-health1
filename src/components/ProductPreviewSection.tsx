
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProductPreviewSection = () => {
  const [activeTab, setActiveTab] = useState("studywithai");

  const products = [
    {
      id: "studywithai",
      name: "StudyWithAI",
      description: "Transform your study materials into engaging video content",
      features: ["AI-generated explanations", "Visual learning aids", "Custom pace control"],
      mockup: "🎥"
    },
    {
      id: "clinicbot",
      name: "ClinicBot",
      description: "Streamline clinical documentation with AI assistance",
      features: ["Automated note-taking", "Clinical decision support", "Template generation"],
      mockup: "📋"
    },
    {
      id: "pathosketch",
      name: "PathoSketch",
      description: "Visual pathology learning with interactive diagrams",
      features: ["Interactive diagrams", "Whiteboard-style learning", "Pathology animations"],
      mockup: "🧬"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            See Voidr in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover how our AI-powered tools can transform your medical education and practice
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg">
            {products.map((product) => (
              <TabsTrigger
                key={product.id}
                value={product.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {product.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <CardHeader className="space-y-4">
                      <CardTitle className="text-3xl font-bold text-slate-900">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-600">
                        {product.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-8xl"
                      >
                        {product.mockup}
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
