import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useSelector } from 'react-redux';
// import { sendCase } from '../../redux/operations';
// import { selectUserId } from '../../redux/selectors';
// import { AppDispatch } from '../../redux/store';

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CasesModal = ({ isOpen, onClose }: CasesModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBoost, setSelectedBoost] = useState<{
    imgSrc: string;
    idItem: number;
  } | null>(null);
  // const dispatch = useDispatch()<AppDispatch>;
  // const userId = useSelector(selectUserId);

  const boosts = [{ imgSrc: '/assets/engine.webp', idItem: 10 }];
  const specialBoosts = [{ imgSrc: '/assets/shuttle-2.webp', idItem: 11 }];

  const getRandomBoost = useCallback(() => {
    const allBoosts = [...boosts, ...specialBoosts];
    return allBoosts[Math.floor(Math.random() * allBoosts.length)];
  }, [boosts, specialBoosts]);

  const handleOpenCase = useCallback(async () => {
    setIsAnimating(true);
    const randomBoost = getRandomBoost();
    setSelectedBoost(randomBoost);

    // Чекаємо завершення анімації трясіння (1 секунда) + появи буста (0.5 секунди + затримка 1 секунда)
    setTimeout(() => {
      // const boostsIdsArray = [randomBoost.idItem];
      // await dispatch(sendCase({ id: userId, boostsIdsArray })).unwrap(); // unwrap для асинхронного thunk
      setIsAnimating(false);
      onClose(); // Закриваємо модалку після успішної відправки
    }, 1500); // 1 сек трясіння + 0.5 сек анімація буста
  }, [onClose, getRandomBoost]);

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleOpenCase();
    }
  }, [isOpen, isAnimating, handleOpenCase]);

  const shakeAnimation = {
    animate: {
      rotate: [0, 5, -5, 5, -5, 0],
      transition: { duration: 0.5, repeat: 2 }, // Трясіння триває 1 секунду
    },
  };

  const boostAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } }, // Поява через 1 секунду після трясіння
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } }, // Зникнення буста
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
            <div className="absolute w-full h-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
                alt="Warehouse"
                className="object-cover w-full h-full"
              />
            </div>

            <motion.img
              src="/assets/language/case_4.webp"
              alt="Case"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2  rounded-4xl -translate-y-1/2 z-10 w-72 h-72"
              {...(isAnimating ? shakeAnimation : {})}
            />

            <AnimatePresence>
              {selectedBoost && (
                <motion.img
                  src={selectedBoost.imgSrc}
                  alt="Boost"
                  className="absolute top-1/2 left-1/2 transform  rounded-4xl -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32"
                  initial={boostAnimation.initial}
                  animate={boostAnimation.animate}
                  exit={boostAnimation.exit}
                  onAnimationComplete={() => {
                    // Закриття модалки відбудеться після відправки, а не тут
                  }}
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
