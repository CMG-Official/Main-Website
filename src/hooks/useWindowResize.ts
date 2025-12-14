import { useState, useEffect } from "react";
import { WindowSize } from "../types";

export const useWindowResize: () => WindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        isXl: window.innerWidth >= 1280,
        isMobile: window.innerWidth < 768,
    });

    useEffect(() => {
        const handleResize: () => void = () => {
            setWindowSize({
                width: window.innerWidth,
                isXl: window.innerWidth >= 1280,
                isMobile: window.innerWidth < 768,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
