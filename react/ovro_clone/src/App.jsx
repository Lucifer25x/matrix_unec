// Import
import { useEffect, useState } from "react";
import { RiArrowUpCircleFill } from "@remixicon/react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./css/App.css";

// Components
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import FloatingSidebar from "./components/FloatingSidebar";
import Body from "./components/Body";

// App component
const App = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    Aos.init(); // Initialize Aos
  });

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Remove active class from all links in the floating sidebar
  const removeActive = () => {
    const links = document.querySelectorAll(".floating_sidebar a");
    links.forEach(link => {
      link.classList.remove("active");
    });
  }

  window.onscroll = () => {
    // Show the scroll top button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    // Highlight the active link in the floating sidebar
    if (document.documentElement.scrollTop > 340 && document.documentElement.scrollTop < 1200) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#about']").classList.add("active");
    } else if (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 2100) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#services']").classList.add("active");
    } else if (document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 2900) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#skills']").classList.add("active");
    } else if (document.documentElement.scrollTop > 2900 && document.documentElement.scrollTop < 4300) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#portfolio']").classList.add("active");
    } else if (document.documentElement.scrollTop > 4300 && document.documentElement.scrollTop < 5000) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#testimonial']").classList.add("active");
    } else if (document.documentElement.scrollTop > 5000 && document.documentElement.scrollTop < 6200) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#blog']").classList.add("active");
    } else if (document.documentElement.scrollTop > 6200) {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#contact']").classList.add("active");
    } else {
      removeActive();
      document.querySelector(".floating_sidebar a[href='#home']").classList.add("active");
    }
  }

  return (
    <div id="home">
      {/* Scroll to top button */}
      <div style={!scroll ? {display: "none"} : null} onClick={() => scrollToTop()} className="scroll_top"><RiArrowUpCircleFill size={50}/></div>

      {/* Navbar */}
      <Navbar />

      {/* Main part */}
      <div className="container">
        <div className="left">
          <FloatingSidebar />
          <Profile />
        </div>
        <div className="right">
          <Body />
        </div>
      </div>
    </div>
  )
}

export default App;