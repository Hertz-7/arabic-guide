import './cart.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useSelector} from "react-redux";
function App(props) {
    const items = useSelector(state => state);
    
    var total=0;
    items.cart.map((item) => (
        total=total+item.price
        ))
  return (
        <div class="actioncard ">
            <div className='total'>
                <p className='subtotalheading'>Subtotal</p>
                <div className='subtotalbreakdown'>
                {items.cart.map((item) => (
                    <p className='subtotalnum'>{item.price}</p>
                    ))}
                    
                    </div>
            </div>
            <hr></hr>
            <div className='total'>
                <p className='totalheading'>Total</p>
                
                <p className='totalnum'>{total}</p>
            </div>
            <button className='checkout'>Proceed to Checkout</button>
            <br/>
            <hr></hr>
            <div className='coupondiv'>
                <input type="text" className="coupon form-control mb-3" id="exampleFormControlInput1" placeholder="Coupon Code"/>      
                <button className='apply'>Apply</button>
            </div>
            
        </div>


  );
}

export default App;




