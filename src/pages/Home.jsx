import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { getProductsThunk, filterTitleThunk, filterCategoryThunk } from '../slices/products.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form, ListGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {

   const dispatch = useDispatch()
   const products = useSelector(state => state.products)
   const navigate = useNavigate()
   const [searchValue, setSearchValue] = useState("")
   const [categories, setCategories] = useState([])

   useEffect(() => {
      dispatch(getProductsThunk())

      axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
         .then(res => setCategories(res.data.data.categories))
   }, [])

   const filterProducts = () => {
      dispatch(filterTitleThunk(searchValue))
   }

   

   return (
      <div className='home'>
         <Row>
            <div>
               <p>Filter by Category</p>
            </div>
            <Col lg={3}>
               <ListGroup>
                  {
                     categories.map(category => (
                        <ListGroup.Item key={category.id} onClick={ () => dispatch(filterCategoryThunk(category.id)) } className="category-list">{category.name}</ListGroup.Item>
                     ))
                  }
               </ListGroup> 
            </Col>

            <Col>
               <InputGroup className="mb-3">
                  <Form.Control
                     placeholder="Recipient's username"
                     aria-label="Recipient's username"
                     aria-describedby="basic-addon2"
                     onChange={e => setSearchValue(e.target.value)}
                     value={searchValue} />
                  <Button variant="outline-secondary" onClick={() => filterProducts()}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
               </InputGroup>



               <div className='product-card-list'>
                  {
                     products.map(product => (
                        <div className='product-card' key={product.id}>
                           <div>
                              <img src={product.productImgs?.[0]} onClick={() => navigate(`/product/${product.id}`)} />
                           </div>
                           <h3>{product.title}</h3>
                           <p>Price</p>
                           <h5>${product.price}</h5>
                           <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                     ))
                  }
               </div>
            </Col>

         </Row>
      </div>
   );
};

export default Home;