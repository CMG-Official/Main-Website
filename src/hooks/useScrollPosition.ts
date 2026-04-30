import { useState, useEffect } from "react";

const useScrollPosition: () => { isScrolled: boolean; activeSection: string } = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll: () => void = () => {
            const scrollPosition: number = window.scrollY;
            setIsScrolled(scrollPosition > 50);

            const sections: string[] = ["home", "projects", "contact"];
            for (const section of sections) {
                const element: HTMLElement | null = document.getElementById(section);
                if (element) {
                    const rect: DOMRect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { isScrolled, activeSection };
};

export { useScrollPosition };
