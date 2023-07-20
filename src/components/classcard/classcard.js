import './classcard.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  return (
        <div class="card-body1 ">
            <a href="#" class="button">{props.icon}</a>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.txt}</p>   
        </div>


  );
}

export default App;




