import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import BackToTop from './components/BackToTop';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.loading').style.opacity = 0;
    }, 1500);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <BrowserRouter>
    {loading && <div className="loading"><div className="circle"></div></div>}
    {!loading && document.body.style.overflow !== 'auto' && (document.body.style.overflow = 'auto')}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App;