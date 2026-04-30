const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.5,
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const rightSideVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.2,
        },
    },
};

export { pageVariants, containerVariants, itemVariants, rightSideVariants };
