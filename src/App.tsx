import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Silence from "./pages/Silence";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route path="/silence" element={<Silence />} />
            </Routes>
        </AnimatePresence>
    );
}

function AppWrapper() {
    return (
        <ThemeProvider>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    );
}

export default AppWrapper;
