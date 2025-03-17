import { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';
import s from '/src/App.module.css';
import LoadingList from './LoadingList';


const LoadingScreen = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = new ProgressBar.Line(progressRef.current, {
      strokeWidth: 2, 
      easing: 'easeInOut', 
      duration: 1000, 
      color: '#00bafe', 
      trailColor: '#333',
      trailWidth: 2, 
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
    <div className="bg-black flex flex-col p-5 min-h-screen gap-10">
      <div className="flex flex-col items-center gap-8 pt-10">
        <img src="/assets/logoLoading.svg" alt="" width={100} />
        <h2 className={`${s.font} text-lg`}>Roadmap</h2>
          </div>
          
          <LoadingList />
          
      <div className="fixed bottom-16 left-0 right-0 flex justify-center">
       <div className="w-56 h-4 rounded-3xl overflow-hidden">
          <div ref={progressRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;