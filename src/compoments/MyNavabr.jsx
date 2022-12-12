import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavabr() {
  // function openInNewTab(url) {
  //   var win = window.open(url, '_blank');
  //   win.focus();
  // }
  return (
    <Navbar className='navBar' collapseOnSelect={true} sticky="top" fixed='top' id="navbar sticky" bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Text className='white' href="#home">
            DiceProject
          {/* <img onClick={()=>openInNewTab((" https://wa.me/972526810742?text=היי%20נאור,%20אני%20מעוניין%20להתחיל%20בתהליך!%20"))} className='iconNavWts hoverMouse' src={whatsappLogo} alt="" /> */}
            {/* <img onClick={()=>openInNewTab('https://www.instagram.com/naor__mfitness/')} className='iconNav hoverMouse' src={igIcon} alt=""/>*/}
            </Navbar.Text> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=' white smallFont' href="#about">About Us</Nav.Link>
            <Nav.Link className=' white smallFont' href="#shop">Shop</Nav.Link>
            <Nav.Link className=' white smallFont' href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}




