import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { sendBoost } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';

interface Boost {
  id: number;
  photo: string;
  boost: string;
  name: string;
}

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
  boosts: Boost[];
  userId: number;
}

const CasesModal = ({ isOpen, onClose, boosts, userId }: CasesModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBoost, setSelectedBoost] = useState<Boost | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleAnimation = useCallback(async () => {
    setIsAnimating(true);
    setSelectedBoost(null);

    setTimeout(async () => {
      const randomBoost = boosts[Math.floor(Math.random() * boosts.length)];
      setSelectedBoost(randomBoost);

      try {
        await dispatch(sendBoost({ userId, boostId: randomBoost.id }));
      } catch (error) {
        console.error('Failed to send case to server:', error);
      }

      setTimeout(() => {
        setIsAnimating(false);
        setSelectedBoost(null);
        onClose();
      }, 4000);
    }, 7000);
  }, [onClose, userId, dispatch, boosts]);

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleAnimation();
    }
  }, [isOpen, isAnimating, handleAnimation]);

  const backgroundAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const boostAppear = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };

  const glowAnimation = {
    animate: {
      boxShadow: [
        '0 0 4px rgba(255, 255, 255, 0.5)',
        '0 0 40px rgba(255, 255, 255, 1)',
        '0 0 4px rgba(255, 255, 255, 0.5)',
      ],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.2 },
    },
  };

  const winnerAnimation = {
    initial: { boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', scale: 1 },
    animate: {
      scale: 1.35,
      x: 300,
      y: -300,
      opacity: 0,
      transition: {
        duration: 4,
        times: [0, 0.25, 0.5, 1],
        boxShadow: { duration: 1 },
        scale: { duration: 1, delay: 1 },
        x: { duration: 2, delay: 2 },
        y: { duration: 2, delay: 2 },
        opacity: { duration: 2, delay: 2 },
      },
    },
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
          <motion.div
            className="absolute w-full h-full overflow-hidden"
            initial={backgroundAnimation.initial}
            animate={backgroundAnimation.animate}
            exit={backgroundAnimation.exit}
          >
            <img
              src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
              alt="Background"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="relative flex flex-col items-center gap-12 z-10">
            {boosts.map((boost, index) => (
              <motion.img
                key={boost.id}
                src={boost.photo}
                alt={boost.name}
                className="w-29 h-29 rounded-3xl"
                initial={boostAppear.initial}
                animate={
                  selectedBoost?.id === boost.id
                    ? winnerAnimation.animate
                    : {
                        ...boostAppear.animate,
                        ...(isAnimating &&
                          !selectedBoost && {
                            ...glowAnimation.animate,
                            transition: {
                              ...glowAnimation.animate.transition,
                              delay: 2 + index * 0.18,
                            },
                          }),
                        ...(selectedBoost && { boxShadow: 'none' }),
                      }
                }
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CasesModal;
