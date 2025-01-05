import sublogo from "../../img/sublogo1.svg";

const About = () => {
    return (
        <>
            <div id="about" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> About Us</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>Crafting Seamless</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ marginLeft: "40px", fontSize: "4em" }}>User <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Experiences</span></h1>
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
        </>
    )
}

export default About;