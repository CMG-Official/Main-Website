import React, { useState, useEffect, useRef } from "react";
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

const SECTIONS = [
    { id: "hero", label: "Intro" },
    { id: "about", label: "About" },
    { id: "ventures", label: "Ventures" },
    { id: "roles", label: "Roles" },
    { id: "connect", label: "Connect" },
];

const Silence: React.FC = () => {
    const { copied, copyToClipboard } = useCopy(2000);
    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track active section on scroll snap
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPos = container.scrollTop;
            const height = container.clientHeight;
            const index = Math.round(scrollPos / height);
            if (index >= 0 && index < SECTIONS.length) {
                setActiveSection(index);
            }
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (index: number) => {
        const container = containerRef.current;
        if (!container) return;
        const target = document.getElementById(SECTIONS[index].id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setActiveSection(index);
        }
    };

    return (
        <div className="relative w-full h-screen bg-black text-[#e6edf3] font-sans antialiased overflow-hidden selection:bg-amber-400/30 selection:text-amber-200">
            {/* Subtle Dot Grid Background matching istejas.top */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Subtle Radial Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-[110px]" />
                <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-b from-cyan-500/8 via-primary/5 to-transparent rounded-full blur-[120px]" />
            </div>

            {/* Minimalist Sticky Top Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/75 border-b border-white/5 transition-all duration-300">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                    {/* Left: Avatar + Name */}
                    <button
                        onClick={() => scrollToSection(0)}
                        className="flex items-center gap-2.5 group text-left"
                    >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/10 bg-zinc-900 group-hover:border-amber-400/50 transition-colors">
                            <img
                                src={silenceProfile.avatarUrl}
                                alt="Silence"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = silenceProfile.localAvatarUrl;
                                }}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-amber-400 transition-colors">
                            Silence
                        </span>
                    </button>

                    {/* Center: Clean Section Tabs */}
                    <nav className="hidden md:flex items-center p-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-semibold shadow-inner">
                        {SECTIONS.map((sec, idx) => (
                            <button
                                key={sec.id}
                                onClick={() => scrollToSection(idx)}
                                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                                    activeSection === idx
                                        ? "bg-zinc-800 text-white shadow-sm"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                            >
                                {sec.label}
                            </button>
                        ))}
                    </nav>

                    {/* Right: Atlantis Labs Link & Theme Toggle */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/"
                            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all"
                        >
                            <span>Atlantis Labs</span>
                            <span className="text-zinc-500">↗</span>
                        </Link>
                        <ThemeToggle className="bg-zinc-900/80 border border-white/10 hover:border-white/20 p-1.5 text-zinc-400" />
                    </div>
                </div>
            </header>

            {/* Right Side Dot Navigation */}
            <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3">
                {SECTIONS.map((sec, idx) => (
                    <button
                        key={sec.id}
                        onClick={() => scrollToSection(idx)}
                        aria-label={`Jump to ${sec.label}`}
                        className="group relative flex items-center justify-center p-1.5"
                    >
                        <span
                            className={`block rounded-full transition-all duration-300 ${
                                activeSection === idx
                                    ? "w-2.5 h-6 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                                    : "w-2 h-2 bg-zinc-700 hover:bg-zinc-400"
                            }`}
                        />
                        <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[11px] font-semibold tracking-wider uppercase text-zinc-300 bg-zinc-900 border border-white/10 px-2 py-0.5 rounded-md pointer-events-none whitespace-nowrap shadow-lg">
                            {sec.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Full-Page Section Snap Container */}
            <div
                ref={containerRef}
                className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth focus:outline-none relative z-10"
                style={{ scrollbarWidth: "none" }}
            >
                {/* SECTION 1: BLACK OPENING PAGE WITH SHINING TEXT & FLOATING PFP */}
                <section
                    id="hero"
                    className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative px-4 sm:px-6 bg-black"
                >
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 pt-10 sm:pt-6">
                        {/* Floating Discord Avatar with gentle levitation */}
                        <motion.div
                            className="relative w-24 h-24 sm:w-28 sm:h-28"
                            animate={{
                                y: [-6, 6, -6],
                            }}
                            transition={{
                                duration: 4.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative group">
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
                                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black shadow" />
                            </div>
                        </motion.div>

                        {/* Eyebrow in Amber Accent */}
                        <div>
                            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                                {silenceProfile.eyebrow}
                            </span>
                        </div>

                        {/* The Exact Opening Sentence with left-to-right shining effect */}
                        <div className="space-y-3">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                This is{" "}
                                <span className="shining-text font-black">
                                    Silence_ego
                                </span>{" "}
                                <span className="text-amber-400 block sm:inline">
                                    {silenceProfile.openingRole}
                                </span>
                            </h1>

                            <p className="text-lg sm:text-2xl font-semibold text-zinc-300">
                                {silenceProfile.adminRole}
                            </p>
                        </div>

                        {/* Short Subtitle */}
                        <p className="max-w-xl text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                            {silenceProfile.shortBio}
                        </p>

                        {/* Actions */}
                        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                            <button
                                onClick={() => copyToClipboard(silenceProfile.discord)}
                                className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-150 flex items-center gap-2 shadow-sm hover:shadow active:scale-95"
                            >
                                <img src="/assets/icons/discord.svg" alt="Discord" className="w-4 h-4" />
                                <span>{copied ? "Copied Silence_ego!" : "Copy Discord : Silence_ego"}</span>
                                {copied ? (
                                    <ClipboardDocumentCheckIcon className="w-4 h-4 text-zinc-950" />
                                ) : (
                                    <ClipboardDocumentIcon className="w-4 h-4 opacity-70" />
                                )}
                            </button>

                            <button
                                onClick={() => scrollToSection(1)}
                                className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-150 flex items-center gap-2"
                            >
                                <span>About Silence</span>
                                <ArrowDownIcon className="w-3.5 h-3.5 text-zinc-400" />
                            </button>
                        </div>

                        {/* Bottom Scroll Prompt */}
                        <div
                            onClick={() => scrollToSection(1)}
                            className="pt-4 flex flex-col items-center gap-1.5 cursor-pointer select-none text-zinc-500 hover:text-amber-400 transition-colors"
                        >
                            <span className="text-[11px] font-semibold uppercase tracking-widest">
                                Scroll to view About
                            </span>
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ArrowDownIcon className="w-4 h-4" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: ABOUT ME & STORY (SNAP SCREEN) */}
                <section
                    id="about"
                    className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative px-4 sm:px-6 bg-[#080c13]"
                >
                    <div className="w-full max-w-3xl mx-auto space-y-5 pt-8 sm:pt-4">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
                            <UserIcon className="w-4 h-4" />
                            <span>ABOUT ME</span>
                        </div>

                        {/* About Card */}
                        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm space-y-4 shadow-xl">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                                        Silence
                                    </h2>
                                    <span className="text-xs sm:text-sm font-mono text-amber-400">
                                        @{silenceProfile.discord}
                                    </span>
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 w-fit">
                                    TSCS Co-Founder & Atlantis Labs Admin
                                </span>
                            </div>

                            {/* Philosophy Quote */}
                            <p className="text-xs sm:text-sm italic text-zinc-300 bg-black/40 p-3.5 rounded-xl border border-white/5 leading-relaxed">
                                &ldquo;Good community leadership isn't about being loud; it's about staying calm, being fair, and keeping things organized.&rdquo;
                            </p>

                            {/* Bio Paragraphs */}
                            <div className="space-y-3 text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                                {silenceProfile.bioParagraphs.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            {/* Links / Contact Badges */}
                            <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                                <button
                                    onClick={() => copyToClipboard(silenceProfile.discord)}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                                >
                                    <img src="/assets/icons/discord.svg" alt="Discord" className="w-3.5 h-3.5" />
                                    <span>Discord: Silence_ego</span>
                                    {copied && <span className="text-emerald-400 font-bold ml-1">Copied!</span>}
                                </button>

                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                                >
                                    <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                                    <span>Atlantis Labs</span>
                                </Link>

                                <a
                                    href="https://discord.gg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                                >
                                    <BoltIcon className="w-3.5 h-3.5 text-amber-400" />
                                    <span>TSCS</span>
                                </a>
                            </div>
                        </div>

                        {/* Next prompt */}
                        <div
                            onClick={() => scrollToSection(2)}
                            className="flex items-center justify-center gap-1.5 cursor-pointer select-none text-xs text-zinc-500 hover:text-amber-400 transition-colors pt-1"
                        >
                            <span className="uppercase tracking-wider font-semibold text-[11px]">
                                Next: Ventures & Leadership
                            </span>
                            <ArrowDownIcon className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </section>

                {/* SECTION 3: VENTURES & LEADERSHIP (SNAP SCREEN) */}
                <section
                    id="ventures"
                    className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative px-4 sm:px-6 bg-[#0a0e16]"
                >
                    <div className="w-full max-w-4xl mx-auto space-y-6 pt-8 sm:pt-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
                                <BriefcaseIcon className="w-4 h-4" />
                                <span>VENTURES & LEADERSHIP</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                                Organizations & Directorship
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {silenceProfile.ventures.map((venture, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-400/40 transition-all flex flex-col justify-between group shadow-lg"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <h3 className="font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                                                {venture.title}
                                            </h3>
                                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30 text-amber-400 bg-amber-400/10">
                                                {venture.roleBadge}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                            {venture.description}
                                        </p>
                                    </div>

                                    {venture.link ? (
                                        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-amber-400 transition-colors">
                                            <span>Explore</span>
                                            <span>&rarr;</span>
                                        </div>
                                    ) : (
                                        <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-zinc-500">
                                            Core Management
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Next prompt */}
                        <div
                            onClick={() => scrollToSection(3)}
                            className="flex items-center justify-center gap-1.5 cursor-pointer select-none text-xs text-zinc-500 hover:text-amber-400 transition-colors pt-2"
                        >
                            <span className="uppercase tracking-wider font-semibold text-[11px]">
                                Next: Roles & Badges
                            </span>
                            <ArrowDownIcon className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </section>

                {/* SECTION 4: ROLES & BADGES (SNAP SCREEN) */}
                <section
                    id="roles"
                    className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative px-4 sm:px-6 bg-[#080c13]"
                >
                    <div className="w-full max-w-4xl mx-auto space-y-4 pt-10 sm:pt-4">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                            <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
                                    <ShieldCheckIcon className="w-4 h-4" />
                                    <span>ROLES & BADGES</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                                    Privileges & Command Ranks
                                </h2>
                            </div>
                            <div className="text-xs text-zinc-400">
                                Official hierarchy across TSCS & Atlantis Labs
                            </div>
                        </div>

                        {/* Card containing Badges */}
                        <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm space-y-4 shadow-xl">
                            {/* Special Role Spotlight (silence) */}
                            <div className="p-3.5 sm:p-4 rounded-xl border border-amber-400/30 bg-amber-400/5 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                                        <SpeakerXMarkIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm sm:text-base font-bold text-white">silence</h4>
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                                                Special Role
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-400">
                                            Personal signature role across TSCS and partner servers.
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded bg-black/50 border border-white/5">
                                    @silence
                                </span>
                            </div>

                            {/* Badge Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {silenceProfile.roles
                                    .filter((r) => !r.isSpecial)
                                    .map((role, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3 rounded-xl border border-white/5 bg-zinc-900/70 hover:border-amber-400/30 transition-colors"
                                        >
                                            <div className="flex items-center justify-between gap-1 mb-1">
                                                <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-1">
                                                    {role.name === "*" && <StarIcon className="w-3.5 h-3.5 text-amber-400" />}
                                                    {role.name === "Owner" && <BoltIcon className="w-3.5 h-3.5 text-amber-400" />}
                                                    {role.name === "Ownership" && <KeyIcon className="w-3.5 h-3.5 text-amber-400" />}
                                                    {role.name === "Community manager" && <UserGroupIcon className="w-3.5 h-3.5 text-amber-400" />}
                                                    {role.name.includes("Admin") && <ShieldCheckIcon className="w-3.5 h-3.5 text-amber-400" />}
                                                    {role.name.includes("Mod") && <ShieldCheckIcon className="w-3.5 h-3.5 text-amber-400" />}
                                                    <span className="truncate">{role.name}</span>
                                                </span>
                                            </div>
                                            <span className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                                                {role.description}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Next prompt */}
                        <div
                            onClick={() => scrollToSection(4)}
                            className="flex items-center justify-center gap-1.5 cursor-pointer select-none text-xs text-zinc-500 hover:text-amber-400 transition-colors pt-1"
                        >
                            <span className="uppercase tracking-wider font-semibold text-[11px]">
                                Next: Connect & Footer
                            </span>
                            <ArrowDownIcon className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </section>

                {/* SECTION 5: DISCORD & CONNECT HUB + FOOTER (SNAP SCREEN) */}
                <section
                    id="connect"
                    className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative px-4 sm:px-6 bg-black"
                >
                    <div className="w-full max-w-3xl mx-auto space-y-6 pt-10 sm:pt-4">
                        <div className="text-center space-y-1">
                            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                                💬 CONNECT
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                                Get In Touch
                            </h2>
                            <p className="text-xs sm:text-sm text-zinc-400">
                                Contact Silence directly on Discord or explore affiliated projects.
                            </p>
                        </div>

                        {/* Discord Terminal Card */}
                        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm space-y-6 shadow-2xl">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-white/5">
                                <div className="flex items-center gap-4 text-center sm:text-left">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow">
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
                                    className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm"
                                >
                                    <img src="/assets/icons/discord.svg" alt="Discord" className="w-4 h-4" />
                                    <span>{copied ? "Copied Silence_ego!" : "Copy Discord Tag"}</span>
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs text-zinc-400">
                                <Link
                                    to="/"
                                    className="px-3.5 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 transition-colors"
                                >
                                    &larr; Atlantis Labs Main Website
                                </Link>

                                <button
                                    onClick={() => scrollToSection(0)}
                                    className="px-3.5 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 transition-colors"
                                >
                                    &uarr; Back to Top
                                </button>
                            </div>
                        </div>

                        {/* Footer matching istejas.top */}
                        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
                            <div>
                                © 2026 Silence · Built with care.
                            </div>
                            <div className="flex items-center gap-3">
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
                    </div>
                </section>
            </div>

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
