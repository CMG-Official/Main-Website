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
            <div className="relative overflow-hidden rounded-2xl h-full">
                <motion.div
                    className="glass-card h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative h-48 overflow-hidden flex-shrink-0 rounded-t-2xl">
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

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 flex-grow text-sm leading-relaxed">
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
    const categories: string[] = ["all", "tools", "frontend"];

    const filteredProjects: Project[] = projects.filter(
        (project) => selectedCategory === "all" || project.category === selectedCategory
    );

    return (
        <section id="projects" className="py-24">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-14">
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
                        className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A selection of projects that showcase my skills and passion for building great web experiences.
                    </motion.p>
                </div>

                <div className="flex justify-center gap-3 mb-12">
                    {categories.map((category: string) => (
                        <motion.button
                            key={category}
                            className={`glass-pill capitalize font-semibold text-sm px-5 py-2 ${
                                selectedCategory === category
                                    ? "bg-primary/15 border-primary/30 text-primary dark:text-indigo-300"
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
