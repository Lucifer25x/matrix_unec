import React from "react";
import Container from "./components/Container";
import Cards from "./components/Cards";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Cards />
      </Container>
    )
  }
}

export default App;