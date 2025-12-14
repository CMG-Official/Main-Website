import { motion } from "framer-motion";
import { SocialLink } from "../../types";
import { socialLinks } from "../../data/sociallinks";
import { useTheme } from "../../contexts/ThemeContext";

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
    const { theme } = useTheme();

    return (
        <footer className="relative mt-20">
            <div className="absolute top-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <a href="#home" className="text-xl font-bold text-gradient">
                            MC
                        </a>
                        <span className="text-text-secondary">© {currentYear} Credit:Motocite</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((link: SocialLink) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill p-2 hover:bg-primary/10 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
