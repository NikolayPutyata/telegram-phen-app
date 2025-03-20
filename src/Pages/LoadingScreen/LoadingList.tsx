import { motion } from 'motion/react';
import LoadingUlItem from './LoadingUlItem';

const LoadingList = () => {
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.ul
      className="flex flex-col gap-6 ml-7"
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={'Start Project'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem
          text={'Farming Stage'}
          showArrow={true}
          textColor={'#00bafe'}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={'Presale Stage'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={'DEX Listing'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={'CEX Listing'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={'Partners Program'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={'Collaborations'} />
      </motion.div>
    </motion.ul>
  );
};

export default LoadingList;
