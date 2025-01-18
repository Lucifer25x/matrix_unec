import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./css/App.css";
import { ThemeContext } from './context/ThemeContext';
import { CurrencyContext } from './context/CurrencyContext';

function App() {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const [currency, rates, setCurrency] = useContext(CurrencyContext);

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
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
        <Footer />
        <button className="toggle-theme" onClick={toggleTheme}>{theme == "light" ? "dark" : "light"}</button>
        <select className="currency-selector" id="currency" onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="TRY">TRY</option>
            <option value="AZN">AZN</option>
        </select>
        </BrowserRouter>
    )
}

export default App;