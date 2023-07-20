
import './courseinfo.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BsGraphUp,BsPeople,BsClock,BsArrowClockwise,BsAward} from 'react-icons/bs';
function App(props) {
  return (
    <>
  
        <div class="card4">
            <div class="card-body4">
                
                <span class="h2">Material Includes</span>
                
                <ul className='about'>
                <br/><li> {props.info1}</li><br/>
                <li> {props.info2}</li><br/>
                <li> {props.info3}</li><br/>
                <li>{props.info4}</li><br/>
                <li>{props.info5}</li><br/>
                <li>{props.info6}</li><br/>
                </ul>
            </div>
        </div>
 
</>

  );
}

export default App;




