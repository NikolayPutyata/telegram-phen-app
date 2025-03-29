import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

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
  const userId = 'some-user-id'; // Замініть на реальний userId

  const handleAnimation = useCallback(async () => {
    setIsAnimating(true);
    setSelectedBoost(null); // Скидаємо вибір перед початком

    // Через 2 секунди з'являються бусти, через 5 секунд обираємо рандомний буст
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

      setTimeout(() => {
        setIsAnimating(false);
        setSelectedBoost(null);
        onClose();
      }, 4000);
    }, 7000);
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
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };

  const glowAnimation = {
    animate: {
      boxShadow: [
        '0 0 4px rgba(50, 50, 50, 0.7)', // Початкова темна тінь
        '0 0 40px rgba(50, 50, 50, 1)', // Максимальна темна тінь
        '0 0 4px rgba(50, 50, 50, 0.7)', // Повернення до початкової
      ],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.7 },
    },
  };

  const winnerAnimation = {
    initial: { boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)', scale: 1 },
    animate: {
      boxShadow: '0 0 50px rgba(50, 50, 50, 1)', // Яскравіше підсвічування
      scale: 1.4, // Збільшення
      x: 300, // Виліт вправо
      y: -300, // Виліт вгору
      opacity: 0, // Зникнення
      transition: {
        duration: 4,
        times: [0, 0.25, 0.5, 1], // 1s glow, 1s scale, 2s flyout
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
                className="w-32 h-32 rounded-3xl"
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
                              delay: 2 + index * 0.125, // Послідовне підсвічування
                            },
                          }),
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
