import { Button, Offcanvas } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getCartThunk } from '../slices/cart.slice';
import { useSelector } from 'react-redux';
import '../styles/cart.css'


const Cart = ({ show, handleClose }) => {

   const dispatch = useDispatch()
   const itemsCart = useSelector(state => state.cart)

   useEffect(() => {
      dispatch(getCartThunk())
   }, [])

   const multiply = (num1, num2) => {
      const total = num1 * num2
      return (
         <p>$ { total }</p>
      )
   }
 
   return (

      <Offcanvas show={show} onHide={handleClose} placement='end' scroll={true}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart Shopping</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <ul  className='cart-card'>
               {
                  itemsCart.map(item => (
                     <li key={item.id} className='list-item'>
                        <h6>{item.title}</h6>
                        <p>{item.quantity}</p>
                       { multiply ( item.quantity, item.price ) }
                     </li>
                  ))
               }
            </ul>
         </Offcanvas.Body>
         <Button variant="dark">Check out </Button>
      </Offcanvas>
   );
};

export default Cart;
