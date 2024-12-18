import React from "react";
// import Navbar from "./Navbar";

import Container from "./Container";

class Header extends React.Component {
  render() {
    return (
      <div className="service_details">
          <Container>
              <h1>Service Details</h1>
              <p><a href="#">Home</a> / Service Details</p>
          </Container>
      </div>
    );
  }
}

export default Header;