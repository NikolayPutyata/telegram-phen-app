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
  const [isCaseOpen, setIsCaseOpen] = useState(false);
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
    const randomSpecial = getRandomSpecial();
    setSelectedSpecial(randomSpecial);
    // await dispatch(sendCase({ id: userId, specialId: [randomSpecial.idItem] }));

    setIsAnimating(true);

    setTimeout(() => {
      setIsCaseOpen(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsCaseOpen(false);
        onClose();
      }, 4000);
    }, 2800);
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
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const shakeAnimation = {
    animate: {
      x: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.4, repeat: 2.5, ease: 'easeInOut', delay: 1.6 },
    },
  };

  const openCaseAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const specialAnimation = {
    initial: { opacity: 0, scale: 0, y: 60 },
    animate: {
      opacity: [0, 1, 1, 1, 0],
      scale: [0, 1, 1, 1.2, 0],
      y: [60, 0, 0, 0, -300],
      x: [0, 0, 0, 0, 300],
      transition: {
        duration: 4,
        times: [0, 0.0698, 0.3023, 0.4186, 1],
        delay: 1.1,
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

            <AnimatePresence>
              {!isCaseOpen && (
                <motion.img
                  src="/assets/language/sticker.png"
                  alt="case-close"
                  className="absolute bottom-[130px] left-1/2 -translate-x-1/2 z-10 w-70 h-50"
                  initial={caseAnimation.initial}
                  animate={
                    isAnimating
                      ? { ...caseAnimation.animate, ...shakeAnimation.animate }
                      : caseAnimation.animate
                  }
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isCaseOpen && (
                <motion.img
                  src="/public/assets/language/Chest.png"
                  alt="case-open"
                  className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 z-10 w-full h-120 shadow-lg"
                  initial={openCaseAnimation.initial}
                  animate={openCaseAnimation.animate}
                  exit={openCaseAnimation.exit}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isCaseOpen && selectedSpecial && (
                <motion.img
                  src={selectedSpecial.imgSrc}
                  alt="Special"
                  className="absolute bottom-[310px] left-1/2 rounded-4xl -translate-x-1/2 z-30 w-30 h-30 shadow-white shadow-xl"
                  initial={specialAnimation.initial}
                  animate={specialAnimation.animate}
                  exit={specialAnimation.exit}
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
