import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/User";

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/:userId" element={<User />} />
            </Routes>
        </Router>
    )
}

export default Index;