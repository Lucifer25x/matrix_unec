// Essential Imports
import React from "react"
import './css/style.css';

// Import Components
import Header from "./components/Header"
import Footer from "./components/Footer";
import Container from "./components/Container";
import ImageSlider from "./components/ImageSlider";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Container>
          <ImageSlider />
          <br />
          <Body />
          <Reviews />
        </Container>
        <Footer />
      </>
    )
  }
}

export default App;