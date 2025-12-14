import { motion } from "framer-motion";

const WavingHand: React.FC = () => {
    return (
        <motion.span
            className="inline-block"
            animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
            }}
        >
            👋
        </motion.span>
    );
};

export default WavingHand;
