import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import FloatingSidebar from "./components/FloatingSidebar";
import "./css/App.css";
import sublogo from "./img/sublogo1.svg";
import circle from "./img/circle.png";
import reviews from "./img/reviews.png";
import logo1 from "./img/logo1.png";
import { RiArrowUpCircleFill } from "@remixicon/react";

// Import images for skills
import skill1 from "./img/skills/skill1.svg";
import skill2 from "./img/skills/skill2.svg";
import skill3 from "./img/skills/skill3.svg";
import skill4 from "./img/skills/skill4.svg";
import skill5 from "./img/skills/skill5.svg";
import skill6 from "./img/skills/skill6.svg";

// Import images for results
import result1 from "./img/results/result1.png";
import result2 from "./img/results/result2.png";
import result3 from "./img/results/result3.png";
import result4 from "./img/results/result4.png";

// Import images for blogs
import blog1 from "./img/blog/blog1.png";
import blog2 from "./img/blog/blog1.png";
import blog3 from "./img/blog/blog1.png";
import blog4 from "./img/blog/blog1.png";

const App = () => {
  const [scroll, setScroll] = useState(false);
  // const [pos, setPos] = useState([0,0]);

  useEffect(() => {
    Aos.init();
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  // document.onmousemove = (e) => {
  //   setPos([e.clientX, e.clientY]);
  // }

  return (
    <div id="home">
      <div style={!scroll ? {display: "none"} : null} onClick={() => scrollToTop()} className="scroll_top"><RiArrowUpCircleFill size={50}/></div>
      {/* <div className="cursor" style={{left: `${pos[0]}px`, top: `${pos[1]}px`}}></div> */}
      <Navbar />
      <div className="container">
        <div className="left">
          <FloatingSidebar />
          <Profile />
        </div>
        <div className="right">
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> Hi, I’m Alex, UI/UX Designer</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>Designing Intuitive</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{marginLeft: "40px", fontSize: "4em"}}>Experiences <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Inspire</span></h1>
          </div>
          <p data-aos-duration="1000" data-aos="fade-left" style={{width: "70%", float: "right", marginTop: "20px"}}>Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.</p>
          
          <div data-aos-duration="1000" data-aos="fade-left" style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px", float: "left"}}>
            <img className="circle" src={circle} width={150}/>
            <img src={reviews} width={150} />
          </div>
          <a data-aos-duration="1000" data-aos="fade-up" className="big_btn" href="#"><span>Lets Work Together</span></a>


          {/* About */}

          <div id="about" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> About Us</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>Crafting Seamless</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{marginLeft: "40px", fontSize: "4em"}}>User <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Experiences</span></h1>
          </div>

          <div className="cards">
            <div data-aos-duration="1000" data-aos="fade-left" className="card">
              <h1>Alex Carry</h1>
              <p>Hi, I’m Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical skills, I deliver solutions that not only look great but also function seamlessly. </p>
            </div>
            <div className="grid">
              <div data-aos-duration="1000" data-aos="fade-up" className="card">
                <h2>UI/UX Design</h2>
                <p>Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.</p>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up" className="card">
                <h2>User Research & Prototyping</h2>
                <p>Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.</p>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up" className="card">
                <h2>Responsive Web Design</h2>
                <p>Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.</p>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up" className="card">
                <h2>Wireframing & Visual Design</h2>
                <p>Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.</p>
              </div>
            </div>
          </div>


          {/* Services */}

          <div id="services" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> My Services</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>Elevating Brands</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{marginLeft: "40px", fontSize: "4em"}}>Intuitive <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Design</span></h1>
          </div>

          <div className="cards">
            <div style={{marginTop: "20px"}} data-aos-duration="1000" data-aos="fade-up" className="card">
              <h2>UI/UX Design</h2>
              <p>Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.</p>
            </div>
            <div style={{marginTop: "20px"}} data-aos-duration="1000" data-aos="fade-up" className="card">
              <h2>User Research & Prototyping</h2>
              <p>Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</p>
            </div>
            <div style={{marginTop: "20px"}} data-aos-duration="1000" data-aos="fade-up" className="card">
              <h2>Responsive Web Design</h2>
              <p>Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.</p>
            </div>
            <div style={{marginTop: "20px"}} data-aos-duration="1000" data-aos="fade-up" className="card">
              <h2>Wireframing & Visual Design</h2>
              <p>Creating detailed wireframes and visually stunning designs to bring ideas into focus.</p>
            </div>
          </div>


          {/* Skills */}

          <div id="skills" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> My Skill</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>The Tools Behind</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{marginLeft: "40px", fontSize: "4em"}}>Exceptional <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Design</span></h1>
          </div>

          <div className="skills">
            <div data-aos-duration="1000" data-aos="fade-up" className="skill">
              <img src={skill1} width={80}/>
              <h2>96%</h2>
              <p>Figma</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-up" className="skill">
              <img src={skill2} width={80}/>
              <h2>87%</h2>
              <p>Photoshop</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-up" className="skill">
              <img src={skill3} width={80}/>
              <h2>90%</h2>
              <p>Illustrator</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-up" className="skill">
              <img src={skill4} width={80}/>
              <h2>89%</h2>
              <p>Sketch</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-up" className="skill">
              <img src={skill5} width={80}/>
              <h2>92%</h2>
              <p>Adobe XD</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-up" className="skill">
              <img src={skill6} width={80}/>
              <h2>85%</h2>
              <p>Wordpress</p>
            </div>
          </div>


          {/* Portfolio */}

          <div id="portfolio" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> My Portfolio</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>Innovation Designs</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{alignSelf: "flex-end", fontSize: "4em"}}>Real, <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Results</span></h1>
          </div>

          <div className="portfolio_card">
            <div className="img">
              <img src={result1} />
            </div>
            <h1>Reelup - E commercer Video Platform</h1>
          </div>

          <div className="portfolio_card_group">
            <div className="portfolio_card">
              <div className="img">
                <img src={result2} />
              </div>
              <h1>Academy - Sales Career</h1>
            </div>

            <div className="portfolio_card">
              <div className="img">
                <img src={result4} />
              </div>
              <h1>Leadlogic- Dashboard Design</h1>
            </div>
          </div>

          <div className="portfolio_card">
            <div className="img">
              <img src={result3} />
            </div>
            <h1>Reelup - E commercer Video Platform</h1>
          </div>


          {/* Testimonial */}

          <div id="testimonial" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> Testimonial</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>What Client Says </h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{alignSelf: "flex-end", fontSize: "4em"}}>About <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>My Work</span></h1>
          </div>

          <div className="testimonial">
            <div className="card">
              <p>"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."</p>
              <h2>David Elson</h2>
              <p>Ezhe Source</p>
            </div>
            <div className="card">
              <p>"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."</p>
              <h2>Chris Glasser</h2>
              <p>Ezhe Source</p>
            </div>
            <div className="card">
              <p>"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."</p>
              <h2>Rodger Struck</h2>
              <p>Ezhe Source</p>
            </div>
            <div className="card">
              <p>"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."</p>
              <h2>Mary Freund</h2>
              <p>Ezhe Source</p>
            </div>
          </div>


          {/* Blog */}

          <div id="blog" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> Our Blog</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>Our Latest Blog Idea</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{alignSelf: "flex-end", fontSize: "4em"}}>UI/UX <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Trends</span></h1>
          </div>

          <div className="blog_cards">
            <div className="card">
              <div className="img">
                <img src={blog1}/>
              </div>
              <div className="flex">
                <p>UI/UX</p>
                <p>3 min read</p>
              </div>
              <h3>Behind the Pixels: My Favorite Design Projects</h3>
              <div className="flex">
                <p>Alex Carry</p>
                <p>Oct 26, 2024 </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={blog2}/>
              </div>
              <div className="flex">
                <p>UI/UX</p>
                <p>3 min read</p>
              </div>
              <h3>Crafting Seamless Experiences: My UI/UX Design Philosophy</h3>
              <div className="flex">
                <p>Alex Carry</p>
                <p>Oct 26, 2024 </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={blog3}/>
              </div>
              <div className="flex">
                <p>UI/UX</p>
                <p>3 min read</p>
              </div>
              <h3>Staying Ahead: Trends Shaping UI/UX in 2024</h3>
              <div className="flex">
                <p>Alex Carry</p>
                <p>Oct 26, 2024 </p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={blog4}/>
              </div>
              <div className="flex">
                <p>UI/UX</p>
                <p>3 min read</p>
              </div>
              <h3>From Concept to Reality: My Design Process</h3>
              <div className="flex">
                <p>Alex Carry</p>
                <p>Oct 26, 2024 </p>
              </div>
            </div>
          </div>


          {/* Contact */}

          <div id="contact" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <p data-aos-duration="1000" data-aos="fade-left" style={{marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500"}}><img src={sublogo} width={20}/> Contact Me</p>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{fontSize: "4em", marginTop: "20px"}}>Have Any Project in</h1>
            <h1 data-aos-duration="1000" data-aos="fade-left" style={{alignSelf: "flex-end", fontSize: "4em"}}>Mind, <span style={{fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline"}}>Lets Talk</span></h1>
          </div>

          <div className="contact" data-aos-duration="1000" data-aos="zoom-in">
            <h1>Let's Work Together!</h1>
            <div className="flex">
              <input type="text" placeholder="Full Name"/>
              <input type="text" placeholder="Email Adress"/>
            </div>
            <div className="flex">
              <input type="text" placeholder="Phone Number"/>
              <input type="text" placeholder="Subject"/>
            </div>
            <input type="text" placeholder="Your Budget (optional)"/>
            <textarea placeholder="Message"></textarea>
            <a href="#">SEND</a>
          </div>

          <div className="footer">
            <img src={logo1} width={150}/>
            <p>© 2024 OVRO. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;