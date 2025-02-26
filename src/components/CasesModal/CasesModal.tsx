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

    setTimeout(() => {
      // const boostsIdsArray = [randomBoost.idItem];
      // await dispatch(sendCase({ id: userId, boostsIdsArray })).unwrap(); // unwrap для асинхронного thunk
      setIsAnimating(false);
      onClose();
    }, 9100); // Загальний час: 1000 + 1000 + 1800 + 300 + 1200 + запас 300 мс = 6600 мс
  }, [onClose]);

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleOpenCase();
    }
  }, [isOpen, isAnimating, handleOpenCase]);

  const backgroundAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } }, // Фон плавно з’являється за 1 секунду
    exit: { opacity: 0, transition: { duration: 0.5 } }, // Фон зникає за 0.5 секунди при закритті
  };

  const caseAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 }, // Поява триває 0.5 секунди з затримкою 0.5 секунда після фону (1 секундy від початку)
    },
  };

  const shakeAnimation = {
    animate: {
      x: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.6, repeat: 2.5, ease: 'easeInOut', delay: 1.6 }, // Трясіння починається через 1.6 секунди (0.5 фон + 1 кейс + 0.1 пауза)
    }, // Тривалість: 0.6 × 3 = 1.8 секунди (з 1.6 до 3.4 секунди)
  };

  const boostAnimation = {
    initial: { opacity: 0, scale: 0, y: 60 }, // Буст починається знизу кейса
    animate: {
      opacity: [0, 1, 1, 1, 0], // Поява, пауза, пульсація, пауза, зникнення
      scale: [0, 1, 1, 1.2, 0], // Знизу до центру, пауза, збільшення до 1.2, виліт
      y: [60, 0, 0, 0, -300], // Знизу до центру, пауза, пульсація, виліт вверх
      x: [0, 0, 0, 0, 300], // Без руху, пауза, пульсація, виліт вправо
      transition: {
        duration: 4.3, // Загальна тривалість: 0.3 (поява) + 1 (пауза) + 0.5 (пульсація) + 2 (пауза) + 0.5 (виліт)
        times: [0, 0.0698, 0.3023, 0.4186, 1], // 0.3/4.3 (поява), 1.3/4.3 (початок пульсації), 1.8/4.3 (кінець пульсації), 1 (виліт)
        delay: 4.8, // Початок анімації буста через 4.8 секунди
        ease: ['easeOut', 'linear', 'easeInOut', 'easeIn'], // Поява плавна, пауза лінійна, пульсація плавна, виліт прискорений
      },
    },
    exit: { opacity: 0, scale: 0, transition: { duration: 0 } }, // Миттєве зникнення після вильоту
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
          <div className="relative w-full h-1/1">
            <motion.div
              className="absolute w-full h-full overflow-hidden"
              initial={backgroundAnimation.initial}
              animate={backgroundAnimation.animate}
              exit={backgroundAnimation.exit}
            >
              <img
                src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
                alt="Warehouse"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.img
              src="/assets/language/case_4.webp"
              alt="Case"
              className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2  rounded-4xl -translate-y-1/3 z-10 w-60 h-50"
              initial={caseAnimation.initial}
              animate={
                isAnimating
                  ? { ...caseAnimation.animate, ...shakeAnimation.animate }
                  : caseAnimation.animate
              }
            />

            <AnimatePresence>
              {selectedBoost && (
                <motion.img
                  src={selectedBoost.imgSrc}
                  alt="Boost"
                  className="absolute top-1/2 left-1/2 transform  rounded-4xl -translate-x-1/2 -translate-y-1/2 z-30 w-26 h-26"
                  initial={boostAnimation.initial}
                  animate={boostAnimation.animate}
                  exit={boostAnimation.exit}
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
