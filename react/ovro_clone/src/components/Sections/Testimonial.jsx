import sublogo from "../../img/sublogo1.svg";

const Testimonial = () => {
    return (
        <>
            <div id="testimonial" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> Testimonial</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>What Client Says </h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ alignSelf: "flex-end", fontSize: "4em" }}>About <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>My Work</span></h1>
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
        </>
    )
}

export default Testimonial;