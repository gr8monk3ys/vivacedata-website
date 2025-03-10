"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bannerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={bannerRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", damping: 15 }}
        >
          {/* Background image would go here */}
        </motion.div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50" />
      
      <div className="container relative mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          <motion.div 
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 mr-2 text-blue-300" />
                  <span className="text-sm font-medium text-blue-100">AI-Powered Solutions</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Transform Your
                <span className="relative">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Business
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></span>
                </span>
                with AI
              </motion.h1>
              
              <motion.p 
                className="mt-6 max-w-lg text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Unlock the power of artificial intelligence to drive innovation, efficiency, and growth for your organization.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-lg shadow-blue-500/25 group px-6 py-6 h-auto text-lg"
              >
                <span>Get Started</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-6 h-auto text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-72 w-full max-w-md rounded-2xl bg-white/10 p-6 backdrop-blur-md sm:h-80 md:h-96 border border-white/20 shadow-2xl">
              {/* Card content would go here */}
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">Schedule a Demo</h3>
                  <p className="mb-8 text-blue-100 text-lg">See how our AI solutions can transform your business operations.</p>
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg group">
                    <span>Book Now</span>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
