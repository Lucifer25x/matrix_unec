import logo from "./img/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="top">
                <div className="left">
                    <img src={logo} width={100} />
                    <p>Donec vel ligula ornare, finibus ex at, vive risus. Aenean velit ex, finibus elementum eu, dignissim varius augue. </p>
                    <p>www.fresh@water.com</p>
                </div>
                <div className="right">
                    <div>
                        <h3>Information</h3>
                        <div>
                            <a href="#">Contact Us</a>
                            <a href="#">About Us</a>
                            <a href="#">Delivery Information</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                    <div>
                        <h3>Our Services</h3>
                        <div>
                            <a href="#">My Account</a>
                            <a href="#">Order History</a>
                            <a href="#">Wishlist</a>
                            <a href="#">Newsletter</a>
                            <a href="#">Returns</a>
                        </div>
                    </div>
                    <div className="news">
                        <h3>Recent News</h3>
                        <div>
                            <p>Nullam condimenum varius ipsum.</p>
                            <span>15 Aug 2018</span>
                            <p>Nullam condimenum varius ipsum.</p>
                            <span>15 Aug 2018</span>
                        </div>
                    </div>
                    <div>
                        <h3>Get In Touch</h3>
                        <div>
                            <p>45 Grand Central Terminal, New York.</p>
                            <p>+00123654789</p>
                            <p>freshwater@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                © All Rights Reserved <span>Fresh Water</span> 2018.
            </div>
        </footer>
    )
}

export default Footer;