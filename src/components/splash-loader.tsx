'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Load the canvas wrapper dynamically
const CanvasWrapper = dynamic(() => import('./canvas-wrapper'), {
  ssr: false,
  loading: () => null,
});

export default function SplashLoader() {
  return <CanvasWrapper />;
}
