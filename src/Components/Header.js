import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='position-sticky top-0 start-0'>
        <Container>
          <Navbar.Brand className='fw-bold' href="/home">REACT_PROJECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"> 
              <Nav.Link className=' text-white fw-bold' href="/">Home</Nav.Link>
              <Nav.Link className=' text-white fw-bold' href="/shop">Shop</Nav.Link>
              <Nav.Link className=' text-white fw-bold' href="/about">About</Nav.Link>
              <Nav.Link className=' text-white fw-bold' href="/login">LogIn</Nav.Link>
            </Nav>
            <Button variant="light"><Nav.Link className=' text-black fw-bold' href="/signup">Sign Up</Nav.Link></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;