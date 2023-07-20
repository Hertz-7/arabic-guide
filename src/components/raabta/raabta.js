
import './raabta.css';
import 'bootstrap/dist/css/bootstrap.css';
import Overlay from '../background/overlay';
import Background from '../background/bgimg';
import Backimg from './banner.jpg'

function App() {
  return (
    <div className="App">
      
        <Background bg={Backimg}/>
        <Overlay heading="Raabta"/>  
        <div className='raabtabody'>
            <div className='text'>   
                <p className='msgtext'>Send a Message</p>
                <p className='msgtag'>We Are Always Ready to Hear From You</p>
                         </div>
            <div className='form'>    
                
                   <input type="text" class="form-control mb-3 w-45" id="exampleFormControlInput1" placeholder="Your Name"/>
                   <input type="number" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Phone Number"/>
                
                
                    <input type="email" class="form-control mb-3 w-45" id="exampleFormControlInput1" placeholder="name@example.com"/>
                
                
                    <input type="text" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Subject"/>
                
                
                    <textarea className="emailbody"class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder='Write a Message'></textarea>
                    <button type="button" class="submitbtn" >Submit</button>
            </div>
        </div>

    </div>
  );
}

export default App;
