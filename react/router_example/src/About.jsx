import img from "./img/about.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="top">
                <h1>ABOUT US</h1>
                <p>Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus. Nunc eu risus suscipit massa dapibus blandit. Vivamus ac commodo eros.</p>
            </div>
            <div className="content">
                <div className="left">
                    <p>Welcome To <span>Fresh Water.</span></p>
                    <p>Proin fringilla vulputate lorem quis congue. Mauris lacinia gravida ultrices. Phasellus consectetur pellentesque. Vestibulum eu ligula cursus nisi ultrices laoreet iaculis sed lum non dolor fermentum, consequat risus non, auctor nisi. Nunc sodales blandit lum auctor nibh varius metus volutpat, et sollicitudin massa ornare. Donec rutrum urna tempor, a euismod massa porttitor. Donec at sapien non orci blandit placerat nec vitae diam dui, facilisis eget risus a, scelerisque molestie sem. Suspendisse convallis, lorem bus feugiat, elit turpis rutrum justo, eget dapibus leo eros quis tellus. Suspendisse varius fermentum varius fermentum.</p>
                </div>
                <div className="right">
                    <img src={img} alt="about" />
                </div>
            </div>
        </div>
    )
}

export default About;