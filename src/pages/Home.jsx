import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi , I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Atharv Tingane
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6 leading-relaxed">
            B.Tech ECE Student | Pre-Final Year
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            "Hey folks 👋, I’m an ECE undergrad at IIIT Allahabad, passionate
            about coding, problem-solving, and building cool stuff. I love
            working on full-stack development, machine learning, and modern web
            technologies."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-400/30">
            <Code className="text-blue-400 mb-4 mx-auto" size={32} />
            <h3 className="text-white font-semibold text-lg mb-2">
              Full-Stack Development
            </h3>
            <p className="text-gray-300 text-sm">
              Building modern web applications with React, Node.js, and
              databases
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-400/30">
            <Cpu className="text-purple-400 mb-4 mx-auto" size={32} />
            <h3 className="text-white font-semibold text-lg mb-2">
              Machine Learning
            </h3>
            <p className="text-gray-300 text-sm">
              Exploring AI/ML algorithms and data science applications
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-2xl border border-green-400/30">
            <Globe className="text-green-400 mb-4 mx-auto" size={32} />
            <h3 className="text-white font-semibold text-lg mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-300 text-sm">
              Competitive programming and algorithmic thinking
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
