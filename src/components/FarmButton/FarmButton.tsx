import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';
import s from '/src/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/selectors';
import { claimTokens, startFarming } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';

const FARM_DURATION = 28800000;
const START_VALUE = 0.001;
const END_VALUE = 86.4;
const FARM_DURATION = 28800; // 8 годин в мілісекундах
const START_VALUE = 0.001;
const END_VALUE = 50;

const FarmBlock = () => {
  const location = useLocation();
  const [currentValue, setCurrentValue] = useState(START_VALUE);
  const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch<AppDispatch>();

  const animationRef = useRef<anime.AnimeInstance | null>(null);

  const animationRef = useRef<anime.AnimeInstance | null>(null);

  const startAnimation = (fromValue: number, remainingTime: number) => {
    if (animationRef.current) {
      animationRef.current.pause();
      animationRef.current = null;
    }

    anime.remove('.farm-span');

    animationRef.current = anime({
      targets: { value: fromValue },
      value: END_VALUE,
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
        setCurrentValue(Number(anim.animations[0].currentValue));
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

    document.addEventListener('visibilitychange', handleVisibilityChange);
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
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname, checkFarmStatus]);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location.pathname, checkFarmStatus]);

  const handleClick = async () => {
    await dispatch(startFarming({ id: userId, boostsIdsArray: [] }));

  const handleClick = () => {
    const startTime = Date.now();
    localStorage.setItem('farmStartTime', startTime.toString());

    setIsFarmDisabled(true);
    setIsClaimDisabled(true);
    setCurrentValue(START_VALUE);
    startAnimation(START_VALUE, FARM_DURATION);
  };

  const handleClaimClick = async (): Promise<void> => {
    await dispatch(claimTokens(userId));

  const handleClaimClick = (): void => {
    localStorage.removeItem('farmStartTime');
    setIsClaimDisabled(true);
    setIsFarmDisabled(false);
    setCurrentValue(START_VALUE);

    if (animationRef.current) {
      animationRef.current.pause();
      animationRef.current = null;
    }
    anime.remove('.farm-span');
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
          className={`btn btn-primary rounded-4xl ${
            isFarmDisabled ? 'hidden' : ''
          }`}
          className={`btn btn-primary rounded-4xl ${isFarmDisabled ? 'hidden' : ''}`}
          onClick={handleClick}
          disabled={isFarmDisabled}
        >
          Farm
        </button>
      )}
      <span
        className={`border-3 border-[#605dff] py-[6px] flex justify-center items-center farm-span 
            w-full tracking-wider text-base bg-transparent text-zinc-300 rounded-4xl ${
              s.font
            } ${!isFarmDisabled ? 'hidden' : ''}`}
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
