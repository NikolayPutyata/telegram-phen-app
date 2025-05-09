import { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';
import s from '/src/App.module.css';
import LoadingList from './LoadingList';
import { useTranslation } from 'react-i18next';

const LoadingScreen = () => {
  const progressRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const bar = new ProgressBar.Line(progressRef.current, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1000,
      color: '#00bafe',
      trailColor: '#333',
      trailWidth: 4,
      svgStyle: { width: '224px', height: '100%' },
    });

    bar.animate(0.2);
    setTimeout(() => bar.animate(0.5), 1500);
    setTimeout(() => bar.animate(0.75), 3000);
    setTimeout(() => bar.animate(1.0), 4000);

    return () => {
      bar.destroy();
    };
  }, []);

  return (
    <div className="bg-[url('/assets/bc.webp')] flex flex-col p-5 min-h-screen gap-10">
      <div className="flex flex-col items-center gap-8 pt-10">
        <img src="/assets/logoLoading.svg" alt="" width={100} />
        <h2 className={`${s.font} text-lg tracking-wider`}>{t('Roadmap')}</h2>
      </div>

      <LoadingList />

      <div className="fixed bottom-16 left-0 right-0 flex justify-center">
        <div className="rounded-3xl overflow-hidden">
          <div ref={progressRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
