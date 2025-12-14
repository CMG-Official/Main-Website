import { motion } from "framer-motion";
import { IconWrapperProps } from "../../types";

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
    return (
        <motion.div
            className="glass-pill p-1 rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    );
};

export default IconWrapper;
