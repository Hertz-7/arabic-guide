import './cart.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Itemimg from './cartimg.png'
import { useDispatch } from "react-redux";
import { removefromcart } from "../../redux/slices/cartSlice.js";
import { toast ,ToastContainer} from 'react-toastify';
function App(props) {
    const dispatch = useDispatch();
    const handleremove = (e) => {
      
      dispatch(removefromcart({name:props.name} ) ) ;
      toast('Item removed from cart');
      <ToastContainer />
    }
  return (
    <>
        <div class="itemcard ">
            <div className='item'>
                <img src={props.image} alt='itemimage' className='itemimg'/>
                <p className='itemname'>{props.name}</p>
            </div>
            <div className='itemaction'>
                <p className='price'>Rs{props.price}</p>
                <a className='remove' onClick={handleremove} >Remove</a>
                
                
            </div>
            <br/>
            
            
        </div>
    </>

  );
}

export default App;




