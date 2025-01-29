import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Dashboard from "./pages/dashboard/Dashboard"
import AddProduct from "./pages/dashboard/AddProduct"
import EditProduct from "./pages/dashboard/EditProduct"
import Login from "./pages/Login"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/add" element={<AddProduct />} />
                <Route path="/dashboard/edit/:slug" element={<EditProduct />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App