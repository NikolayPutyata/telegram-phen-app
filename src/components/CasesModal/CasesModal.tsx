import { useState, useEffect, useCallback, useRef } from 'react';
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    if (isOpen && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isOpen]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <audio ref={audioRef} src="/src/sounds/boost.mp3" loop />
          <motion.div
            className="absolute w-full h-full overflow-hidden"
            initial={backgroundAnimation.initial}
            animate={{
              ...backgroundAnimation.animate,
              filter: selectedBoost ? 'blur(8px)' : 'blur(0px)',
              transition: { duration: 0.5 },
            }}
            exit={backgroundAnimation.exit}
          >
            <img
              src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
              alt="Background"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="relative flex flex-col items-center gap-12 z-10">
            {!selectedBoost &&
              boosts.map((boost, index) => (
                <motion.img
                  key={boost.id}
                  src={boost.photo}
                  alt={boost.name}
                  className="w-29 h-29 rounded-3xl"
                  initial={boostAppear.initial}
                  animate={{
                    ...boostAppear.animate,
                    ...(isAnimating && {
                      ...glowAnimation.animate,
                      transition: {
                        ...glowAnimation.animate.transition,
                        delay: 2 + index * 0.18,
                      },
                    }),
                  }}
                />
              ))}

            {selectedBoost && (
              <motion.div
                className="flex flex-col items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
              >
                <div className="text-center text-white">
                  <h3 className="text-4xl mb-1 font-bold">
                    {selectedBoost.name}
                  </h3>
                  <p className="text-2xl">{selectedBoost.boost}</p>
                </div>

                <motion.img
                  src={selectedBoost.photo}
                  alt={selectedBoost.name}
                  className="w-40 h-40 rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CasesModal;
