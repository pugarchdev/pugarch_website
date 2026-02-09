"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Float, Environment } from "@react-three/drei";
import SpiralingModel from "./SpiralingModel";

type ThreeSceneProps = {
  onLoaded?: () => void;
};

export default function ThreeScene({ onLoaded }: ThreeSceneProps) {
  return (
    <Canvas
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 2]} // Responsive pixel ratio
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <color attach="background" args={["black"]} />
      <fog attach="fog" args={["#1a0b2e", 5, 15]} />
      
      {/* Lighting System */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4c1d95" />
      <spotLight 
        position={[0, 5, 0]} 
        intensity={2} 
        angle={0.5} 
        penumbra={1} 
        color="#8b5cf6" 
      />
      
      {/* Environment for reflections */}
      <Environment preset="night" />
      
      {/* Model with floating effect */}
      <Suspense fallback={null}>
        <Float 
          speed={2} 
          rotationIntensity={1.8} 
          floatIntensity={2}
        >
          <SpiralingModel onLoaded={onLoaded} />
        </Float>
      </Suspense>
      
      {/* Constraints for OrbitControls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}

