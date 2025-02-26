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

  const handleOpenCase = useCallback(async () => {
    const boosts = [{ imgSrc: '/assets/engine.webp', idItem: 10 }];
    const specialBoosts = [{ imgSrc: '/assets/shuttle-2.webp', idItem: 11 }];

    const getRandomBoost = () => {
      const allBoosts = [...boosts, ...specialBoosts];
      return allBoosts[Math.floor(Math.random() * allBoosts.length)];
    };

    setIsAnimating(true);
    const randomBoost = getRandomBoost();
    setSelectedBoost(randomBoost);

    // Чекаємо завершення анімації трясіння (1.8 секунда) + появи буста (0.5 секунди + затримка 2 секунда)+ зникнення (0.7 сек)
    setTimeout(() => {
      // const boostsIdsArray = [randomBoost.idItem];
      // await dispatch(sendCase({ id: userId, boostsIdsArray })).unwrap(); // unwrap для асинхронного thunk
      setIsAnimating(false);
      onClose(); // Закриваємо модалку після успішної відправки
    }, 3300); // 1.8 сек трясіння + 1 сек анімація буста
  }, [onClose]);

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleOpenCase();
    }
  }, [isOpen, isAnimating, handleOpenCase]);

  const shakeAnimation = {
    animate: {
      x: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.6, repeat: 2.5, ease: 'easeInOut' }, // Трясіння триває 1.8 секунду
    },
  };

  const boostAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 2 },
    }, // Поява через 2 секунду після трясіння триває 0.5 сек
    exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } }, // Зникнення буста 0.7
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-1/1  max-w-lg">
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
              className="absolute top-2/3 left-1/2 transform -translate-x-1/2  rounded-4xl -translate-y-1/2 z-10 w-50 h-60"
              {...(isAnimating ? shakeAnimation : {})}
            />

            <AnimatePresence>
              {selectedBoost && (
                <motion.img
                  src={selectedBoost.imgSrc}
                  alt="Boost"
                  className="absolute top-1/2 left-1/2 transform  rounded-4xl -translate-x-1/2 -translate-y-1/2 z-30 w-30 h-22"
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
