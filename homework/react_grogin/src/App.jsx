import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Container from "./components/Container";
import "./css/App.css";

function App(){
    return (
        <>
            <Container>
                <Navbar />
                <Body />
            </Container>
            <Footer />
        </>
    )
}

export default App;