import sublogo from "../../img/sublogo1.svg";

// Import images for blogs
import blog1 from "../../img/blog/blog1.png";
import blog2 from "../../img/blog/blog1.png";
import blog3 from "../../img/blog/blog1.png";
import blog4 from "../../img/blog/blog1.png";

const Blog = () => {
    return (
        <>
            <div id="blog" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p data-aos-duration="1000" data-aos="fade-left" style={{ marginTop: "50px", fontSize: "1.5em", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}><img src={sublogo} width={20} /> Our Blog</p>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ fontSize: "4em", marginTop: "20px" }}>Our Latest Blog Idea</h1>
                <h1 data-aos-duration="1000" data-aos="fade-left" style={{ alignSelf: "flex-end", fontSize: "4em" }}>UI/UX <span style={{ fontFamily: "var(--font2)", fontStyle: "italic", color: "var(--primary)", textDecoration: "underline" }}>Trends</span></h1>
            </div>

            <div className="blog_cards">
                <div className="card">
                    <div className="img">
                        <img src={blog1} />
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
                        <img src={blog2} />
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
                        <img src={blog3} />
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
                        <img src={blog4} />
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
        </>
    )
}

export default Blog;