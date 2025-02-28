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
  const [selectedSpecial, setSelectedSpecial] = useState<{
    imgSrc: string;
    idItem: number;
  } | null>(null);
  // const dispatch = useDispatch()<AppDispatch>;
  // const userId = useSelector(selectUserId);

  const handleOpenCase = useCallback(async () => {
    const boosts = [{ imgSrc: '/assets/engine.webp', idItem: 10 }];
    const specialBoosts = [{ imgSrc: '/assets/shuttle-2.webp', idItem: 11 }];

    const getRandomSpecial = () => {
      const allSpecial = [...boosts, ...specialBoosts];
      return allSpecial[Math.floor(Math.random() * allSpecial.length)];
    };
    setIsAnimating(true);
    const randomSpecial = getRandomSpecial();
    setSelectedSpecial(randomSpecial);
    // await dispatch(sendCase({ id: userId, specialId: [randomSpecial.idItem] }));

    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 6800);
  }, [onClose]);

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleOpenCase();
    }
  }, [isOpen, isAnimating, handleOpenCase]);

  const backgroundAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const caseAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const shakeAnimation = {
    animate: {
      x: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.4, repeat: 2.5, ease: 'easeInOut', delay: 1.6 },
    },
  };

  const boostAnimation = {
    initial: { opacity: 0, scale: 0, y: 60 },
    animate: {
      opacity: [0, 1, 1, 1, 0],
      scale: [0, 1, 1, 1.2, 0],
      y: [60, 0, 0, 0, -300],
      x: [0, 0, 0, 0, 300],
      transition: {
        duration: 4,
        times: [0, 0.0698, 0.3023, 0.4186, 1],
        delay: 2.8,
        ease: ['easeOut', 'linear', 'easeInOut', 'easeIn'],
      },
    },
    exit: { opacity: 0, scale: 0, transition: { duration: 0 } },
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
              src="/assets/language/case_4.png"
              alt="Case"
              className="absolute bottom-[5px] left-1/2 -translate-x-1/2 z-10 w-86 h-90"
              initial={caseAnimation.initial}
              animate={
                isAnimating
                  ? { ...caseAnimation.animate, ...shakeAnimation.animate }
                  : caseAnimation.animate
              }
            />

            <AnimatePresence>
              {selectedSpecial && (
                <motion.img
                  src={selectedSpecial.imgSrc}
                  alt="Boost"
                  className="absolute bottom-[320px] left-1/2 rounded-4xl -translate-x-1/2 z-30 w-26 h-26 shadow-white shadow-xl"
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
