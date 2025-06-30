"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const PricingSection = () => {
  const [activeProduct, setActiveProduct] = useState("studywithai");
  const pricingData = {
    studywithai: {
      name: "StudyWithAI",
      plans: [{
        name: "Free",
        price: "$0",
        period: "/month",
        features: ["2 AI videos", "720p quality", "Watermark included"],
        cta: "Get Started",
        popular: false
      }, {
        name: "Student Pro",
        price: "$9",
        period: "/month",
        features: ["30 videos", "1080p quality", "No watermark"],
        cta: "Upgrade Now",
        popular: true
      }, {
        name: "Study Beast",
        price: "$19",
        period: "/month",
        features: ["Unlimited videos", "Custom script uploads", "Priority queue"],
        cta: "Go Beast Mode",
        popular: false
      }]
    },
    clinicbot: {
      name: "ClinicBot",
      plans: [{
        name: "Free",
        price: "$0",
        period: "/month",
        features: ["2 notes/month", "Watermark", "No PDF export"],
        cta: "Get Started",
        popular: false
      }, {
        name: "Clinical Starter",
        price: "$12",
        period: "/month",
        features: ["30 notes/month", "Editable output", "Basic templates"],
        cta: "Start Clinical",
        popular: false
      }, {
        name: "Resident Pro",
        price: "$29",
        period: "/month",
        features: ["Unlimited notes", "PDF export", "Custom fields"],
        cta: "Go Pro",
        popular: true
      }, {
        name: "Emergency Mode",
        price: "$59",
        period: "/month",
        features: ["24-hour on-call AI", "Priority support", "Custom integrations"],
        cta: "Emergency Access",
        popular: false
      }]
    },
    pathosketch: {
      name: "PathoSketch",
      plans: [{
        name: "Core",
        price: "$8",
        period: "/month",
        features: ["20 AI videos/month", "HD quality", "Download included"],
        cta: "Start Core",
        popular: false
      }, {
        name: "Accelerator",
        price: "$15",
        period: "/month",
        features: ["50 videos/month", "Includes Biochem + Pharm", "Advanced features"],
        cta: "Accelerate",
        popular: true
      }]
    }
  };
  return <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
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
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. Flexible pricing for every stage of your medical journey.
          </p>
        </motion.div>

        <Tabs value={activeProduct} onValueChange={setActiveProduct} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg">
            <TabsTrigger value="studywithai" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              StudyWithAI
            </TabsTrigger>
            <TabsTrigger value="clinicbot" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              ClinicBot
            </TabsTrigger>
            <TabsTrigger value="pathosketch" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              PathoSketch
            </TabsTrigger>
          </TabsList>

          {Object.entries(pricingData).map(([key, product]) => <TabsContent key={key} value={key}>
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.plans.map((plan, index) => <motion.div key={index} whileHover={{
              scale: 1.05
            }} className="relative z-10">
                    {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-semibold px-[5px] py-[5px]">
                          Most Popular
                        </span>
                      </div>}
                    <Card className={`h-full ${plan.popular ? 'ring-2 ring-green-500 shadow-xl' : 'shadow-lg'} bg-white/80 backdrop-blur-sm border-0 relative z-0`}>
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-slate-900">
                          {plan.name}
                        </CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                          <span className="text-slate-600">{plan.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-slate-700">{feature}</span>
                            </li>)}
                        </ul>
                        <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : 'bg-slate-900 hover:bg-slate-800'} text-white`}>
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </motion.div>
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};