import './cart.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActionCard from './actionccard.js';
import ItemCard from './itemcard.js';
import {useSelector} from "react-redux";
function App(props) {
    const items = useSelector(state => state);
    console.log(items.cart);
  return (
    <>
    <div class="cart-page">
        <div class="row">
            <div className="cartitems col-7">
                <p className='summary'> Cart </p>
                <div className='cartbreakdown'>

                {
                items.cart.length===0 ? <p className='emptycart'>Your cart is empty</p> :    
                items.cart.map((item) => (
            
                <ItemCard name={item.name} price={item.price} image={item.image2} />
                ))
                }
                </div>
            </div>
            <div class="cartbill col">
                <p className='summary'> Summary </p>
                
                <ActionCard/>
            </div>
        
        </div>
        
    </div>


    </>
  );
}

export default App;




