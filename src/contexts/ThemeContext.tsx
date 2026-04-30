import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Theme, ThemeContextType } from "../types";

const ThemeContext: React.Context<ThemeContextType | undefined> = createContext<ThemeContextType | undefined>(
    undefined
);

function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme: Theme | null = localStorage.getItem("theme") as Theme | null;
        return savedTheme || "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme: () => void = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function useTheme() {
    const context: ThemeContextType | undefined = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme };
