import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, potential collaborators, and industry professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Mail className="text-blue-400" size={24} />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">atharvtingane2@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Phone className="text-green-400" size={24} />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300">+91 9561732645</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <MapPin className="text-red-400" size={24} />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Amravati, Maharashtra, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Social Links</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <motion.a
                href="https://www.linkedin.com/in/atharv-tingane-53606a28b/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-300 text-sm">Connect professionally</p>
                </div>
              </motion.a>
              
              <motion.a
                href="https://github.com/atharvtingane"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-xl border border-gray-400/30 hover:border-gray-400/50 transition-all duration-300 group"
              >
                <Github className="text-gray-400 group-hover:text-gray-300" size={24} />
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-300 text-sm">View my code repositories</p>
                </div>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-600/20 to-sky-500/20 rounded-xl border border-sky-400/30 hover:border-sky-400/50 transition-all duration-300 group"
              >
                <Twitter className="text-sky-400 group-hover:text-sky-300" size={24} />
                <div>
                  <p className="text-white font-medium">Twitter</p>
                  <p className="text-gray-300 text-sm">Follow for tech updates</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-400/30">
            <p className="text-purple-200 font-medium">
              Open to internship opportunities and collaborative projects!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}