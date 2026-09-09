import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SocialLink } from "../../types";
import { socialLinks } from "../../data/sociallinks";
import { useTheme } from "../../contexts/ThemeContext";

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
    const { theme } = useTheme();

    return (
        <footer className="relative mt-16 pb-8">
            <div className="absolute top-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
            </div>

            <div className="section-shell py-8">
                <div className="panel-shell flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-2.5 text-center md:items-start md:text-left"
                    >
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="text-xl font-extrabold text-gradient tracking-tight"
                        >
                            ATLANTIS LABS
                        </Link>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-text-secondary-light dark:text-text-secondary-dark text-sm">
                            <span>© {currentYear} Atlantis Labs · Designed to feel bigger, cleaner, and launch-ready</span>
                            <span className="text-white/20">•</span>
                            <Link to="/silence" className="text-primary hover:underline font-semibold">
                                Silence Profile
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        {socialLinks.map((link: SocialLink) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill p-2.5 transition-colors hover:bg-primary/12"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                                title={link.name}
                            >
                                <img
                                    src={link.icon}
                                    alt={link.name}
                                    className={`w-4 h-4 ${theme === "dark" ? "invert" : ""}`}
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
