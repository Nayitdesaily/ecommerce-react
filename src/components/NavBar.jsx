import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand href="#home">Iphone Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#/"><FontAwesomeIcon icon={faHouse} /></Nav.Link>
                  <Nav.Link href="#/product/1"><FontAwesomeIcon icon={faStore} /></Nav.Link>
                  <Nav.Link href="#/purchases"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavBar;