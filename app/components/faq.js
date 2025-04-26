"use client"
import React from 'react'
import {useTheme} from "../actions/DarkMode"

const Faq = () => {
  const {darkMode} =useTheme()
  return (
    <div>
      <div className="w-full max-w-6xl px-4 pt-16 pb-16">
  <h2 className="text-white font-bold text-2xl text-center mb-8">Frequently Asked Questions</h2>
  <div className="space-y-4">
    <div className={`${darkMode?'bg-gray-900':'bg-gray-100'} rounded-lg p-6`}>
      <h3 className={`${darkMode?'text-white':'text-black'} font-semibold text-lg`}>Do I need to install any dependencies?</h3>
      <p className={`${darkMode?'text-gray-300':'text-gray-500'} mt-2`}>No, create-app-booster handles all dependencies for you. Just run the command with npx and follow the prompts.</p>
    </div>
    <div className={`${darkMode?'bg-gray-900':'bg-gray-100'} rounded-lg p-6`}>
      <h3 className={`${darkMode?'text-white':'text-black'} font-semibold text-lg`}>Can I use this for production applications?</h3>
      <p className={`${darkMode?'text-gray-300':'text-gray-500'} mt-2`}>Absolutely! create-app-booster follows industry best practices and includes security scanning to make your apps production-ready.</p>
    </div>
    <div className={`${darkMode?'bg-gray-900':'bg-gray-100'} rounded-lg p-6`}>
      <h3 className={`${darkMode?'text-white':'text-black'} font-semibold text-lg`}>Is TypeScript supported?</h3>
      <p className={`${darkMode?'text-gray-300':'text-gray-500'} mt-2`}>Yes, you can choose TypeScript during the setup process. The tool will configure everything for you automatically.</p>
    </div>
    <div className={`${darkMode?'bg-gray-900':'bg-gray-100'} rounded-lg p-6`}>
      <h3 className={`${darkMode?'text-white':'text-black'} font-semibold text-lg`}>How do I deploy my project?</h3>
      <p className={`${darkMode?'text-gray-300':'text-gray-500'} mt-2`}>Your project comes pre-configured for easy deployment to platforms like Vercel, Netlify, and Render. Just connect your repository and you are good to go!</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Faq
