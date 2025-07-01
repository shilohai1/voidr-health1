import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PainSolutionSection } from "@/components/PainSolutionSection";
import { ProductPreviewSection } from "@/components/ProductPreviewSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
// import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";

const voices = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Calm", value: "calm" },
  { label: "Excited", value: "excited" },
];

const Index = () => {
  const [script, setScript] = useState("");
  const [voice, setVoice] = useState(voices[0].value);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [downloadRes, setDownloadRes] = useState("720p");

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

  const handleDownload = () => {
    if (!resultUrl) return;
    if (downloadRes === "1080p" && !isPro) {
      alert("Upgrade to Voidr Pro to download HD videos without watermark!");
      return;
    }
    const dlUrl = resultUrl + "?resolution=" + downloadRes + "&watermark=" + (isPro ? "0" : "1");
    window.open(dlUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>

      <PainSolutionSection />

      <ProductPreviewSection />

      <TestimonialsSection />

      <PricingSection />

      {/* Replaced WaitlistSection with AI Video Generator Section */}
      <div className="relative py-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <BackgroundBeams />

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 relative z-10">
          <h2 className="text-2xl font-bold text-center">Generate Medical Explainer Video</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter your medical topic or script
            </label>
            <textarea
              rows={4}
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
              placeholder="e.g. Pathophysiology of diabetes"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Choose a voice</label>
            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
            >
              {voices.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Video"}
            </button>
          </div>

          {loading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-indigo-500 h-12 w-12"></div>
            </div>
          )}

          {resultUrl && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Preview</h3>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={resultUrl + "?watermark=" + (isPro ? "0" : "1")}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={downloadRes}
                  onChange={(e) => setDownloadRes(e.target.value)}
                  className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 p-2"
                >
                  <option value="720p">720p</option>
                  <option value="1080p">1080p {isPro ? "" : "(Pro only)"}</option>
                </select>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                >
                  Download
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;

