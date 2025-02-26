import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';
import s from '/src/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {  selectUserId } from '../../redux/selectors';
import { claimTokens, startFarming } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { selectUserActiveBoosts } from '../../redux/selectors';

const FARM_DURATION = 28800000;
const START_VALUE = 0.001;
const END_VALUE = 86.4;

interface FarmButtonProps {
  onFarmStatusChange: (isFarmDisabled: boolean) => void;
}

const FarmButton = ({ onFarmStatusChange }: FarmButtonProps) => {
  
  const location = useLocation();
  const activeBoosts = useSelector(selectUserActiveBoosts);
  const { t } = useTranslation();
  const [currentValue, setCurrentValue] = useState(START_VALUE);
  const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch<AppDispatch>();

  const animationRef = useRef<anime.AnimeInstance | null>(null);

  const startAnimation = useCallback(
    (fromValue: number, remainingTime: number) => {
      if (animationRef.current) {
        animationRef.current.pause();
        animationRef.current = null;
      }

      anime.remove('.farm-span');

      animationRef.current = anime({
        targets: { value: fromValue },
        value: END_VALUE,
        easing: 'linear',
        duration: remainingTime,
        round: false,
        update: (anim) => {
          setCurrentValue(Number(anim.animations[0].currentValue));
        },
        complete: () => {
          setIsClaimDisabled(false);
          setCurrentValue(END_VALUE);
          animationRef.current = null;
        },
      });
    },
    [setCurrentValue, setIsClaimDisabled],
  );

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
        const animatedStartValue =
          START_VALUE + (END_VALUE - START_VALUE) * progress;

        setCurrentValue(animatedStartValue);
        setIsFarmDisabled(true);
        setIsClaimDisabled(true);
        startAnimation(animatedStartValue, FARM_DURATION - elapsedTime);
      }
    }
    setIsLoading(false);
    onFarmStatusChange(isFarmDisabled);
  }, [
    onFarmStatusChange,
    isFarmDisabled,
    setIsClaimDisabled,
    setIsFarmDisabled,
    setCurrentValue,
    setIsLoading,
    startAnimation,
  ]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          checkFarmStatus();
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    checkFarmStatus();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname, checkFarmStatus]);

  const handleClick = async () => {
    const boostsIdsArray = activeBoosts.map((boost) => boost.idItem);

    await dispatch(startFarming({ id: userId, boostsIdsArray }));

    const startTime = Date.now();
    localStorage.setItem('farmStartTime', startTime.toString());

    setIsFarmDisabled(true);
    setIsClaimDisabled(true);
    setCurrentValue(START_VALUE);
    startAnimation(START_VALUE, FARM_DURATION);
    onFarmStatusChange(true);
  };

  const handleClaimClick = async (): Promise<void> => {
    await dispatch(claimTokens(userId));

    localStorage.removeItem('farmStartTime');
    setIsClaimDisabled(true);
    setIsFarmDisabled(false);
    setCurrentValue(START_VALUE);

    if (animationRef.current) {
      animationRef.current.pause();
      animationRef.current = null;
    }
    anime.remove('.farm-span');
    onFarmStatusChange(false);
  };

  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-1 mb-8 items-center justify-center gap-3">
      {!isLoading && !isFarmDisabled && (
        <button
          className={`btn btn-primary rounded-4xl ${
            isFarmDisabled ? 'hidden' : ''
          }`}
          onClick={handleClick}
          disabled={isFarmDisabled}
        >
          {t('Farm')}
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
        className={`btn btn-primary rounded-4xl ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClaimClick}
        disabled={isClaimDisabled}
      >
        {t('Claim')}
      </button>
    </div>
  );
};

export default FarmButton;
