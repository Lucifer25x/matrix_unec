import sublogo from "../../img/sublogo1.svg";

const Services = () => {
    return (
        <>
            <div id="services" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> My Services</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>Elevating Brands</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ marginLeft: "40px", fontSize: "4em" }}>Intuitive <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Design</span></h1>
            </div>

            <div className="cards">
                <div style={{ marginTop: "20px" }} data-aos-duration="1000" data-aos="fade-up" className="card">
                    <h2>UI/UX Design</h2>
                    <p>Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.</p>
                </div>
                <div style={{ marginTop: "20px" }} data-aos-duration="1000" data-aos="fade-up" className="card">
                    <h2>User Research & Prototyping</h2>
                    <p>Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</p>
                </div>
                <div style={{ marginTop: "20px" }} data-aos-duration="1000" data-aos="fade-up" className="card">
                    <h2>Responsive Web Design</h2>
                    <p>Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.</p>
                </div>
                <div style={{ marginTop: "20px" }} data-aos-duration="1000" data-aos="fade-up" className="card">
                    <h2>Wireframing & Visual Design</h2>
                    <p>Creating detailed wireframes and visually stunning designs to bring ideas into focus.</p>
                </div>
            </div>
        </>
    )
}

export default Services;