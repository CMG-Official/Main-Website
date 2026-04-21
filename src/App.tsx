import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Layout>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </AnimatePresence>
    );
}

function AppWrapper() {
    return (
        <ThemeProvider>
            <Router>
                <App />
                <Analytics />
            </Router>
        </ThemeProvider>
    );
}

export default AppWrapper;
