// This file contains the actual SplashScene component logic
'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, Sphere, Plane } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Floating Orb Component
function FloatingOrb({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const time = useRef(Math.random() * 10);
    useFrame(({ clock }) => {
      time.current = clock.elapsedTime + time.current;
      if (ref.current) {
        ref.current.position.y = position[1] + Math.sin(time.current * 0.5) * 0.2;
      }
    });
  
    return (
      <Sphere args={[scale, 32, 32]} ref={ref} position={position}>
        <meshStandardMaterial
          color={'#00ffff'}
          transparent
          opacity={0.3}
          emissive={'#00ffff'}
          emissiveIntensity={0.8}
        />
      </Sphere>
    );
  }

// Wireframe Polyhedron
function WireframePolyhedron({
  position,
  geometryType = 'icosahedron',
}: {
  position: [number, number, number];
  geometryType?: 'icosahedron' | 'box' | 'tetrahedron';
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (ref.current) {
        ref.current.rotation.y += 0.002;
        ref.current.rotation.x += 0.001;
    }
  });

  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1, 0]} />;
    }
  }, [geometryType]);

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshBasicMaterial wireframe color={'#00ffff'} />
      <Edges color="#00ffff" />
    </mesh>
  );
}

// Glass Panel (Holographic UI)
function GlassPanel({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  return (
    <Plane args={[2, 1]} position={position} rotation={rotation}>
      <meshStandardMaterial
        color="#00ffff"
        transparent
        opacity={0.15}
        metalness={1}
        roughness={0}
        emissive="#00ffff"
        emissiveIntensity={0.2}
      />
      <Edges color="#00ffff" />
    </Plane>
  );
}

// Background Particles
function Particles({ count = 500 }) {
  const positions = React.useRef(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30;
    }
    return pos;
  })

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current(), 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function CameraRig() {
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        state.camera.position.x = Math.sin(t * 0.2) * 0.5;
        state.camera.position.y = Math.sin(t * 0.1) * 0.3;
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

// Main Scene
function SceneContent() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} />

      {/* Floating Orbs */}
      <FloatingOrb position={[2, 1, -2]} scale={0.8} />
      <FloatingOrb position={[-3, -0.5, -3]} scale={1.2} />

      {/* Wireframe Polyhedra */}
      <WireframePolyhedron position={[0, 0, 0]} geometryType="icosahedron" />
      <WireframePolyhedron position={[-2, 1, -5]} geometryType="tetrahedron" />
      <WireframePolyhedron position={[3, -1.5, -4]} geometryType="box" />

      {/* Glass Panels */}
      <GlassPanel position={[0, 2, -3]} rotation={[0, 0.1, 0]} />
      <GlassPanel position={[-2.5, -2, -4]} rotation={[0, -0.2, 0.1]} />

      {/* Particle Background */}
      <Particles count={800} />

      {/* Postprocessing Effects */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
      
      <CameraRig />
    </>
  );
}

export default function SplashSceneContent() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 10] }}
      dpr={[1, 2]} // Optimize performance
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
