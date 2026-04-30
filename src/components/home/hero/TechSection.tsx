import { motion } from "framer-motion";
import { TechItem } from "../../../types";
import { useTheme } from "../../../contexts/ThemeContext";
import IconWrapper from "../../common/IconWrapper";
import { TechSectionProps } from "../../../types";

const TechSection: React.FC<TechSectionProps> = ({ icon, title, items, onItemClick }) => {
    const { theme } = useTheme();

    return (
        <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-semibold uppercase tracking-[0.12em] text-text-primary-dark sm:text-lg">
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
                        className="flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-3.5"
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
                            className={`mr-2 h-5 w-5 sm:h-6 sm:w-6 ${item.invert && theme === "dark" ? "invert" : ""}`}
                        />
                        <span className="text-xs text-text-primary-dark sm:text-sm">{item.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechSection;
