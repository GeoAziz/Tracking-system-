'use client';

import dynamic from 'next/dynamic';

const SplashScene = dynamic(() => import('@/components/splash-scene'), {
  ssr: false,
});

export default function SplashLoader() {
  return <SplashScene />;
}
