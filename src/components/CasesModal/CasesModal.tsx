import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { startFarming } from '../../redux/operations'; // Твій thunk
import { selectUserId } from '../../redux/selectors';

const CasesModal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false); // Керуємо анімацією
  const [selectedBoost, setSelectedBoost] = useState(null); // Вибраний буст
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  // Списки бустів
  const boosts = [{ imgSrc: '/assets/engine.webp', idItem: 10 }];
  const specialBoosts = [{ imgSrc: '/assets/shuttle-2.webp', idItem: 11 }];

  // Випадковий вибір буста
  const getRandomBoost = () => {
    const allBoosts = [...boosts, ...specialBoosts];
    return allBoosts[Math.floor(Math.random() * allBoosts.length)];
  };

  // Запуск анімації і відправка на сервер
  const handleOpenCase = async () => {
    setIsAnimating(true);
    const randomBoost = getRandomBoost();
    setSelectedBoost(randomBoost);

    // Чекаємо завершення анімації (наприклад, 2 секунди)
    setTimeout(async () => {
      const boostsIdsArray = [randomBoost.idItem];
      await dispatch(startFarming({ id: userId, boostsIdsArray }));
      setIsAnimating(false);
      // onClose(); // Закрити модалку після завершення, якщо потрібно
    }, 2000);
  };

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleOpenCase(); // Автоматично відкриваємо кейс при відкритті модалки
    }
  }, [isOpen]);

  // Анімація трясіння кейса
  const shakeAnimation = {
    animate: {
      rotate: [0, 5, -5, 5, -5, 0],
      transition: { duration: 0.5, repeat: 2 },
    },
  };

  // Анімація появи буста
  const boostAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-3/4 h-1/2 max-w-lg">
            {/* Фон — склад */}
            <div className="absolute w-full h-full overflow-hidden rounded-4xl">
              <img
                src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
                alt="Warehouse"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Кейс із трясінням */}
            <motion.img
              src="/assets/language/case_4.webp"
              alt="Case"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-72 h-72"
              {...(isAnimating ? shakeAnimation : {})}
              onAnimationComplete={() => setSelectedBoost(getRandomBoost())} // Після трясіння з’являється буст
            />

            {/* Випавший буст */}
            <AnimatePresence>
              {selectedBoost && (
                <motion.img
                  src={selectedBoost.imgSrc}
                  alt="Boost"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32"
                  initial={boostAnimation.initial}
                  animate={boostAnimation.animate}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CasesModal;
