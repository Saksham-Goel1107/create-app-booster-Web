"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../actions/DarkMode'

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 p-3 rounded-lg max-w-[90vw] mx-auto transition-all duration-300 ${
      scrolled 
        ? `bg-transparent backdrop-blur-md ${darkMode ? "bg-opacity-80" : "bg-white/20"} shadow-lg` 
        : darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
    }`}>
      <div className={`flex justify-between items-center ${darkMode ? "text-white" : "text-black"}`}>
        <a className="font-extrabold text-md" href="https://www.npmjs.com/package/create-app-booster" target="_blank">
          Create-App-Booster
        </a>

        <div className="hidden md:flex md:flex-row gap-7 items-center">
          <Link 
            href="/" 
            className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 ${darkMode ? "after:bg-white" : "after:bg-black"} after:transition-all after:duration-500 hover:after:w-full hover:bg-gray-500 p-3 font-semibold`}
          >
            Home
          </Link>
          <Link 
            href="/docs" 
            prefetch={true}
            className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 ${darkMode ? "after:bg-white" : "after:bg-black"} after:transition-all after:duration-500 hover:after:w-full hover:bg-gray-500 p-3 font-semibold`}
          >
            Docs
          </Link>
          <span 
            onClick={() => setShowContactModal(true)} 
            className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 ${darkMode ? "after:bg-white" : "after:bg-black"} after:transition-all after:duration-500 hover:after:w-full hover:bg-gray-500 p-3 cursor-pointer font-semibold`}
          >
            Contact Us
          </span>
          <span 
            onClick={toggleDarkMode}
            className={`relative ${darkMode ? "text-white" : "text-black"} after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 ${darkMode ? "after:bg-white" : "after:bg-black"} after:transition-all after:duration-500 hover:after:w-full hover:bg-gray-500 p-3 cursor-pointer font-semibold`}
          >
            {darkMode ? (
              <Image src="/sun.svg" alt="Sun Icon" width={24} height={24} />
            ) : (
              <Image src="/moon.svg" alt="Moon Icon" width={24} height={24} />
            )}
          </span>
        </div>

        <div className="md:hidden relative" ref={menuRef}>
          <button className={darkMode ? "text-white" : "text-black"} onClick={toggleMobileMenu}>
            <FontAwesomeIcon 
              icon={mobileMenuOpen ? faTimes : faBars} 
              size="lg" 
              className={`fill-current ${darkMode ? 'text-white' : 'text-black'}`} 
            />
          </button>

          <div 
            className={`absolute top-full right-0 mt-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
            } overflow-hidden z-40 w-48`}
          >
            <div className="flex flex-col py-1">
              <Link 
                href="/" 
                className={`${darkMode ? 'text-white' : 'text-gray-800'} py-2 px-4 hover:bg-gray-700 hover:text-white transition-colors duration-200`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/docs" 
                className={`${darkMode ? 'text-white' : 'text-gray-800'} py-2 px-4 hover:bg-gray-700 hover:text-white transition-colors duration-200`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <span
                onClick={() => {
                  setShowContactModal(true)
                  setMobileMenuOpen(false)
                }}
                className={`${darkMode ? 'text-white' : 'text-gray-800'} py-2 px-4 hover:bg-gray-700 hover:text-white transition-colors duration-200 cursor-pointer`}
              >
                Contact Us
              </span>
              <span
                onClick={() => {
                  toggleDarkMode()
                  setMobileMenuOpen(false)
                }}
                className={`${darkMode ? 'text-white' : 'text-gray-800'} py-2 px-4 hover:bg-gray-700 hover:text-white transition-colors duration-200 cursor-pointer`}
              >
                {darkMode ? (
                  <Image src="/sun.svg" alt="Sun Icon" width={24} height={24} />
                ) : (
                  <Image src="/moon.svg" alt="Moon Icon" width={24} height={24} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showContactModal && (
        <div
          className={`fixed inset-0 bg-opacity-10 z-40 flex items-center justify-center backdrop-blur-sm ${scrolled ? "mt-[50vh]" : "pt-0"}`}
          onClick={() => setShowContactModal(false)}
        >
          <div
            className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-xl p-6 max-w-md w-full mx-4 z-50 transform transition-all`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-4">
                <a href='https://www.npmjs.com/package/create-app-booster' target="_blank" className="w-20 h-20 mx-auto cursor-pointer">
                  <Image
                    src="/icon.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="mx-auto cursor-pointer"
                  />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-4">
                Contact Us
              </h3>

              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:sakshamgoel1107@gmail.com"
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email Us
                </a>

                <a
                  href="https://github.com/Saksham-Goel1107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>

                <a
                  href="tel:+918882534712"
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Call Us
                </a>

                <button
                  onClick={() => setShowContactModal(false)}
                  className={`px-4 py-2 border border-gray-300 rounded-md ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors duration-300 cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faTimes} className="mr-2" />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
