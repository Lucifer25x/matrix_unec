import Container from "./Container";
import "../css/Footer.css";

function Footer(){
    return (
        <footer>
            <Container>
                <div className="top">
                    <div className="left">
                        <h3>Join our newsletter for £10 offs</h3>
                        <p>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
                    </div>
                    <div className="right">
                        <input type="email" placeholder="Enter your email address" />
                        <button>Send</button>
                    </div>
                </div>
                <div className="bottom">
                    <p>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;