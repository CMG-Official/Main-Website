import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className={`glass-pill p-2 relative ${className}`}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="relative w-6 h-6"
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <motion.div
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                        opacity: theme === "dark" ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <MoonIcon className={`w-6 h-6 ${theme === "light" ? "invert" : ""}`} />
                </motion.div>
                <motion.div
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                        opacity: theme === "dark" ? 0 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <SunIcon className={`w-6 h-6 ${theme === "dark" ? "invert" : ""}`} />
                </motion.div>
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
