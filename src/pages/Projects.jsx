import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Alumni Connect",
    description:
      "A full-stack web platform that bridges students and alumni for mentorship, career guidance, and networking. Built with React for the frontend, Node.js and Express for the backend, MongoDB for data storage, Socket.io for real-time messaging, it ensures seamless interaction and long-term professional connections.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    status: "In Progress",
    github: "https://github.com/atharvtingane/alumni-connect",
    live: "https://alumni-connect-demo.vercel.app/",
  },
  {
    id: "2",
    title: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with syntax highlighting, live cursor tracking, and integrated code execution for seamless teamwork.",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "Monaco Editor",
      "MongoDB",
      "Tailwind CSS",
    ],
    status: "Completed",
    github: "https://github.com/atharvtingane/collab-code-editor",
    live: "https://collab-code-editor-demo.vercel.app/",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and contact information. Built with React, Vite, and Tailwind CSS for a modern, responsive, and animated user experience.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    github: "https://github.com/atharvtingane/portfolio-website",
    live: "https://atharvtingane.vercel.app/",
  },
  {
    id: "4",
    title: "Binary Lifting Visualizer",
    description:
      "Interactive visualizer to demonstrate the Binary Lifting technique for Lowest Common Ancestor (LCA) and ancestor queries on trees, with step-by-step traversal animations.",
    technologies: ["JavaScript", "Graph Algorithms", "OOP", "HTML", "CSS"],
    status: "Planning",
    github: "https://github.com/atharvtingane/binary-lifting-visualizer",
    live: "",
  },
];

export default function Projects() {
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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and ongoing projects in web development
            and software engineering.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border border-green-400/30"
                        : project.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors"
                    >
                      <Github size={18} className="text-gray-300" />
                    </motion.a>
                  )}
                  {project.live && project.live !== "" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-blue-600/50 hover:bg-blue-500/50 rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} className="text-blue-300" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
