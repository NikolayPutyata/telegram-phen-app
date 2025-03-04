// import { useState, useEffect, useCallback, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import anime from 'animejs';
// import s from '/src/App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectUserId,
//   selectFarmingCycleInMilisec,
//   selectTokensToGet,
// } from '../../redux/selectors';
// import { claimTokens, startFarming } from '../../redux/operations';
// import { AppDispatch } from '../../redux/store';
// import { useTranslation } from 'react-i18next';
// import { selectUserActiveBoosts } from '../../redux/selectors';

// interface FarmButtonProps {
//   onFarmStatusChange: (isFarmDisabled: boolean) => void;
// }

// const FarmButton = ({ onFarmStatusChange }: FarmButtonProps) => {
//   const location = useLocation();
//   const { t } = useTranslation();
//   const activeBoosts = useSelector(selectUserActiveBoosts);
//   const farmingCycle = useSelector(selectFarmingCycleInMilisec);
//   const tokensToGet = useSelector(selectTokensToGet);

//   const FARM_DURATION = farmingCycle;
//   const START_VALUE = 0.001;
//   const END_VALUE = tokensToGet;

//   const [currentValue, setCurrentValue] = useState(START_VALUE);
//   const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
//   const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
//   const [isLoading, setIsLoading] = useState(true);

//   const userId = useSelector(selectUserId);
//   const dispatch = useDispatch<AppDispatch>();
//   const animationRef = useRef<anime.AnimeInstance | null>(null);

//   const startAnimation = useCallback(
//     (fromValue: number, remainingTime: number, endValue: number) => {
//       if (animationRef.current) {
//         animationRef.current.pause();
//         animationRef.current = null;
//       }

//       anime.remove('.farm-span');

//       animationRef.current = anime({
//         targets: { value: fromValue },
//         value: endValue,
//         easing: 'linear',
//         duration: remainingTime,
//         round: false,
//         update: (anim) => {
//           setCurrentValue(Number(anim.animations[0].currentValue));
//         },
//         complete: () => {
//           setIsClaimDisabled(false);
//           setCurrentValue(endValue);
//           animationRef.current = null;
//         },
//       });
//     },
//     [setCurrentValue, setIsClaimDisabled],
//   );

//   const checkFarmStatus = useCallback(() => {
//     const storedStartTime = localStorage.getItem('farmStartTime');
//     if (storedStartTime) {
//       const startTime = parseInt(storedStartTime, 10);
//       const elapsedTime = Date.now() - startTime;

//       if (elapsedTime >= FARM_DURATION) {
//         setIsClaimDisabled(false);
//         setIsFarmDisabled(true);
//         setCurrentValue(END_VALUE);
//       } else {
//         const progress = elapsedTime / FARM_DURATION;
//         const animatedStartValue =
//           START_VALUE + (END_VALUE - START_VALUE) * progress;

//         setCurrentValue(animatedStartValue);
//         setIsFarmDisabled(true);
//         setIsClaimDisabled(true);
//         startAnimation(
//           animatedStartValue,
//           FARM_DURATION - elapsedTime,
//           END_VALUE,
//         );
//       }
//     }
//     setIsLoading(false);
//     onFarmStatusChange(isFarmDisabled);
//   }, [
//     FARM_DURATION,
//     END_VALUE,
//     START_VALUE,
//     onFarmStatusChange,
//     isFarmDisabled,
//     setIsClaimDisabled,
//     setIsFarmDisabled,
//     setCurrentValue,
//     setIsLoading,
//     startAnimation,
//   ]);

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (!document.hidden) {
//         setTimeout(() => {
//           checkFarmStatus();
//         }, 100);
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     checkFarmStatus();

//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, [location.pathname, checkFarmStatus]);

//   const handleClick = async () => {
//     const boostsIdsArray = activeBoosts.map((boost) => boost.idItem);
//     const result = await dispatch(startFarming({ id: userId, boostsIdsArray }));

//     if (startFarming.fulfilled.match(result)) {
//       const {
//         farmingCycle: updatedFarmingCycle,
//         tokensToGet: updatedTokensToGet,
//       } = result.payload;

//       const startTime = Date.now();
//       localStorage.setItem('farmStartTime', startTime.toString());
//       setIsFarmDisabled(true);
//       setIsClaimDisabled(true);
//       setCurrentValue(START_VALUE);
//       startAnimation(START_VALUE, updatedFarmingCycle, updatedTokensToGet);
//       onFarmStatusChange(true);
//     }
//   };

//   const handleClaimClick = async (): Promise<void> => {
//     await dispatch(claimTokens(userId));

//     localStorage.removeItem('farmStartTime');
//     setIsClaimDisabled(true);
//     setIsFarmDisabled(false);
//     setCurrentValue(START_VALUE);

//     if (animationRef.current) {
//       animationRef.current.pause();
//       animationRef.current = null;
//     }
//     anime.remove('.farm-span');
//     onFarmStatusChange(false);
//   };

//   return (
//     <div className="grid grid-cols-[1fr_1fr] grid-rows-1 mb-8 items-center justify-center gap-3">
//       {!isLoading && !isFarmDisabled && (
//         <button
//           className={`btn bg-gradient-to-r from-blue-500 to-purple-500 btn-primary rounded-4xl ${
//             isFarmDisabled ? 'hidden' : ''
//           }`}
//           onClick={handleClick}
//           disabled={isFarmDisabled}
//         >
//           {t('Farm')}
//         </button>
//       )}
//       <span
//         className={`border-3 border-[#605dff] py-[6px] flex justify-center items-center farm-span
//             w-full tracking-wider text-base bg-transparent text-zinc-300 rounded-4xl ${
//               s.font
//             } ${!isFarmDisabled ? 'hidden' : ''}`}
//       >
//         {currentValue.toFixed(3)}
//       </span>
//       <button
//         className={`btn btn-primary rounded-4xl ${
//           isLoading ? 'opacity-0' : 'opacity-100'
//         }`}
//         onClick={handleClaimClick}
//         disabled={isClaimDisabled}
//       >
//         {t('Claim')}
//       </button>
//     </div>
//   );
// };

// export default FarmButton;


import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';
import s from '/src/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserId,
  selectFarmingCycleInMilisec,
  selectTokensToGet,
  selectFarmStart,
} from '../../redux/selectors';
import { claimTokens, startFarming } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { selectUserActiveBoosts } from '../../redux/selectors';

