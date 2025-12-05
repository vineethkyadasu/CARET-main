import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/1e25d302451b2b45bb1250293ae0b4ce.jpg"
          alt="Digital services background"
          className="w-full h-full object-cover"
        />
        {/* Better soft overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div {...fadeUp(0)}>
          <span className="inline-block py-1 px-4 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-medium mb-6">
            Transform Your Digital Presence
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
        >
          Complete Digital Solutions for <br />
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            E-commerce Success
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-10"
        >
          We provide end-to-end digital services that turn your business into a
          market leader. From website development to automation and fulfillment,
          our integrated solutions drive real growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/services"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium bg-red-600 hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
          >
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-gray-900 font-medium bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-gray-900 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
