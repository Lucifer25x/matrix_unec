import sublogo from "../../img/sublogo1.svg";

// Import images for skills
import skill1 from "../../img/skills/skill1.svg";
import skill2 from "../../img/skills/skill2.svg";
import skill3 from "../../img/skills/skill3.svg";
import skill4 from "../../img/skills/skill4.svg";
import skill5 from "../../img/skills/skill5.svg";
import skill6 from "../../img/skills/skill6.svg";

const Skills = () => {
    return (
        <>
            <div id="skills" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> My Skill</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>The Tools Behind</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ marginLeft: "40px", fontSize: "4em" }}>Exceptional <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Design</span></h1>
            </div>

            <div className="skills">
                <div data-aos-duration="1000" data-aos="fade-up" className="skill">
                    <img src={skill1} width={80} />
                    <h2>96%</h2>
                    <p>Figma</p>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="skill">
                    <img src={skill2} width={80} />
                    <h2>87%</h2>
                    <p>Photoshop</p>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="skill">
                    <img src={skill3} width={80} />
                    <h2>90%</h2>
                    <p>Illustrator</p>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="skill">
                    <img src={skill4} width={80} />
                    <h2>89%</h2>
                    <p>Sketch</p>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="skill">
                    <img src={skill5} width={80} />
                    <h2>92%</h2>
                    <p>Adobe XD</p>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="skill">
                    <img src={skill6} width={80} />
                    <h2>85%</h2>
                    <p>Wordpress</p>
                </div>
            </div>
        </>
    )
}

export default Skills;