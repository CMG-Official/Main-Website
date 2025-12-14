import { motion } from "framer-motion";
import { TechItem } from "../../../types";
import { useTheme } from "../../../contexts/ThemeContext";
import { FloatingIconsProps } from "../../../types";

const FloatingIcons: React.FC<FloatingIconsProps> = ({ randomIcons, iconAnimations }) => {
    const { theme } = useTheme();

    return (
        <>
            {randomIcons.map((tech: TechItem, index: number) => (
                <motion.div
                    key={tech.name}
                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl glass-card cursor-grab active:cursor-grabbing z-20"
                    style={{
                        top: `${iconAnimations[index].position.y}%`,
                        left: `${iconAnimations[index].position.x}%`,
                        transform: `translate(-50%, -50%)`,
                    }}
                    drag
                    dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                    }}
                    dragElastic={0.8}
                    dragTransition={{
                        power: 0.1,
                        timeConstant: 200,
                        modifyTarget: (target) => Math.round(target / 50) * 50,
                    }}
                    whileDrag={{
                        scale: 1.1,
                        zIndex: 50,
                    }}
                    animate={iconAnimations[index].animation}
                    transition={{
                        duration: iconAnimations[index].duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                    }}
                >
                    <img
                        src={`/assets/icons/${tech.name}.svg`}
                        alt={tech.name}
                        className={`w-full h-full p-2.5 pointer-events-none ${
                            tech.invert && theme === "dark" ? "invert" : ""
                        }`}
                    />
                </motion.div>
            ))}
        </>
    );
};

export default FloatingIcons;
