import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'; // Для відправки на сервер

interface Boost {
  id: number;
  photo: string;
  boost: string;
  name: string;
}

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const boosts: Boost[] = [
  {
    id: 99,
    photo:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/1000_zufakh.png',
    boost: '1000 PHEN',
    name: '1000 PHEN',
  },
  {
    id: 14,
    photo:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656126/medic_11zon_dyygxi.webp',
    boost: 'X10',
    name: 'Medical Team',
  },
  {
    id: 41,
    photo:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782889/planet1_11zon_jnb5cd.webp',
    boost: '',
    name: 'Orionus',
  },
  {
    id: 31,
    photo:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782887/com_11zon_halzjs.webp',
    boost: '',
    name: 'Jack Snack',
  },
];

const CasesModal = ({ isOpen, onClose }: CasesModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBoost, setSelectedBoost] = useState<Boost | null>(null);
  const userId = 'some-user-id'; // Замініть на реальний userId з вашого стану

  const handleAnimation = useCallback(async () => {
    setIsAnimating(true);
    setSelectedBoost(null);

    // Через 5 секунд обираємо рандомний буст
    setTimeout(() => {
      const randomBoost = boosts[Math.floor(Math.random() * boosts.length)];
      setSelectedBoost(randomBoost);

      // Відправка на сервер
      axios
        .post('your-server-endpoint', {
          userId,
          boostId: randomBoost.id,
        })
        .catch((err) => console.error('Error sending boost to server:', err));

      // Завершення анімації через 4.5 секунди після вибору
      setTimeout(() => {
        setIsAnimating(false);
        onClose();
      }, 4500);
    }, 7000); // 2 секунди (фон) + 5 секунд (підсвітка)
  }, [onClose, userId]);

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
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 2 } },
  };

  const glowAnimation = {
    animate: {
      boxShadow: [
        '0 0 10px rgba(255, 255, 255, 0.5)',
        '0 0 20px rgba(255, 255, 255, 1)',
        '0 0 10px rgba(255, 255, 255, 0.5)',
      ],
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 0.5 },
    },
  };

  const winnerGlow = {
    animate: {
      boxShadow: '0 0 40px rgba(255, 255, 255, 1)',
      scale: 1.2,
      transition: { duration: 1 },
    },
  };

  const flyOut = {
    animate: {
      x: 300,
      y: -300,
      opacity: 0,
      transition: { duration: 2.5, delay: 1 },
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

          <div className="relative flex flex-col items-center gap-8 z-10">
            {boosts.map((boost, index) => (
              <motion.img
                key={boost.id}
                src={boost.photo}
                alt={boost.name}
                className="w-34 h-34 rounded-lg"
                initial={boostAppear.initial}
                animate={{
                  ...boostAppear.animate,
                  ...(isAnimating &&
                    !selectedBoost && {
                      ...glowAnimation.animate,
                      transition: {
                        ...glowAnimation.animate.transition,
                        delay: 2 + index * 0.125, // Послідовне підсвічування
                      },
                    }),
                  ...(selectedBoost?.id === boost.id && winnerGlow.animate),
                  ...(selectedBoost?.id === boost.id && flyOut.animate),
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CasesModal;
