import { motion } from "framer-motion";
import { TechItem } from "../../../types";
import { useTheme } from "../../../contexts/ThemeContext";
import IconWrapper from "../../common/IconWrapper";
import { TechSectionProps } from "../../../types";

const TechSection: React.FC<TechSectionProps> = ({ icon, title, items, onItemClick }) => {
    const { theme } = useTheme();

    return (
        <div>
            <h3 className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">
                <IconWrapper>{icon}</IconWrapper>
                {title}
            </h3>
            <motion.div
                className={`grid ${
                    title === "Tools" ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                } gap-2 sm:gap-3`}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {items.map((item: TechItem) => (
                    <motion.div
                        key={item.name}
                        className="glass-card p-2 sm:p-3 rounded-lg flex items-center justify-center cursor-pointer"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => onItemClick(item)}
                    >
                        <motion.img
                            src={`/assets/icons/${item.name.toLowerCase().replace(".", "").replace(" ", "")}.svg`}
                            alt={item.name}
                            className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 ${item.invert && theme === "dark" ? "invert" : ""}`}
                        />
                        <span className="text-xs sm:text-sm">{item.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechSection;
