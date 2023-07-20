import './homebody.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Linearrow from './line-arrow.png';
function App() {
  return (
        <div className="bodytext" >
            <p className='title'>The Arabic Guide</p>
            <p className='tag'>WATCH-LEARN-INSPIRE</p>
            <img className='arrow' src={Linearrow}></img>
            <p className='p1'>وان ليس للانسان الا ما سعی</p>
        </div>

  );
}

export default App;




