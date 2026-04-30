import { motion } from "framer-motion";
import {
    CommandLineIcon,
    CpuChipIcon,
    PaintBrushIcon,
    BoltIcon,
    ArrowTrendingUpIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const pillars = [
    {
        title: "Interfaces with depth",
        copy: "Premium landing pages, dashboards, and product surfaces designed to feel crisp, fast, and intentional.",
        icon: PaintBrushIcon,
    },
    {
        title: "Systems that scale",
        copy: "Frontend architecture, internal tools, and connected product flows that hold up as the product grows.",
        icon: CpuChipIcon,
    },
    {
        title: "Launch-ready execution",
        copy: "From concept to deployment, Atlantis Labs turns rough ideas into production-ready software with strong polish.",
        icon: BoltIcon,
    },
];

const stats = [
    { label: "Design + build flow", value: "End-to-end" },
    { label: "Product focus", value: "Fast & modern" },
    { label: "Delivery style", value: "Clean and reliable" },
];

const process = [
    { title: "Strategy", copy: "We clarify the product, audience, and experience before pixels start flying.", icon: CommandLineIcon },
    { title: "Build", copy: "We ship the core experience with motion, responsiveness, and frontend quality built in.", icon: ArrowTrendingUpIcon },
    { title: "Refine", copy: "We tune the finish, tighten the details, and make sure the final result feels premium.", icon: ShieldCheckIcon },
];

const StudioOverview: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-28">
            <div className="section-shell">
                <motion.div
                    className="glass-card overflow-hidden p-6 sm:p-8 lg:p-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div className="space-y-6">
                            <div className="glass-pill inline-flex items-center gap-2">
                                <CpuChipIcon className="h-4 w-4 text-primary" />
                                Studio capabilities
                            </div>
                            <h2 className="section-heading max-w-3xl">
                                Atlantis Labs builds digital products that feel expansive, sharp, and ready to ship.
                            </h2>
                            <p className="section-copy max-w-2xl">
                                The goal is simple: take an idea, give it structure, then turn it into a strong visual
                                and technical experience people remember.
                            </p>

                            <div className="grid gap-4 md:grid-cols-3">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-primary/10 bg-white/40 p-4 dark:bg-white/5">
                                        <div className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                                            {stat.value}
                                        </div>
                                        <div className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                return (
                                    <motion.div
                                        key={pillar.title}
                                        className="rounded-[1.5rem] border border-primary/12 bg-white/50 p-5 dark:bg-white/5"
                                        initial={{ opacity: 0, x: 24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold">{pillar.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                                            {pillar.copy}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 border-t border-primary/10 pt-8 md:grid-cols-3">
                        {process.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    className="rounded-[1.5rem] border border-primary/10 bg-white/35 p-5 dark:bg-white/5"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
                                        <Icon className="h-5 w-5 text-accent dark:text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                                        {item.copy}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StudioOverview;
