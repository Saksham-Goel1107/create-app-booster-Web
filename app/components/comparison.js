"use client"
import React from 'react'
import { useTheme } from '../actions/DarkMode';

const Comparison = () => {
  const { darkMode } = useTheme();
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full max-w-6xl px-4 pt-16 mx-auto">
        <h2 className="text-white font-bold text-2xl text-center mb-8">
          Why Choose create-app-booster?
        </h2>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className={`${darkMode ? 'text-gray-400' : 'text-gray-800'} uppercase ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <tr>
                <th scope="col" className="px-6 py-3">Features</th>
                <th scope="col" className="px-6 py-3 text-center">create-app-booster</th>
                <th scope="col" className="px-6 py-3 text-center">create-react-app</th>
                <th scope="col" className="px-6 py-3 text-center">create-vite</th>
                <th scope="col" className="px-6 py-3 text-center">next install</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b border-gray-900 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <th scope="row" className={`px-6 py-4 font-semibold ${darkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>
                  Setup Speed
                </th>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>⚡ Fast</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>Slow</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>Fast</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>Fast</td>
              </tr>
              <tr className={`border-b border-gray-900 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <th scope="row" className={`px-6 py-4 font-semibold ${darkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>
                  CI/CD Pre-config
                </th>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>✓</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
              </tr>
              <tr className={`border-b border-gray-900 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <th scope="row" className={`px-6 py-4 font-semibold ${darkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>
                  Testing Setup
                </th>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>✓</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>✓</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>✓</td>
              </tr>
              <tr className={`border-b border-gray-900 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <th scope="row" className={`px-6 py-4 font-semibold ${darkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>
                  Security Scanning
                </th>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>✓</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
                <td className={`px-6 py-4 text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
