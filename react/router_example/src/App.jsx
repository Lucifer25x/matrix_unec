import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import BackToTop from './BackToTop';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.loading').style.opacity = 0;
    }, 2000);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
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