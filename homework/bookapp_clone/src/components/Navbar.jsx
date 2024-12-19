import React from 'react';
import {RiGlobalLine, RiLoginBoxLine, RiMenuLine, RiCloseLine} from '@remixicon/react';
import Container from "./Container";
import Button from './Button';
import Sidebar from './Sidebar';

class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      sidebar: false
    }
  }

  changeSidebar = () => {
    this.setState({sidebar: !this.state.sidebar});
    document.body.style.overflowY = !this.state.sidebar ? "hidden" : "auto"; 
  }

  render() {
    return (
      <div>
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
                <Button effect="1"><span><RiLoginBoxLine size={20}/> Login</span></Button>
            </div>
            <div className="mobile_bar" onClick={() => this.changeSidebar()}>
              {this.state.sidebar ? <RiCloseLine size={20}/> : <RiMenuLine size={20}/>}
            </div>
        </Container>
      </nav>
      <Sidebar active={this.state.sidebar}/>
      </div>
    );
  }
}

export default Navbar;