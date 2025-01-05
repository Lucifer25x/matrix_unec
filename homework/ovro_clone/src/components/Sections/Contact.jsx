import sublogo from "../../img/sublogo1.svg";

const Contact = () => {
    return (
        <>
            <div id="contact" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> Contact Me</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>Have Any Project in</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ alignSelf: "flex-end", fontSize: "4em" }}>Mind, <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Lets Talk</span></h1>
            </div>

            <div className="contact" data-aos-duration="1000" data-aos="zoom-in">
                <h1>Let's Work Together!</h1>
                <div className="flex">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email Adress" />
                </div>
                <div className="flex">
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Subject" />
                </div>
                <input type="text" placeholder="Your Budget (optional)" />
                <textarea placeholder="Message"></textarea>
                <a href="#">SEND</a>
            </div>
        </>
    )
}

export default Contact;