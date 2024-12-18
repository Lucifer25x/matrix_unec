import React from 'react';
import {RiGlobalLine, RiLoginBoxLine, RiMenuLine} from '@remixicon/react';
import Container from "./Container";
import Button from './Button';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Container>
            <div className="logo">Bookapp</div>
            <div className="links">
                <a className="active" href="#">Home <div>+</div></a>
                <a href="#">Services <div>+</div></a>
                <a href="#">Vendors <div>+</div></a>
                <a href="#">Pages <div>+</div></a>
                <a href="#">Blog <div>+</div></a>
                <a href="#">Contact</a>
            </div>
            <div className="right">
                <p><RiGlobalLine size={20}/> Eng</p>
                <Button effect="1"><RiLoginBoxLine size={20}/> Login</Button>
            </div>
            <div className="mobile_bar">
              <RiMenuLine size={20}/>
            </div>
        </Container>
      </nav>
    );
  }
}

export default Navbar;