import { motion } from "framer-motion";
import { LayoutProps } from "../../types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
