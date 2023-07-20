import './commentcard.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  return (
  <>    <div className='completecard'>
            <div className="card-icon ">
                <a href="#"  ><img className="iconimg" src={props.icon}/></a>
            </div>
            <div className="card-comment ">
                <p className='cmt'>I'm very happy to start this course. And yes there is no Arabic institute in our area.
                    I've always wanted to learn Arabic language in order to understand deeply the Quran & recitations we do.
                    Jazakallah o khair.</p>
                <p className='name'>Zarghuna Mubarik</p>
                <p className='ocupation'> Student</p>
            </div>
        </div>
 </>

  );
}

export default App;