'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function Scene() {
  return (
    <Box>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
}

export default function TestScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
