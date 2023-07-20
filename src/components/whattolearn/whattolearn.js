import './whattolearn.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Guidecard from '../guidecard/guidecard.js';
import Learncard from '../learncard/learncard.js';
import {BsClockHistory} from 'react-icons/bs';
import img1 from './img1.png'
import img2 from './img2.png'
function App() {
    
  return (
    <>
        <div className="bodylearn" >
            <p className='plearn' >Our top pick for you</p>
            <h2 className='taglearn'>What to learn first</h2>
        </div>
        <div className='learncards'>
            <Learncard  image={img2} title='Arabic Master Class' lable="View Courses"  goto='/courses'/>
            <Learncard  image={img1} title='Arabic Master Class Books (PDF)' lable="View Books" goto='/books' />
            
            
        </div>
    </>
  );
}

export default App;




