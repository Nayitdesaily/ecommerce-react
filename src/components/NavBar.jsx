import React, { useState } from 'react';
import { Navbar, Button, Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';


const NavBar = () => {

   const navigate = useNavigate()

   const logOut = () => {
      localStorage.setItem('token', '')
      navigate('./login')
   }

   const [show, setShow] = useState(false);
   const handleClose = () => {
      setShow(false)
   }

   const handleShow = () => {
      const token = localStorage.getItem('token')
      if (token) {
         setShow(true)
      } else {
         navigate('/login')
      }
   }



   return (
      <>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">Iphone Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#/login"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                  <Nav.Link href="#/purchases"><FontAwesomeIcon icon={faStore} /></Nav.Link>
                  <Nav.Link ><FontAwesomeIcon icon={faCartShopping} onClick={ handleShow }/></Nav.Link>
                  <Nav.Link  ><Button variant="light" onClick={logOut} >Log out</Button></Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         <Cart show={ show } handleClose={ handleClose }/>
      </>
   );
};

export default NavBar;