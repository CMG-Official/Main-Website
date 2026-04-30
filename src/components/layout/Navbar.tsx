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
                    className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-5"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                        duration: 0.4,
                    }}
                >
                    <nav
                        className={`rounded-2xl transition-all duration-300 ${
                            isScrolled
                                ? "border border-white/10 bg-black/35 shadow-lg shadow-black/30 backdrop-blur-xl"
                                : "bg-transparent"
                        }`}
                    >
                        <div className="flex items-center gap-3 px-5 py-2.5">
                            <motion.a
                                href="#home"
                                className="mr-1 text-lg font-extrabold tracking-[0.18em] text-gradient"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ATLANTIS LABS
                            </motion.a>

                            <div className="h-5 w-px rounded-full bg-white/10" />

                            <motion.div
                                className="flex items-center gap-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.15 }}
                            >
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                            activeSection === item.href.replace("#", "")
                                                ? "bg-white/10 text-white"
                                                : "text-text-secondary-dark hover:bg-white/5 hover:text-white"
                                        }`}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                            e.preventDefault();
                                            const element: HTMLElement | null = document.querySelector(item.href);
                                            if (element) {
                                                const elementPosition: number = element.getBoundingClientRect().top;
                                                const offsetPosition: number =
                                                    elementPosition + window.pageYOffset - 100;
                                                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </motion.div>

                            <div className="h-5 w-px rounded-full bg-white/10" />

                            <ThemeToggle />

                            <motion.a
                                href="https://github.com/motocite"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button px-3.5 py-1.5 flex items-center gap-2 text-sm font-semibold"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
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
