import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { containerVariants, itemVariants } from "../../utils/animations";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative group h-full"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative h-full overflow-hidden rounded-[24px]">
                <motion.div
                    className="glass-card flex h-full flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative h-48 flex-shrink-0 overflow-hidden rounded-t-[24px]">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: isHovered ? 1.2 : 1.1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: isHovered ? 0.65 : 0.4 }}
                        />
                    </div>

                    <div className="flex flex-grow flex-col p-6">
                        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                        <p className="mb-4 flex-grow text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            {project.description}
                        </p>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech: string) => (
                                    <span key={tech} className="glass-pill text-xs px-2.5 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-button px-4 py-2 flex items-center gap-2 text-sm font-semibold"
                                >
                                    <img src="/assets/icons/github.svg" alt="GitHub" className="w-4 h-4 invert" />
                                    Code
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-button-secondary px-4 py-2 flex items-center gap-2 text-sm font-semibold"
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const EmptyState: React.FC = () => (
    <motion.div
        className="col-span-full flex flex-col items-center justify-center py-24 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <div className="relative mb-6">
            <motion.div
                className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <RocketLaunchIcon className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.div
                className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
        <h3 className="text-2xl font-bold mb-3">Projects en route</h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-sm leading-relaxed">
            I'm currently working on some exciting projects. Check back soon or follow my GitHub for the latest updates.
        </p>
        <motion.a
            href="https://github.com/motocite"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 glass-button px-6 py-3 flex items-center gap-2.5 font-semibold"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
        >
            <img src="/assets/icons/github.svg" alt="GitHub" className="w-4 h-4 invert" />
            Follow on GitHub
        </motion.a>
    </motion.div>
);

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const categories: string[] = ["all", ...new Set(projects.map((project) => project.category))];

    const filteredProjects: Project[] = projects.filter(
        (project) => selectedCategory === "all" || project.category === selectedCategory
    );

    return (
        <section className="py-24 sm:py-28">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-shell"
            >
                <div className="mb-14 text-center">
                    <motion.div
                        className="inline-flex items-center gap-2 glass-pill mb-5 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <CodeBracketIcon className="w-4 h-4 text-primary" />
                        Portfolio
                    </motion.div>
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A curated set of Atlantis Labs concepts and builds focused on polished UX, modern frontend
                        systems, and launch-ready product presentation.
                    </motion.p>
                </div>

                <div className="mb-12 flex justify-center gap-3">
                    {categories.map((category: string) => (
                        <motion.button
                            key={category}
                            className={`glass-pill capitalize font-semibold text-sm px-5 py-2 ${
                                selectedCategory === category
                                    ? "border-primary/40 bg-primary/10 text-primary"
                                    : ""
                            }`}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project: Project) => (
                            <motion.div key={project.title} variants={itemVariants}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))
                    ) : (
                        <EmptyState />
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
