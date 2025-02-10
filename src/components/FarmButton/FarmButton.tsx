import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';
import s from '/src/App.module.css';

const FARM_DURATION = 28800; // 8 годин в мілісекундах
const START_VALUE = 0.001;
const END_VALUE = 50;

const FarmBlock = () => {
  const location = useLocation();
  const [currentValue, setCurrentValue] = useState(START_VALUE);
  const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const animationRef = useRef<anime.AnimeInstance | null>(null);

  const startAnimation = (fromValue: number, remainingTime: number) => {
    if (animationRef.current) {
      animationRef.current.pause(); // Останавливаем старую анимацию
      animationRef.current = null;
    }

    anime.remove('.farm-span'); // Удаляем старую анимацию

    animationRef.current = anime({
      targets: '.farm-span',
      innerHTML: [fromValue, END_VALUE],
      easing: 'linear',
      duration: remainingTime,
      round: false,
      update: (anim) => {
        const value = fromValue + (END_VALUE - fromValue) * (anim.progress / 100);
        setCurrentValue(value);
      },
      complete: () => {
        setIsClaimDisabled(false);
        setCurrentValue(END_VALUE);
        animationRef.current = null;
      },
    });
  };

  const checkFarmStatus = useCallback(() => {
    const storedStartTime = localStorage.getItem('farmStartTime');
    if (storedStartTime) {
      const startTime = parseInt(storedStartTime, 10);
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime >= FARM_DURATION) {
        setIsClaimDisabled(false);
        setIsFarmDisabled(true);
        setCurrentValue(END_VALUE);
      } else {
        const progress = elapsedTime / FARM_DURATION;
        const animatedStartValue = START_VALUE + (END_VALUE - START_VALUE) * progress;

        setCurrentValue(animatedStartValue);
        setIsFarmDisabled(true);
        setIsClaimDisabled(true);
        startAnimation(animatedStartValue, FARM_DURATION - elapsedTime);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          checkFarmStatus();
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    checkFarmStatus();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location.pathname, checkFarmStatus]);

  const handleClick = () => {
    const startTime = Date.now();
    localStorage.setItem('farmStartTime', startTime.toString());

    setIsFarmDisabled(true);
    setIsClaimDisabled(true);
    setCurrentValue(START_VALUE);
    startAnimation(START_VALUE, FARM_DURATION);
  };

  const handleClaimClick = (): void => {
    localStorage.removeItem('farmStartTime');
    setIsClaimDisabled(true);
    setIsFarmDisabled(false);
    setCurrentValue(START_VALUE);

    if (animationRef.current) {
      animationRef.current.pause();
      animationRef.current = null;
    }
    anime.remove('.farm-span'); // Удаляем любую активную анимацию
  };

  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-1 items-center justify-center gap-3">
      {!isLoading && !isFarmDisabled && (
        <button
          className={`btn btn-primary rounded-4xl ${isFarmDisabled ? 'hidden' : ''}`}
          onClick={handleClick}
          disabled={isFarmDisabled}
        >
          Farm
        </button>
      )}
      <span
        key={currentValue.toFixed(3)}
        className={`border-3 border-[#605dff] py-[6px] flex justify-center items-center farm-span 
            w-full tracking-wider text-base bg-transparent text-zinc-300 rounded-4xl ${
              s.font
            } ${!isFarmDisabled ? 'hidden' : ''} `}
      >
        {currentValue.toFixed(3)}
      </span>
      <button
        className={`btn btn-primary rounded-4xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClaimClick}
        disabled={isClaimDisabled}
      >
        Claim
      </button>
    </div>
  );
};

export default FarmBlock;
