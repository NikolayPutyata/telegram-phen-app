import { motion } from "motion/react"
import LoadingUlItem from "./LoadingUlItem";

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
        ease: "easeOut", 
      },
    },
  };

  return (
    <motion.ul
      className="flex flex-col gap-5 ml-7"
      initial="hidden"
      animate="visible" 
      variants={listVariants} 
    >
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 1"} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 2"} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 3"} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 4"} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 5"} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 6"} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoadingUlItem text={"Step 7"} />
      </motion.div>
    </motion.ul>
  );
};

export default LoadingList;