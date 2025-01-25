import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App