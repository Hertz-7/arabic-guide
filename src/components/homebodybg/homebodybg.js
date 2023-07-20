import './homebodybg.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import sample from './sample.mp4';
function App() {
  return (
        <div class="bodyvid">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
        </div>

  );
}

export default App;




