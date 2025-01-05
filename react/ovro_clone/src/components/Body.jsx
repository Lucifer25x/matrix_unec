// Import components
import About from "./Sections/About";
import Services from "./Sections/Services";
import Skills from "./Sections/Skills";
import Portfolio from "./Sections/Portfolio";
import Testimonial from "./Sections/Testimonial";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";

// Import images
import sublogo from "../img/sublogo1.svg";
import circle from "../img/circle.png";
import reviews from "../img/reviews.png";
import Footer from "./Sections/Footer";

const Body = () => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> Hi, I’m Alex, UI/UX Designer</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>Designing Intuitive</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ marginLeft: "40px", fontSize: "4em" }}>Experiences <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Inspire</span></h1>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left" style={{ width: "70%", float: "right", marginTop: "20px" }}>Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.</p>

            <div data-aos-duration="1000" data-aos="fade-left" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px", float: "left" }}>
                <img className="circle" src={circle} width={150} />
                <img src={reviews} width={150} />
            </div>
            <a data-aos-duration="1000" data-aos="fade-up" className="big_btn" href="#"><span>Lets Work Together</span></a>

            {/* Sections */}
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}

export default Body;