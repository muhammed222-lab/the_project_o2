"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// Dummy images for the carousel
const carouselImages = ["/cta1.png", "/cta2.png", "/cta3.png", "/cta4.png"];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"
      />

      {/* Floating circles */}
      <motion.div
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, 10, 20, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-300 opacity-10 blur-xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0, 30, 0],
          y: [0, 20, 40, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-300 opacity-10 blur-xl"
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Academic Projects
              </span>{" "}
              <br className="md:hidden" />
              Made Simple
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Connect with expert creators to bring your academic visions to
              life. From essays to final-year projects, we&apos;ve got you
              covered.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Find a Creator
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:border-gray-400 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Features Grid - Moved below text on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                title: "Expert Guidance",
                description: "Top professionals",
                icon: "🎓",
              },
              {
                title: "Fast Turnaround",
                description: "On-time delivery",
                icon: "⚡",
              },
              {
                title: "Quality",
                description: "Rigorous checks",
                icon: "🔍",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel - Right Side */}
        <div className="lg:w-1/2 relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
          {/* Carousel Slides */}
          <div className="relative h-full w-full">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 0.95,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={image}
                  alt={`Project Example ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay with project info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">
                    Project Example {index + 1}
                  </h3>
                  <p className="text-gray-200">
                    {["Engineering", "Research", "Design", "Thesis"][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-gray-500 rounded-full mt-1"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">Scroll down</p>
      </motion.div>
    </section>
  );
}
