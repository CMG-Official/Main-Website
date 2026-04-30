import { useState } from "react";

const useCopy: (duration?: number) => { copied: boolean; copyToClipboard: (text: string) => Promise<void> } = (
    duration = 2000
) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard: (text: string) => Promise<void> = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), duration);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return { copied, copyToClipboard };
};

export { useCopy };
