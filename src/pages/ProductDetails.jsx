import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../slices/products.slice';
import { useDispatch } from 'react-redux/es/exports';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {

   const products = useSelector(state => state.products)
   const [productDetail, setProductDetail] = useState({})
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [suggestProducts, setSuggestProducts] = useState([])
   const [quanity, setquantity] = useState(1)

   const { id } = useParams()

   useEffect(() => {
      const productFind = products.find(product => product.id === Number(id))
      setProductDetail(productFind)

      const listOfSuggestProducts = products.filter(product => product.category.id === productFind.category.id)
      setSuggestProducts(listOfSuggestProducts)
   }, [products, id])

   console.log(suggestProducts);
    
   useEffect(() => {
      dispatch(getProductsThunk())
   }, [])

   return (
      <div>
         <img src={productDetail?.productImgs?.[2]} />
         <div>
            <h3>{productDetail?.title}</h3>
            <p>{productDetail?.description}</p>
            <h6>Price</h6>
            <h4>${productDetail?.price}</h4>
            <h6>Quantity</h6>
            <input type="number" value={ quanity } onChange={ e => setquantity(e.target.value) } /> <br/>
            <Button variant="success">
               Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </Button>{' '}
         </div>
         <ul>
            {
               suggestProducts.map(product => (
                  <li key={product.id} onClick={ () => navigate (`/product/${product.id}`) }>
                     <img src={product.productImgs[2]} />
                  </li>
               ))
            }
         </ul>

      </div>
   );
};

export default ProductDetails;