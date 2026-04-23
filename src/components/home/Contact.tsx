import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useCopy } from "../../hooks/useCopy";

const Contact: React.FC = () => {
    const { copied, copyToClipboard } = useCopy();
    const email = "admin@atlantislabs.top";

    return (
        <section id="contact" className="py-24">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-14">
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
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="glass-card p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                            </motion.div>
                            <div>
                                <h3 className="text-lg font-bold mb-0.5">Email</h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                                    Drop me a line anytime — I'll reply promptly.
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
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
