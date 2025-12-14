import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useTheme } from "../../contexts/ThemeContext";
import { useWindowResize } from "../../hooks/useWindowResize";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import ThemeToggle from "../layout/ThemeToggle";
import { navItems } from "../../data/navitems";

const Navbar: React.FC = () => {
    const { theme } = useTheme();
    const { isScrolled, activeSection } = useScrollPosition();
    const { isMobile, isXl } = useWindowResize();
    const isVisible: boolean = useScrollVisibility(isXl);

    if (isMobile || !isXl) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-6"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 0.5,
                    }}
                >
                    <nav className={`rounded-full ${isScrolled ? "backdrop-blur-lg bg-background/50" : ""}`}>
                        <div className="flex items-center gap-4 px-6 py-3">
                            <motion.a
                                href="#home"
                                className="text-xl font-bold text-gradient"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                MC
                            </motion.a>

                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className={`glass-pill px-3 py-1.5 text-sm ${activeSection === item.href.replace("#", "") ? "bg-primary/20" : ""
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                            e.preventDefault();
                                            const element: HTMLElement | null = document.querySelector(item.href);
                                            if (element) {
                                                const elementPosition: number = element.getBoundingClientRect().top;
                                                const offsetPosition: number =
                                                    elementPosition + window.pageYOffset - 100;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </motion.div>

                            <ThemeToggle />

                            <motion.a
                                href="https://github.com/motocite"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button px-3 py-1.5 flex items-center gap-2 text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src="/assets/icons/github.svg"
                                    alt="GitHub"
                                    className={`w-4 h-4 ${theme === "dark" ? "invert" : ""}`}
                                />
                                <span className="hidden sm:inline">GitHub</span>
                            </motion.a>
                        </div>
                    </nav>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
