import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./css/App.css";

function App() {
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
        </BrowserRouter>
    )
}

export default App;