
import './courseinfo.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Pricecard from './addtocartcard';
import Materialcard from './materialcard';
//import Thumbnail from './book-1thumbnail.png'
function App(props) {
  return (
    <>
    <div class="courseinfo">
        <div class="row">
        
        <h1 className='coursename'>{props.cname}</h1>
        </div>
        <div class="row">
            <div className="bookimage col-7">
            <img src={props.thumbnail} className='thumbnail'/>
            </div>
            <div class="col">
            <Pricecard price={props.price} about1={props.about1} about2={props.about2} about3={props.about3}
             about4={props.about4} about5={props.about5}/>
            <Materialcard info1={props.info1} info2={props.info2} info3={props.info3} info4={props.info4}
            info5={props.info5} info6={props.info6}/>
            </div>
        
        </div>
        
    </div>
</>

  );
}

export default App;




