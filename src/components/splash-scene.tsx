
import dynamic from 'next/dynamic';

const SplashScene = dynamic(() => import('./splash-scene-content'), {
  ssr: false,
  loading: () => null
});

export default SplashScene;
