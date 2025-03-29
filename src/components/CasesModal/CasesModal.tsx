import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BoostItem {
  id: number;
  photo: string;
  boost: string;
  name: string;
}

interface BoostsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BoostsModal = ({ isOpen, onClose }: BoostsModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBoost, setSelectedBoost] = useState<BoostItem | null>(null);

  const boosts: BoostItem[] = [
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

  const handleStartAnimation = useCallback(async () => {
    setIsAnimating(true);

    // Поява всіх бустів через 2 секунди
    setTimeout(async () => {
      // Рандомний вибір буста
      const randomBoost = boosts[Math.floor(Math.random() * boosts.length)];
      setSelectedBoost(randomBoost);

      // Симуляція відправки на сервер (розкоментуйте і додайте реальний dispatch)
      // await dispatch(sendBoost({ userId, boostId: randomBoost.id }));

      // Підсвітка по черзі протягом 5 секунд
      setTimeout(() => {
        // Зупинка на рандомному бусті + яскраве підсвічування (1 секунда)
        setTimeout(() => {
          // Збільшення картинки (1 секунда)
          setTimeout(() => {
            // Виліт вправо-вгору (2.5 секунди)
            setTimeout(() => {
              setIsAnimating(false);
              onClose();
            }, 2500);
          }, 1000);
        }, 1000);
      }, 5000);
    }, 2000);
  }, [onClose]);

  useEffect(() => {
    if (isOpen && !isAnimating) {
      handleStartAnimation();
    }
  }, [isOpen, isAnimating, handleStartAnimation]);

  const backgroundAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const boostAppear = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const glowAnimation = {
    animate: {
      boxShadow: [
        '0 0 10px rgba(255, 255, 255, 0.5)',
        '0 0 20px rgba(255, 255, 255, 1)',
        '0 0 10px rgba(255, 255, 255, 0.5)',
      ],
      transition: { duration: 0.5, repeat: Infinity },
    },
  };

  const finalGlow = {
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
      transition: { duration: 2.5, ease: 'easeIn' },
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
                className="w-32 h-32 rounded-lg"
                initial={boostAppear.initial}
                animate={
                  selectedBoost?.id === boost.id && isAnimating
                    ? { ...boostAppear.animate, ...flyOut.animate }
                    : selectedBoost?.id === boost.id
                    ? { ...boostAppear.animate, ...finalGlow.animate }
                    : index * 0.5 < 5 // 5 секунд підсвітки
                    ? { ...boostAppear.animate, ...glowAnimation.animate }
                    : boostAppear.animate
                }
                transition={{
                  delay: 2 + index * 0.1, // Поява через 2 секунди з невеликим зміщенням
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BoostsModal;
