"use client";
import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type SpiralingModelProps = {
  onLoaded?: () => void;
};

export default function SpiralingModel({ onLoaded }: SpiralingModelProps) {
  const { scene } = useGLTF("/models/spiraling.gltf");

  // Apply theme-consistent materials (Violet/Purple)
  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#7c3aed"), // violet-600
          emissive: new THREE.Color("#4c1d95"), // violet-900 (darker for subtle glow)
          emissiveIntensity: 2,
          metalness: 0.8,
          roughness: 0.2,
        });
      }
    });
  }, [scene]);

  useEffect(() => {
    if (onLoaded) {
      setTimeout(onLoaded, 500); // Small delay for smoothness
    }
  }, [onLoaded]);

  return <primitive object={scene} scale={1.5} position={[0, -0.5, 0]} />;
}

useGLTF.preload("/models/spiraling.gltf");

