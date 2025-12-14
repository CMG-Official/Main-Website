import { TechItem } from "../types/index";

const techStack: TechItem[] = [
    {
        name: "JavaScript",
        description:
            "A versatile programming language that enables interactive web experiences. Used for both front-end and back-end development.",
    },
    {
        name: "HTML",
        description: "The standard markup language for creating web pages and web applications.",
    },
    {
        name: "CSS",
        description: "A style sheet language used for describing the presentation of a document written in HTML.",
    },
    {
        name: "Vite",
        description:
            "A build tool that aims to provide a faster and leaner development experience for modern web projects.",
    },
    {
        name: "React",
        description:
            "A JavaScript library for building user interfaces. It is used for building single-page applications.",
    },
    {
        name: "TypeScript",
        description: "A statically typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
        name: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework for rapidly building custom designs.",
    },
    {
        name: "F. Motion",
        description: "A production-ready motion library for React.",
        invert: true,
    },
    {
        name: "Next.js",
        description: "A React framework for building server-side rendered and static web applications.",
    },
    {
        name: "Webpack",
        description: "A static module bundler for modern JavaScript applications.",
    },
    {
        name: "NPM",
        description: "A package manager for JavaScript.",
    },
    {
        name: "Electron",
        description: "A framework for building cross-platform desktop applications using web technologies.",
    },
    {
        name: "Rust",
        description: "A systems programming language focused on safety, concurrency, and performance.",
        invert: true,
    },
    {
        name: "Supabase",
        description: "An open source Firebase alternative providing all the backend features you need.",
    },
    {
        name: "Tauri",
        description: "A framework for building tiny, blazing fast binaries for desktop applications.",
    },
];

const tools: TechItem[] = [
    {
        name: "VS Code",
        description: "A powerful, extensible code editor with integrated debugging and Git support.",
    },
    {
        name: "Git",
        description:
            "A distributed version control system for tracking changes in source code during software development.",
    },
    {
        name: "Figma",
        description: "A vector graphics editor and prototyping tool which is primarily web-based.",
    },
    {
        name: "GitHub",
        description: "A web-based platform for version control and collaboration.",
        invert: true,
    },
    {
        name: "Vercel",
        description: "A cloud platform for static sites and serverless functions.",
        invert: true,
    },
];

export { techStack, tools };
