import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
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
            <div className="relative overflow-hidden rounded-xl h-full">
                <motion.div
                    className="glass-card h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: isHovered ? 1.3 : 1.2 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 0.5 : 0 }}
                        />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech: string) => (
                                    <span key={tech} className="glass-pill text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-button px-4 py-2 flex items-center gap-2"
                                >
                                    <img src="/assets/icons/github.svg" alt="GitHub" className="w-5 h-5 invert" />
                                    View Code
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-button-secondary px-4 py-2 flex items-center gap-2"
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const categories: string[] = ["all", "tools", "frontend"];

    const filteredProjects: Project[] = projects.filter(
        (project) => selectedCategory === "all" || project.category === selectedCategory
    );

    return (
        <section className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <CodeBracketIcon className="w-8 h-8 inline-block mr-4" />
                        Featured Projects
                    </motion.h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience in web development.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12">
                    {categories.map((category: string) => (
                        <motion.button
                            key={category}
                            className={`glass-pill capitalize ${selectedCategory === category ? "bg-primary/20" : ""}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project: Project) => (
                        <motion.div key={project.title} variants={itemVariants}>
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
