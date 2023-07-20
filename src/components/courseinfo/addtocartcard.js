
import './courseinfo.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BsGraphUp,BsPeople,BsClock,BsArrowClockwise,BsAward} from 'react-icons/bs';
import Button from '../button/button';
function App(props) {
  return (
    <>
  
        <div class="card3">
            <div class="card-body3">
                <div className='cardhead'>
                    <br></br>
                    <span class="h2">{props.price}</span>
                    <br/><br/> 
                    <Button class="addcardbtn" name="Add to Cart" width="80%" height="30%" /><br/>
                </div>
                <ul className='features'>
                <br/><li> <BsGraphUp/> {props.about1}</li><br/>
                <li> <BsPeople/> {props.about2}</li><br/>
                <li> <BsClock/>  {props.about3}</li><br/>
                <li> <BsArrowClockwise/> {props.about4}</li><br/>
                <li> <BsAward/>  {props.about5}</li><br/>
                
                </ul>
            </div>
        </div>
 
</>

  );
}

export default App;




