import { ReactNode } from "react";

interface TechItem {
    name: string;
    description?: string;
    invert?: boolean;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon: string;
    description: string;
    invert?: boolean;
}

interface LayoutProps {
    children: ReactNode;
}

interface Project {
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl: string;
    featured?: boolean;
    category: "frontend" | "fullstack" | "mobile" | "other";
}

interface NavItem {
    label: string;
    href: string;
}

interface SocialLink {
    name: string;
    url: string;
    icon: string;
    isInverted: boolean;
}

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface WindowSize {
    width: number;
    isXl: boolean;
    isMobile: boolean;
}

interface FloatingIconsProps {
    randomIcons: TechItem[];
    iconAnimations: {
        position: { x: number; y: number };
        animation: { y: number[]; x: number[]; rotate: number[] };
        duration: number;
    }[];
}

interface TechSectionProps {
    icon: React.ReactNode;
    title: string;
    items: TechItem[];
    onItemClick: (item: TechItem) => void;
}

interface IconWrapperProps {
    children: ReactNode;
}

export type {
    TechItem,
    ModalProps,
    LayoutProps,
    Project,
    NavItem,
    SocialLink,
    Theme,
    ThemeContextType,
    WindowSize,
    FloatingIconsProps,
    TechSectionProps,
    IconWrapperProps,
};
