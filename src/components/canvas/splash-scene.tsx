'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Edges, Sphere, Plane } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

export default function SplashScene({ particleCount = 800 }: { particleCount?: number }) {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      {/* Fizzi-inspired animated groups */}
      <RotatingElement speed={0.8}>
        <WireframePolyhedron position={[0, 0, 0]} geometryType="icosahedron" />
      </RotatingElement>
      <RotatingElement speed={1.2}>
        <FloatingOrb position={[2, 1, -2]} scale={0.8} />
      </RotatingElement>
      <RotatingElement speed={1.5}>
        <WireframePolyhedron position={[3, -1.5, -4]} geometryType="box" />
      </RotatingElement>
      <RotatingElement speed={1.1}>
        <WireframePolyhedron position={[-2, 1, -5]} geometryType="tetrahedron" />
      </RotatingElement>

      {/* Glass Panels */}
      <GlassPanel position={[0, 2, -3]} rotation={[0, 0.1, 0]} />
      <GlassPanel position={[-2.5, -2, -4]} rotation={[0, -0.2, 0.1]} />

      {/* Particle Background */}
      <Particles count={particleCount} />

      {/* Postprocessing Effects */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      <InteractiveCameraRig />
    </>
  );
// Fizzi-style animated group
function RotatingElement({ children, speed = 1 }: { children: React.ReactNode, speed?: number }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.5 * speed) * Math.PI * 0.25;
      ref.current.rotation.x = Math.cos(t * 0.4 * speed) * Math.PI * 0.2;
      ref.current.position.y = Math.sin(t * 0.5 * speed) * 0.2;
    }
  });
  return <group ref={ref}>{children}</group>;
}

// Interactive camera movement
function InteractiveCameraRig() {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}
}

// Component definitions stay the same
function FloatingOrb({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  const time = useRef(Math.random() * 10)
  
  useFrame(({ clock }) => {
    time.current = clock.elapsedTime + time.current
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(time.current * 0.5) * 0.2
    }
  })

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
  )
}

function WireframePolyhedron({
  position,
  geometryType = 'icosahedron',
}: {
  position: [number, number, number]
  geometryType?: 'icosahedron' | 'box' | 'tetrahedron'
}) {
  const geometry = useRef(() => {
    switch (geometryType) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1, 0]} />
    }
  })

  return (
    <mesh position={position}>
      {geometry.current()}
      <GlowingMaterial />
      <Edges color="#00ffff" />
    </mesh>
  )
}
// Glamorous material for Fizzi effect
function GlowingMaterial() {
  return (
    <meshPhysicalMaterial
      color="#00ffff"
      emissive="#7DF9FF"
      emissiveIntensity={0.5}
      metalness={0.9}
      roughness={0.1}
      envMapIntensity={1}
      clearcoat={1}
      clearcoatRoughness={0.1}
      transparent
      opacity={0.8}
    />
  );
}

function GlassPanel({
  position,
  rotation,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
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
  )
}

function Particles({ count = 500 }) {
  const positions = useRef(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30
    }
    return pos
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
  )
}

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    state.camera.position.x = Math.sin(t * 0.2) * 0.5
    state.camera.position.y = Math.sin(t * 0.1) * 0.3
    state.camera.lookAt(0, 0, 0)
  })
  return null
}
