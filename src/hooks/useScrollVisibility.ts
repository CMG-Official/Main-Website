import { useState, useEffect } from "react";

export const useScrollVisibility: (shouldTrack: boolean) => boolean = (shouldTrack = true) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollPosition: number = window.pageYOffset;
        let ticking: boolean = false;

        const handleScroll: () => void = () => {
            const currentScrollY: number = window.pageYOffset;
            const scrollDifference: number = Math.abs(currentScrollY - lastScrollPosition);

            if (scrollDifference > 10 && shouldTrack) {
                if (currentScrollY > lastScrollPosition) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                lastScrollPosition = currentScrollY;
            }
        };

        const onScroll: () => void = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [shouldTrack]);

    return isVisible;
};
