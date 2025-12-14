import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useCopy } from "../../hooks/useCopy";

const Contact: React.FC = () => {
    const { copied, copyToClipboard } = useCopy();

    const email = "admin@atlantislabs.top";

    return (
        <section id="contact" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <ChatBubbleLeftRightIcon className="w-8 h-8 inline-block mr-4" />
                        Get in Touch
                    </motion.h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>

                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-8 rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 glass-pill flex items-center justify-center">
                                <EnvelopeIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Email</h3>
                                <p className="text-text-secondary">Drop me a line anytime!</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <code className="glass-pill px-4 py-2 flex-grow">{email}</code>
                            <motion.button
                                className="glass-button p-2"
                                onClick={() => copyToClipboard(email)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {copied ? (
                                    <CheckIcon className="w-5 h-5 text-green-400" />
                                ) : (
                                    <ClipboardIcon className="w-5 h-5" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
