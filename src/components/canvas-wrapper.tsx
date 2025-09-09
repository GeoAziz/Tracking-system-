'use client'


import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./canvas/splash-scene'), { ssr: false });

function LoadingIndicator() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#00ffff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textShadow: '0 0 10px #00ffff',
      zIndex: 10,
    }}>
      Loading...
    </div>
  );
}

function WebGLFallback() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'black',
      color: '#00ffff',
      fontSize: '1.2rem',
      textAlign: 'center',
    }}>
      <div>
        <strong>WebGL is not supported or disabled in your browser.</strong><br />
        For the best experience, please enable WebGL or use a modern browser.<br />
        <br />
        <span style={{ fontSize: '2rem' }}>🚀</span>
      </div>
    </div>
  );
}

export function SplashSceneCanvas() {
  const [webglSupported, setWebglSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [0, 0, 10] }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={<LoadingIndicator />}>
          {/* Pass lower particle count for performance */}
          <Scene particleCount={400} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SplashSceneCanvas;
