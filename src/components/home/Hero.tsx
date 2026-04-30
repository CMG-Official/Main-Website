import { motion } from "framer-motion";
import { ArrowDownIcon, CodeBracketIcon, SparklesIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import Modal from "../common/Modal";
import { techStack, tools } from "../../data/tech";
import { TechItem } from "../../types";
import { containerVariants, itemVariants } from "../../utils/animations";
import TechSection from "./hero/TechSection";
import ParticleCanvas from "./hero/ParticleCanvas";

const stats = [
    { value: "Premium", label: "website styling" },
    { value: "Fast", label: "frontend execution" },
    { value: "Polished", label: "product feel" },
];

const Hero: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<TechItem | null>(null);

    const featuredTech = useMemo(() => techStack.slice(0, 8), []);
    const featuredTools = useMemo(() => tools.slice(0, 4), []);

    return (
        <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[140px]" />
                <div className="absolute -left-40 bottom-0 h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[160px]" />
            </div>

            <motion.div
                className="section-shell relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        variants={itemVariants}
                        className="glass-pill mb-6 inline-flex items-center gap-2 uppercase tracking-[0.18em]"
                    >
                        <SparklesIcon className="h-4 w-4 text-primary" />
                        Atlantis Labs
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="max-w-5xl text-5xl font-black leading-[0.9] sm:text-6xl lg:text-7xl xl:text-[6.4rem]"
                    >
                        <span className="text-gradient">ATLANTIS LABS</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-5 max-w-3xl text-base leading-8 text-text-secondary-light dark:text-text-secondary-dark sm:text-lg"
                    >
                        High-end web experiences with a darker cinematic feel, sharper glass surfaces, and cleaner
                        frontend presentation built around your brand.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a href="#projects" className="glass-button px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em]">
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="glass-button-secondary flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em]"
                        >
                            Start a Project
                            <ArrowDownIcon className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-3"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="panel-shell px-5 py-4">
                                <div className="text-2xl font-extrabold text-text-primary-dark dark:text-text-primary-dark">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-12 w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-[18px] sm:p-6"
                    >
                        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(30,36,45,0.6),rgba(22,27,34,0.28))] p-4">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <div className="text-left">
                                    <div className="text-xs uppercase tracking-[0.28em] text-primary">Reference style</div>
                                    <div className="mt-1 text-sm text-text-secondary-dark">
                                        Particle wordmark with CL4NKR-inspired atmosphere
                                    </div>
                                </div>
                                <div className="glass-pill hidden px-4 py-2 text-xs sm:block">Only the style changed</div>
                            </div>
                            <div className="h-[320px] sm:h-[420px] lg:h-[520px]">
                                <ParticleCanvas />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-14 grid w-full max-w-6xl gap-8 lg:grid-cols-2">
                        <div className="glass-card p-6 text-left sm:p-8">
                            <div className="mb-4 text-sm uppercase tracking-[0.24em] text-primary">Stack</div>
                            <TechSection
                                icon={<CodeBracketIcon className="h-5 w-5" />}
                                title="Tech Stack"
                                items={featuredTech}
                                onItemClick={setSelectedItem}
                            />
                        </div>
                        <div className="glass-card p-6 text-left sm:p-8">
                            <div className="mb-4 text-sm uppercase tracking-[0.24em] text-primary">Toolkit</div>
                            <TechSection
                                icon={<WrenchScrewdriverIcon className="h-5 w-5" />}
                                title="Tools"
                                items={featuredTools}
                                onItemClick={setSelectedItem}
                            />
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
