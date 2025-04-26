"use client"
import Feedback from "./components/feedback";
import Testimonials from "./components/Testimonials";
import Faq from "./components/faq";
import Comparison from "./components/comparison";
import { getRatingStats } from "./actions/rating";
import RealTimeStars from "./components/RealTimeStars";
import React, { useState, useEffect } from "react"
import { useTheme } from "./actions/DarkMode";

export default function Home() {
  const [ratingStats, setRatingStats] = useState({ averageRating: 0, count: 0 });
  const { darkMode } = useTheme();

  useEffect(() => {
    async function fetchRatingStats() {
      const stats = await getRatingStats();
      setRatingStats(stats);
    }
    
    fetchRatingStats();
  }, []);

  return (
    <div className="bg-black h-screen min-w-screen flex flex-col items-center pt-5" suppressHydrationWarning>
      <p className="text-white font-extrabold text-2xl tracking-tighter text-center max-w-[95vw] md:text-4xl top-[5rem]">
        Create React Projects instantly with Vite or Next.Js
      </p>
      <p className="text-white font-semibold pt-7 text-sm text-center max-w-[95vw] md:text-lg">
        Pre Configured with Husky, Jest, Prettier, Github CI/CD and Snyk
      </p>
      <div className="flex gap-3 pt-5">
        <a
          href="https://npmjs.com/package/create-app-booster" target="_blank"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none rounded-full text-lg px-5 py-2 cursor-pointer font-bold hover:scale-105"
        >
          Get Started
        </a>
        <a
          href="https://github.com/Saksham-Goel1107/create-app-booster" target="_blank"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none rounded-full text-lg px-5 py-2 cursor-pointer font-bold hover:scale-105"
        >
          Github Repo
        </a>
      </div>
      <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl px-4">
        <div className={`${darkMode?'bg-gray-900 tesct-white':'bg-gray-100 text-black'} p-6 rounded-xl shadow-lg w-full md:w-1/2`}>
          <h2 className="font-bold text-2xl text-center mb-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Features
          </h2>
          <ul className="list-none space-y-3">
            <RealTimeStars initialRating={ratingStats.averageRating} initialCount={ratingStats.count} />
            <li className="flex items-cente">
              <span className="text-green-400 mr-2">⚡</span>
              <span>Lightning Fast Setup</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">🚀</span>
              <span>Vite/Next.Js in scaffolding</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">📦</span>
              <span>Choose npm or pnpm</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">⚙️</span>
              <span>Configurable: TypeScript, ESLint, Prettier, Jest/Husky</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">🔄</span>
              <span>GitHub Actions integration</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">🛡️</span>
              <span>Snyk security scanning</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">🚢</span>
              <span>Deployment ready (Vercel, Netlify, Render)</span>
            </li>
            <li className="flex items-center ">
              <span className="text-green-400 mr-2">🔄</span>
              <span>Git initialized by default</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <Feedback />
        </div>
      </div>
      <div className="flex flex-col">
        <Testimonials />
        <Comparison />
        <Faq /></div>
    </div>
  );
}