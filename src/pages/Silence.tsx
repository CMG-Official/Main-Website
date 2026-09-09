import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    SparklesIcon,
    ShieldCheckIcon,
    StarIcon,
    UserGroupIcon,
    KeyIcon,
    BoltIcon,
    SpeakerXMarkIcon,
    ClipboardDocumentCheckIcon,
    ClipboardDocumentIcon,
    ArrowDownIcon,
    BriefcaseIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { silenceProfile } from "../data/silenceData";
import { useCopy } from "../hooks/useCopy";
import ThemeToggle from "../components/layout/ThemeToggle";

const Silence: React.FC = () => {
    const { copied, copyToClipboard } = useCopy(2000);
    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState<"home" | "about">("home");

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0b0f17] text-[#e6edf3] font-sans antialiased selection:bg-amber-400/30 selection:text-amber-200">
            {/* Subtle Dot Grid Background Pattern matching istejas.top */}
            <div
                className="fixed inset-0 pointer-events-none -z-10 opacity-70"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Soft Ambient Warm & Cool Backdrops */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-[100px]" />
                <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] bg-gradient-to-b from-cyan-500/8 via-primary/5 to-transparent rounded-full blur-[120px]" />
            </div>

            {/* Minimalist Top Navbar matching istejas.top */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/70 border-b border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    {/* Left: Avatar + Name */}
                    <Link
                        to="/silence"
                        className="flex items-center gap-3 group"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-zinc-900 group-hover:border-amber-400/50 transition-colors">
                            <img
                                src={silenceProfile.avatarUrl}
                                alt="Silence"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = silenceProfile.localAvatarUrl;
                                }}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-bold text-sm tracking-tight text-white group-hover:text-amber-400 transition-colors">
                            Silence
                        </span>
                    </Link>

                    {/* Center: Clean Floating Tab Pill */}
                    <nav className="flex items-center p-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-semibold shadow-inner">
                        <button
                            onClick={() => {
                                setActiveTab("home");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                                activeTab === "home"
                                    ? "bg-zinc-800 text-white shadow-sm"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab("about");
                                scrollToSection("about-me");
                            }}
                            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                                activeTab === "about"
                                    ? "bg-zinc-800 text-white shadow-sm"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            About
                        </button>
                    </nav>

                    {/* Right: Theme Toggle & Atlantis Labs Link */}
                    <div className="flex items-center gap-2.5">
                        <Link
                            to="/"
                            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all"
                        >
                            <span>Atlantis Labs</span>
                            <span className="text-zinc-500">↗</span>
                        </Link>
                        <ThemeToggle className="bg-zinc-900/80 border border-white/10 hover:border-white/20 p-1.5 text-zinc-400" />
                    </div>
                </div>
            </header>

            {/* Main Content Shell */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-24 space-y-16 sm:space-y-20">
                {/* 1. HERO SECTION */}
                <section id="hero" className="space-y-6 pt-4">
                    {/* Floating Squircle Avatar with subtle smooth motion */}
                    <motion.div
                        className="relative w-20 h-20 sm:w-24 sm:h-24"
                        animate={{
                            y: [-3, 3, -3],
                        }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-xl relative group">
                            <img
                                src={silenceProfile.avatarUrl}
                                alt="Silence_ego"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = silenceProfile.localAvatarUrl;
                                }}
                                onLoad={() => setAvatarLoaded(true)}
                                className={`w-full h-full object-cover transition-opacity duration-300 ${
                                    avatarLoaded ? "opacity-100" : "opacity-0"
                                }`}
                            />
                            {/* Online green indicator */}
                            <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0b0f17] shadow" />
                        </div>
                    </motion.div>

                    {/* Eyebrow in Amber Accent */}
                    <div>
                        <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                            {silenceProfile.eyebrow}
                        </span>
                    </div>

                    {/* Exact User Headline Opening */}
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            {silenceProfile.openingStatement}{" "}
                            <span className="text-amber-400">
                                {silenceProfile.openingRole}
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl font-semibold text-zinc-300">
                            {silenceProfile.adminRole}
                        </p>
                    </div>

                    {/* Short Human Subtitle */}
                    <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                        {silenceProfile.shortBio}
                    </p>

                    {/* Action Buttons matching istejas.top */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => copyToClipboard(silenceProfile.discord)}
                            className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-150 flex items-center gap-2 shadow-sm hover:shadow active:scale-95"
                        >
                            <img src="/assets/icons/discord.svg" alt="Discord" className="w-4 h-4" />
                            <span>{copied ? "Copied Discord Handle!" : "Copy Discord : Silence_ego"}</span>
                            {copied ? (
                                <ClipboardDocumentCheckIcon className="w-4 h-4 text-zinc-950" />
                            ) : (
                                <ClipboardDocumentIcon className="w-4 h-4 opacity-70" />
                            )}
                        </button>

                        <button
                            onClick={() => scrollToSection("about-me")}
                            className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-150 flex items-center gap-2"
                        >
                            <span>About & Roles</span>
                            <ArrowDownIcon className="w-3.5 h-3.5 text-zinc-400" />
                        </button>
                    </div>
                </section>

                {/* 2. ABOUT ME CARD matching istejas.top card layout */}
                <section id="about-me" className="space-y-6">
                    <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm space-y-6">
                        {/* Section Header */}
                        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
                            <UserIcon className="w-4 h-4" />
                            <span>ABOUT ME</span>
                        </div>

                        {/* Bio Paragraphs */}
                        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                            {silenceProfile.bioParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        {/* Social / Contact Badges */}
                        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2.5">
                            <button
                                onClick={() => copyToClipboard(silenceProfile.discord)}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                            >
                                <img src="/assets/icons/discord.svg" alt="Discord" className="w-3.5 h-3.5" />
                                <span>Discord: Silence_ego</span>
                                {copied && <span className="text-emerald-400 font-bold ml-1">Copied!</span>}
                            </button>

                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                            >
                                <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                                <span>Atlantis Labs</span>
                            </Link>

                            <a
                                href="https://discord.gg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                            >
                                <BoltIcon className="w-3.5 h-3.5 text-amber-400" />
                                <span>TSCS</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. VENTURES & LEADERSHIP (Exact 3-card grid from istejas.top) */}
                <section id="ventures" className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>VENTURES & LEADERSHIP</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {silenceProfile.ventures.map((venture, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm hover:border-amber-400/40 transition-colors flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                                            {venture.title}
                                        </h3>
                                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-amber-400/30 text-amber-400 bg-amber-400/10">
                                            {venture.roleBadge}
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                        {venture.description}
                                    </p>
                                </div>

                                {venture.link && (
                                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                        <span>View</span>
                                        <span>&rarr;</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. ROLES & BADGES */}
                <section id="roles" className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
                        <ShieldCheckIcon className="w-4 h-4" />
                        <span>ROLES & BADGES</span>
                    </div>

                    {/* Clean pill-style badges and role cards */}
                    <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm space-y-6">
                        {/* Quick Badge Pills Ribbon */}
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-3">
                                Held Roles
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {silenceProfile.roles.map((r, i) => (
                                    <span
                                        key={i}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                                            r.isSpecial
                                                ? "bg-amber-400/15 border-amber-400/40 text-amber-300"
                                                : "bg-zinc-800/80 border-white/10 text-zinc-200 hover:border-zinc-600"
                                        }`}
                                    >
                                        {r.name === "*" ? (
                                            <StarIcon className="w-3.5 h-3.5 text-amber-400" />
                                        ) : r.isSpecial ? (
                                            <SpeakerXMarkIcon className="w-3.5 h-3.5 text-amber-400" />
                                        ) : (
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                                        )}
                                        <span>{r.name}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Special Role Spotlight (silence) */}
                        <div className="p-5 rounded-xl border border-amber-400/30 bg-amber-400/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                                    <SpeakerXMarkIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-base font-bold text-white">silence</h4>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300">
                                            Special Role
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                                        Personal signature role across TSCS and partner servers.
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-lg bg-zinc-900 border border-white/5">
                                @silence
                            </span>
                        </div>

                        {/* Detailed Role Breakdown Grid */}
                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {silenceProfile.roles
                                .filter((r) => !r.isSpecial)
                                .map((role, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl border border-white/5 bg-zinc-900/60 hover:border-white/15 transition-colors"
                                    >
                                        <div className="flex items-center justify-between gap-2 mb-1.5">
                                            <span className="font-bold text-sm text-white flex items-center gap-1.5">
                                                {role.name === "*" && <StarIcon className="w-4 h-4 text-amber-400" />}
                                                {role.name === "Owner" && <BoltIcon className="w-4 h-4 text-amber-400" />}
                                                {role.name === "Ownership" && <KeyIcon className="w-4 h-4 text-amber-400" />}
                                                {role.name === "Community manager" && <UserGroupIcon className="w-4 h-4 text-amber-400" />}
                                                {role.name.includes("Admin") && <ShieldCheckIcon className="w-4 h-4 text-amber-400" />}
                                                {role.name.includes("Mod") && <ShieldCheckIcon className="w-4 h-4 text-amber-400" />}
                                                <span>{role.name}</span>
                                            </span>
                                            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 border border-white/5">
                                                {role.badgeText}
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-400 leading-relaxed">
                                            {role.description}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>

                {/* 5. DISCORD & CONNECT CARD */}
                <section id="contact" className="space-y-4">
                    <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow">
                                <img
                                    src={silenceProfile.avatarUrl}
                                    alt="Silence Discord"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = silenceProfile.localAvatarUrl;
                                    }}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Silence</h4>
                                <p className="text-xs sm:text-sm font-mono text-amber-400">
                                    @{silenceProfile.discord}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => copyToClipboard(silenceProfile.discord)}
                            className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-5 py-2 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2"
                        >
                            <img src="/assets/icons/discord.svg" alt="Discord" className="w-4 h-4" />
                            <span>{copied ? "Copied Silence_ego!" : "Copy Discord Tag"}</span>
                        </button>
                    </div>
                </section>
            </main>

            {/* Clean Minimalist Footer matching istejas.top */}
            <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-500">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        © 2026 Silence · Built with care.
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="hover:text-zinc-300 transition-colors">
                            Atlantis Labs
                        </Link>
                        <span>·</span>
                        <a
                            href="https://discord.gg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-300 transition-colors"
                        >
                            TSCS
                        </a>
                        <span>·</span>
                        <button
                            onClick={() => copyToClipboard(silenceProfile.discord)}
                            className="hover:text-amber-400 transition-colors"
                        >
                            Discord
                        </button>
                    </div>
                </div>
            </footer>

            {/* Subtle Toast Feedback for Clipboard */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-amber-400/40 text-amber-300 px-4 py-2 rounded-xl text-xs font-bold shadow-2xl flex items-center gap-2"
                    >
                        <ClipboardDocumentCheckIcon className="w-4 h-4 text-amber-400" />
                        <span>Copied {silenceProfile.discord} to clipboard</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Silence;
