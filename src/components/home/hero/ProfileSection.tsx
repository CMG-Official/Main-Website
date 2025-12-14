import { motion } from "framer-motion";

const ProfileSection: React.FC = () => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="relative w-full h-full rounded-full border-4 border-primary/20 overflow-hidden"
                whileHover={{ scale: 1.05 }}
            >
                <motion.img
                    src="/assets/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ProfileSection;
