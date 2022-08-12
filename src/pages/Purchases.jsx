import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getPurchasesThunk } from '../slices/purchases.slice';
import { useSelector } from 'react-redux';

const Purchases = () => {

    const dispatch = useDispatch ()
    const purchases = useSelector ( state => state.purchases )

    useEffect (() => {
        dispatch(getPurchasesThunk())
    },[])

    const date = (purchaseDate) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        const date = new Date( purchaseDate ).toLocaleDateString('en-US', options)
        return (
            <p>{date}</p>
        )
        
    }

    return (
        <div>
            <h1>My purchases</h1>
            {
                purchases.map( purchase => (
                    <li key={purchase.id}>
                        { date ( purchase.updatedAt ) }
                        {
                            purchase.cart.products.map ( purchaseProduct => (
                                <div key={purchaseProduct.id}>
                                    <h4>{ purchaseProduct.title }</h4>
                                    <h6>{ purchaseProduct.quantity }</h6>
                                    <h5>${ purchaseProduct.price }</h5>
                                </div>
                                
                            ) )
                        }
                    </li>
                    
                ) )
            }
        </div>
    );
};

export default Purchases;