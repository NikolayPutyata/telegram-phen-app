import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import anime from 'animejs';
import s from '/src/App.module.css';

const FARM_DURATION = 288000; // 28800000, 8 годин в мілісекундах
const START_VALUE = 0.003;
const END_VALUE = 46;

const FarmBlock = () => {
  const location = useLocation(); // Для відстеження змін маршруту

  const [currentValue, setCurrentValue] = useState(START_VALUE);
  const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
  const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const startAnimation = (fromValue: number, remainingTime: number) => {
    anime({
      targets: '.farm-span',
      innerHTML: [fromValue, END_VALUE], // Замініть 1000 на кінцеве значення
      easing: 'linear',
      duration: remainingTime,
      round: false,
      update: (anim) => {
        const value = parseFloat(anim.animations[0].currentValue.toString());
        const formattedValue =
          value % 1 === 0 ? value.toFixed(0) : value.toFixed(3); // Відображення числа
        anim.animatables[0].target.innerHTML = formattedValue;
        setCurrentValue(value);
      },
      complete: () => {
        setIsClaimDisabled(false); // Кнопка "Claim" активується після завершення анімації
      },
    });
  };

  // Функція перевірки статусу фарму
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
  }, []);

  // Викликаємо перевірку при завантаженні сторінки та зміні маршруту
  useEffect(() => {
    checkFarmStatus();
  }, [location.pathname, checkFarmStatus]); // Тепер ефект спрацьовує і при зміні маршруту

  const handleClick = () => {
    // Записуємо час початку фарму
    const startTime = Date.now();
    localStorage.setItem('farmStartTime', startTime.toString());

    setIsFarmDisabled(true); // Вимикаємо кнопку фарму
    setIsClaimDisabled(true); // Вимикаємо кнопку "Claim"
    setCurrentValue(START_VALUE); // Скидаємо значення
    startAnimation(START_VALUE, FARM_DURATION); // Запускаємо анімацію
  };

  const handleClaimClick = (): void => {
    // Якщо користувач хоче забрати токени, очищаємо час початку і відновлюємо стан
    localStorage.removeItem('farmStartTime');
    setIsClaimDisabled(true); // Вимикаємо кнопку "Claim"
    setIsFarmDisabled(false); // Вмикаємо кнопку фарму
    setCurrentValue(START_VALUE); // Відновлюємо початкове значення
  };

  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-1 items-center justify-center gap-3">
      {!isLoading && !isFarmDisabled && (
        <button
          className={`btn btn-primary rounded-4xl  ${
            isFarmDisabled ? 'hidden' : ''
          }`}
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
        className={`btn btn-primary rounded-4xl ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClaimClick}
        disabled={isClaimDisabled}
      >
        Claim
      </button>
    </div>
  );
};

export default FarmBlock;
