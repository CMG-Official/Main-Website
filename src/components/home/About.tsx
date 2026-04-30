import { motion } from "framer-motion";
import {
    RocketLaunchIcon,
    CommandLineIcon,
    CpuChipIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";

const stats = [
    { value: "10+", label: "Projects shipped" },
    { value: "3+", label: "Years building" },
    { value: "∞", label: "Coffees consumed" },
    { value: "100%", label: "Open source love" },
];

const pillars = [
    {
        icon: <RocketLaunchIcon className="w-6 h-6" />,
        title: "Fast Delivery",
        desc: "We ship production-ready software quickly without sacrificing quality or stability.",
    },
    {
        icon: <CommandLineIcon className="w-6 h-6" />,
        title: "Clean Code",
        desc: "Readable, maintainable, and well-structured code that scales with your ambitions.",
    },
    {
        icon: <CpuChipIcon className="w-6 h-6" />,
        title: "Modern Stack",
        desc: "React, TypeScript, Tauri, Rust — we pick the right tool for every challenge.",
    },
    {
        icon: <GlobeAltIcon className="w-6 h-6" />,
        title: "Web-First",
        desc: "Beautiful, responsive interfaces that work flawlessly across every device and platform.",
    },
    {
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        title: "Secure by Default",
        desc: "Security is baked in from day one, not bolted on as an afterthought.",
    },
    {
        icon: <LightBulbIcon className="w-6 h-6" />,
        title: "Innovation",
        desc: "Pushing boundaries and exploring emerging technologies to stay ahead of the curve.",
    },
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative">
            {/* subtle section glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-6"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 glass-pill mb-5 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <RocketLaunchIcon className="w-4 h-4 text-primary" />
                        About
                    </motion.div>
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Who is <span className="text-gradient">Atlantis Labs</span>?
                    </motion.h2>
                    <motion.p
                        className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A small but mighty software lab focused on crafting exceptional digital products. We combine
                        technical depth with design sensibility to build things people actually love using.
                    </motion.p>
                </div>

                {/* Stats row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="glass-card p-6 text-center"
                            whileHover={{ scale: 1.04 }}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <div className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
                            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pillars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            className="glass-card p-6 flex gap-4 items-start group"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center flex-shrink-0 text-primary dark:text-indigo-300 group-hover:scale-110 transition-transform">
                                {pillar.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-base mb-1">{pillar.title}</h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
