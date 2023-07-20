import './button.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  return (
    <button onClick={props.onClick} type="button" class="arabicbtn"  style={{height: props.height  , width: props.width }}  >{props.name}</button>
 
   
  );
}

export default App;




