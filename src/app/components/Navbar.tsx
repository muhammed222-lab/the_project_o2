/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Project02" className="h-10 w-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Project02
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/marketplace"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="/creators"
              className="text-gray-300 hover:text-white transition-colors"
            >
              For Creators
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-2 overflow-hidden"
            >
              <Link
                href="/marketplace"
                className="block px-4 py-3 bg-gray-800 rounded-lg text-white"
                onClick={() => setIsOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/creators"
                className="block px-4 py-3 bg-gray-800 rounded-lg text-white"
                onClick={() => setIsOpen(false)}
              >
                For Creators
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 bg-gray-800 rounded-lg text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/get-started"
                className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
