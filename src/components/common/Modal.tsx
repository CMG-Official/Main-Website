import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModalProps } from "../../types";
import { useTheme } from "../../contexts/ThemeContext";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, icon, description, invert }) => {
    const { theme } = useTheme();

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <motion.div
                        className="fixed inset-0 bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="relative bg-secondary-light dark:bg-secondary-dark rounded-2xl max-w-lg w-full"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10"
                            onClick={onClose}
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>

                        <div className="p-6">
                            <div className="flex flex-col items-center gap-4 mb-6">
                                <div className="w-16 h-16 p-3 glass-card rounded-xl">
                                    <img
                                        src={icon}
                                        alt={title}
                                        className={`w-full h-full ${invert && theme === "dark" ? "invert" : ""}`}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">{title}</h3>
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed">{description}</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
