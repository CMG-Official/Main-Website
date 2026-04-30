import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useCopy } from "../../hooks/useCopy";

const Contact: React.FC = () => {
    const { copied, copyToClipboard } = useCopy();
    const email = "admin@atlantislabs.top";

    return (
        <section className="py-24 sm:py-28">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-shell"
            >
                <div className="mb-14 text-center">
                    <motion.div
                        className="inline-flex items-center gap-2 glass-pill mb-5 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary" />
                        Contact
                    </motion.div>
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h2>
                    <motion.p
                        className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Have a product idea, redesign, or custom build in mind? Reach out and we can shape it into a
                        polished launch-ready experience.
                    </motion.p>
                </div>

                <motion.div
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="glass-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <motion.div
                                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl glass-button"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                </motion.div>
                                <div>
                                    <h3 className="mb-0.5 text-lg font-bold">Start a conversation</h3>
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        Share the idea, the vibe, and the timeline. We can take it from there.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <code className="glass-pill px-4 py-2.5 flex-grow text-sm truncate">{email}</code>
                                <motion.button
                                    className={`glass-button p-2.5 flex-shrink-0 flex items-center justify-center transition-all ${
                                        copied ? "border-green-400/40 bg-green-400/10" : ""
                                    }`}
                                    onClick={() => copyToClipboard(email)}
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.94 }}
                                    title="Copy email"
                                >
                                    {copied ? (
                                        <CheckIcon className="w-5 h-5 text-green-400" />
                                    ) : (
                                        <ClipboardIcon className="w-5 h-5" />
                                    )}
                                </motion.button>
                            </div>

                            {copied && (
                                <motion.p
                                    className="text-green-500 text-xs mt-2 text-right font-medium"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Copied to clipboard!
                                </motion.p>
                            )}
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 text-left">
                            <div className="mb-2 text-sm uppercase tracking-[0.24em] text-primary">
                                What we can build
                            </div>
                            <p className="text-sm leading-7 text-text-secondary-light dark:text-text-secondary-dark">
                                Landing pages, product marketing sites, internal dashboards, client portals, desktop
                                tools, and interface refreshes with a more premium feel.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
