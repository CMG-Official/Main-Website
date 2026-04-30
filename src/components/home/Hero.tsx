import { motion } from "framer-motion";
import {
    ArrowDownIcon,
    BoltIcon,
    CodeBracketIcon,
    SparklesIcon,
    SwatchIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";
import Modal from "../common/Modal";
import WavingHand from "./WavingHand";
import { techStack, tools } from "../../data/tech";
import { TechItem } from "../../types";
import { containerVariants, itemVariants, rightSideVariants } from "../../utils/animations";
import { useWindowResize } from "../../hooks/useWindowResize";
import TechSection from "./hero/TechSection";
import ParticleCanvas from "./hero/ParticleCanvas";

const highlights = [
    { value: "Premium", label: "visual direction" },
    { value: "Responsive", label: "across every screen" },
    { value: "Production", label: "ready frontend systems" },
];

const valueCards = [
    {
        title: "Brand-forward landing pages",
        copy: "Hero sections, motion systems, and layouts that feel bigger and more intentional.",
        icon: SwatchIcon,
    },
    {
        title: "Frontend systems",
        copy: "Reusable React foundations that help products stay clean as they grow.",
        icon: CodeBracketIcon,
    },
    {
        title: "Shipping mindset",
        copy: "Fast iteration, polished details, and a focus on real outcomes instead of filler.",
        icon: BoltIcon,
    },
];

const Hero: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<TechItem | null>(null);
    const { isXl } = useWindowResize();

    const featuredTech = useMemo(() => techStack.slice(0, 8), []);
    const featuredTools = useMemo(() => tools.slice(0, 4), []);

    useEffect(() => {
        const navbar: HTMLElement | null = document.querySelector("header");
        if (navbar) {
            navbar.style.display = isXl ? "flex" : "none";
        }
    }, [isXl]);

    return (
        <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute left-[8%] top-[14%] h-72 w-72 rounded-full bg-primary/20 blur-[110px]"
                    animate={{ scale: [1, 1.18, 1], opacity: [0.28, 0.45, 0.28] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
                    animate={{ scale: [1.15, 1, 1.15], opacity: [0.22, 0.38, 0.22] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                className="section-shell relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-14 2xl:gap-20">
                    <motion.div variants={itemVariants} className="max-w-3xl">
                        <motion.div
                            className="glass-pill mb-6 inline-flex items-center gap-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <SparklesIcon className="h-4 w-4 text-primary" />
                            <span>Atlantis Labs</span>
                            <WavingHand />
                        </motion.div>

                        <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.92] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            <span className="text-gradient">ATLANTIS LABS</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary-light dark:text-text-secondary-dark sm:text-xl">
                            Expanding ideas into high-end websites, product interfaces, and digital experiences that
                            feel premium from the first second.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                            <motion.a
                                href="#contact"
                                className="glass-button px-7 py-3 font-semibold"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                Start a project
                            </motion.a>
                            <motion.a
                                href="#projects"
                                className="glass-button-secondary px-7 py-3 flex items-center gap-2 font-semibold"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                View work
                                <ArrowDownIcon className="h-4 w-4" />
                            </motion.a>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-[1.5rem] border border-primary/10 bg-white/45 p-4 backdrop-blur-xl dark:bg-white/5"
                                >
                                    <div className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                                        {item.value}
                                    </div>
                                    <div className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 grid gap-4 lg:grid-cols-3">
                            {valueCards.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <motion.div
                                        key={card.title}
                                        className="glass-card p-5"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-base font-bold">{card.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                                            {card.copy}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-10 space-y-7">
                            <TechSection
                                icon={<CodeBracketIcon className="w-5 h-5" />}
                                title="Tech Stack"
                                items={featuredTech}
                                onItemClick={setSelectedItem}
                            />
                            <TechSection
                                icon={<WrenchScrewdriverIcon className="w-5 h-5" />}
                                title="Tools"
                                items={featuredTools}
                                onItemClick={setSelectedItem}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={rightSideVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative"
                    >
                        <div className="glass-card relative overflow-hidden p-3 sm:p-4">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                            <div className="grid gap-4">
                                <div className="rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.18))] p-4 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs uppercase tracking-[0.28em] text-primary">
                                                Hero reference
                                            </div>
                                            <div className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                                Particle-built wordmark
                                            </div>
                                        </div>
                                        <div className="glass-pill px-3 py-1 text-xs">ATLANTIS LABS</div>
                                    </div>
                                    <div className="h-[380px] sm:h-[440px] xl:h-[540px]">
                                        <ParticleCanvas />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[1.5rem] border border-primary/10 bg-white/45 p-5 dark:bg-white/5">
                                        <div className="text-sm uppercase tracking-[0.24em] text-primary">Direction</div>
                                        <p className="mt-3 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                                            Oceanic glow, cinematic depth, and a cleaner studio presentation with more space.
                                        </p>
                                    </div>
                                    <div className="rounded-[1.5rem] border border-primary/10 bg-white/45 p-5 dark:bg-white/5">
                                        <div className="text-sm uppercase tracking-[0.24em] text-primary">Outcome</div>
                                        <p className="mt-3 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                                            A homepage that feels wider, more premium, and much more brand-led than before.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Modal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.name || ""}
                icon={`/assets/icons/${selectedItem?.name.toLowerCase().replace(".", "").replace(" ", "")}.svg`}
                description={selectedItem?.description || ""}
                invert={selectedItem?.invert}
            />
        </section>
    );
};

export default Hero;