interface FarmButtonProps {
  onFarmStatusChange: (isFarmDisabled: boolean) => void;
}

const FarmButton = ({ onFarmStatusChange }: FarmButtonProps) => {
  const location = useLocation();
  const { t } = useTranslation();
  const activeBoosts = useSelector(selectUserActiveBoosts);
  const farmingCycle = useSelector(selectFarmingCycleInMilisec);
  const tokensToGet = useSelector(selectTokensToGet);
  const farmStart = useSelector(selectFarmStart);

  const FARM_DURATION = farmingCycle;
  const START_VALUE = 0.001;
  const END_VALUE = tokensToGet;

  const [currentValue, setCurrentValue] = useState(START_VALUE);
  const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch<AppDispatch>();
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  const startAnimation = useCallback(
    (fromValue: number, remainingTime: number, endValue: number) => {
      if (animationRef.current) {
        animationRef.current.pause();
        animationRef.current = null;
      }

      anime.remove('.farm-span');

      setTimeout(() => {
        animationRef.current = anime({
          targets: { value: fromValue },
          value: endValue,
          easing: 'linear',
          duration: remainingTime,
          round: false,
          update: (anim) => {
            setCurrentValue(Number(anim.animations[0].currentValue));
          },
          complete: () => {
            setIsClaimDisabled(false);
            setCurrentValue(endValue);
            animationRef.current = null;
          },
        });
      }, 0);
    },
    []
  );

  const checkFarmStatus = useCallback(() => {
    if (farmStart) {
      const startTime = farmStart;
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
        startAnimation(animatedStartValue, FARM_DURATION - elapsedTime, END_VALUE);
      }
    } else {
      setIsFarmDisabled(false);
      setIsClaimDisabled(true);
      setCurrentValue(START_VALUE);
    }
    setIsLoading(false);
    onFarmStatusChange(isFarmDisabled);
  }, [FARM_DURATION, END_VALUE, START_VALUE, farmStart, onFarmStatusChange, startAnimation]);

  useEffect(() => {
    checkFarmStatus();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          checkFarmStatus();
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [location.pathname, checkFarmStatus]);

  const handleClick = async () => {
    const boostsIdsArray = activeBoosts.map((boost) => boost.idItem);
    const result = await dispatch(startFarming({ id: userId, boostsIdsArray }));

    if (startFarming.fulfilled.match(result)) {
      const {
        farmingCycle: updatedFarmingCycle,
        tokensToGet: updatedTokensToGet,
      } = result.payload;

      setIsFarmDisabled(true);
      setIsClaimDisabled(true);
      setCurrentValue(START_VALUE);
      startAnimation(START_VALUE, updatedFarmingCycle, updatedTokensToGet);
      onFarmStatusChange(true);
    }
  };

  const handleClaimClick = async () => {
    await dispatch(claimTokens(userId));

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
          className={`btn bg-gradient-to-r from-blue-500 to-purple-500 btn-primary rounded-4xl ${
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