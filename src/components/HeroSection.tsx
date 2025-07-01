"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [script, setScript] = useState("");
  const [voice] = useState("male");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!script.trim()) return;
    setLoading(true);
    setResultUrl(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ script, voice }),
      });
      const { url } = await res.json();
      setResultUrl(url);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl md:text-6xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Tools
        </span>
        <br />
        for Med Students, Residents
        <br />
        and Doctors
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-slate-600 mb-8 font-light italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        From a med student. For a med student.
      </motion.p>

      {/* 🌟 GLOWING TEXT FIELD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative flex items-center justify-center group">
          {/* Full glowing animation wrapper */}
          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[70px] max-w-[314px] rounded-xl blur-[3px] before:absolute before:content-[''] before:z-[-2] before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60 before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000 group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]" />

          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px] rounded-xl blur-[3px] before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg] before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000 group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]" />

          <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[59px] max-w-[303px] rounded-xl blur-[0.5px] before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70 before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130 before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]" />

          {/* Main input field */}
          <div id="main" className="relative group">
            <input
              placeholder="Paste your prompt..."
              type="text"
              name="text"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="bg-[#e6f6fa] border-none w-[301px] h-[56px] rounded-lg text-white px-[59px] text-lg focus:outline-none placeholder-gray-400"
            />

            <div className="absolute left-5 top-[15px]">
              {/* Search Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="24" fill="none" className="feather feather-search">
                <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22"></line>
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stopColor="#f8e7f8" offset="0%"></stop>
                    <stop stopColor="#b6a9b7" offset="50%"></stop>
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stopColor="#b6a9b7" offset="0%"></stop>
                    <stop stopColor="#837484" offset="50%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2 text-lg rounded-lg shadow-md disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </Button>
      </motion.div>

      {/* Result Preview */}
      {resultUrl && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Preview</h3>
          <video
            src={resultUrl}
            controls
            className="w-full max-w-xl mx-auto rounded-xl shadow-xl"
          />
        </div>
      )}
    </div>
  );
};
