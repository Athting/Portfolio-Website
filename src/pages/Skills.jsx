import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    name: "Frontend Development",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git"],
  },
  {
    name: "Emerging Technologies",
    skills: ["Machine Learning", "React Native", "Three.js"],
  },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the
            technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="bg-white/10 px-4 py-2 rounded-lg text-center hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-400/30">
            {/* Removed DevOps, Kubernetes, Microservices Architecture from Currently Learning */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
