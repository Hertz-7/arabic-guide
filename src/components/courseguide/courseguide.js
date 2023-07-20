import './courseguide.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Guidecard from '../guidecard/guidecard.js';

import {BsClockHistory} from 'react-icons/bs';
function App() {
  return (
    <>  <div className="courseguidebody"  >
            <div className="body1" >
                <p className='p2' >Features Of</p>
                <h2 className='tag1'>The Arabic Guide Course</h2>
            </div>
            <div className='guidecards'>
                <Guidecard icon={<BsClockHistory/>} title='35+ hours on demand lectures of book 1'/>
                <Guidecard icon={<BsClockHistory/>} title='35+ hours on demand lectures of book 1'/>
                
                <Guidecard icon={<BsClockHistory/>} title='35+ hours on demand lectures of book 1'/>
                
                <Guidecard icon={<BsClockHistory/>} title='35+ hours on demand lectures of book 1'/>
            </div>
        </div>
    </>
  );
}

export default App;




