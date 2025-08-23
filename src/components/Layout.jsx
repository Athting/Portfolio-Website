import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { motion } from "framer-motion";

function RotatingCube() {
  return (
    <Box args={[2, 2, 2]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#3B82F6"
        transparent
        opacity={0.3}
        wireframe
      />
    </Box>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </>
  );
}

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-10 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/80" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
