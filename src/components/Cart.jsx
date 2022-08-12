import { Button, Offcanvas } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getCartThunk } from '../slices/cart.slice';

const Cart = ({show, handleClose}) => {

   const dispatch = useDispatch ()

   useEffect(()=> {
      dispatch(getCartThunk())
   },[])

   return (

      <Offcanvas show={show} onHide={handleClose} placement='end' scroll={true}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart Shopping</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
         </Offcanvas.Body>
         <Button variant="dark">Check out </Button>
      </Offcanvas>
   );
};

export default Cart;
