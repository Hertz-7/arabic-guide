import './guidecard.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  return (
        <div class="card-body2 ">
            <a href="#" class="button">{props.icon}</a>
            <p class="card-title">{props.title}</p>
        </div>


  );
}

export default App;




