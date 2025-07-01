"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SearchComponent from "@/components/ui/animated-glowing-search-bar";

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

      {/* Input + Generate Button */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <input
          type="text"
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Paste your medical topic here..."
          className="w-full md:w-[400px] px-4 py-3 text-lg rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 text-lg rounded-lg shadow-md disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </Button>
      </motion.div>

      {/* Optional glowing animation bar */}
      <div className="mt-10">
        <SearchComponent />
      </div>

      {/* Optional result preview */}
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
