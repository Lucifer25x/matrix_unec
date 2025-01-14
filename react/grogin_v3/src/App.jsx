import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./css/App.css";
import { ThemeContext } from './context/ThemeContext';

function App() {
    const [theme, toggleTheme] = useContext(ThemeContext);

    useEffect(() => {
        document.body.classList.add(theme);
        document.body.classList.remove(theme === "light" ? "dark" : "light");
    });

    return (
        <BrowserRouter>
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
        <Footer />
        <button className="toggle-theme" onClick={toggleTheme}>{theme == "light" ? "dark" : "light"}</button>
        </BrowserRouter>
    )
}

export default App;