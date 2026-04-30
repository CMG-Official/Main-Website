import { Project } from "../types";

const projects: Project[] = [
    {
        title: "Abyss Control",
        description:
            "A real-time operations dashboard for teams that need live telemetry, sharp visualizations, and calm high-signal workflows.",
        image: "/assets/preview-150-dark.png",
        techStack: ["React", "TypeScript", "Tailwind", "Motion"],
        liveUrl: "https://atlantislabs.top",
        githubUrl: "https://github.com/motocite",
        featured: true,
        category: "frontend",
    },
    {
        title: "Tide Desktop",
        description:
            "A focused desktop workspace for shipping internal tools faster, with compact navigation, native performance, and clean UX.",
        image: "/assets/preview-100-dark.png",
        techStack: ["Electron", "Node.js", "TypeScript", "CSS"],
        githubUrl: "https://github.com/motocite",
        featured: true,
        category: "other",
    },
    {
        title: "Current OS",
        description:
            "A polished client portal concept designed for productized services, featuring project visibility, milestones, and async updates.",
        image: "/assets/preview-150-light.png",
        techStack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
        liveUrl: "https://atlantislabs.top",
        githubUrl: "https://github.com/motocite",
        featured: true,
        category: "fullstack",
    },
];

export { projects };
