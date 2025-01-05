import sublogo from "../../img/sublogo1.svg";

// Import images for results
import result1 from "../../img/results/result1.png";
import result2 from "../../img/results/result2.png";
import result3 from "../../img/results/result3.png";
import result4 from "../../img/results/result4.png";

const Portfolio = () => {
    return (
        <>
            <div id="portfolio" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> My Portfolio</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>Innovation Designs</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ alignSelf: "flex-end", fontSize: "4em" }}>Real, <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Results</span></h1>
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

        </>
    )
}

export default Portfolio;