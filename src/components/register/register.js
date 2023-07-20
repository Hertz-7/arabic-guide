
import './register.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link ,Navigate} from 'react-router-dom';
function App() {
  return (
    <div className='registerbody'>
        <div className='registerform'>      
            <input type="text" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="First Name"/>
            <input type="text" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Last Name"/>
            <input type="text" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Username"/>  
            <input type="email" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Email"/>      
            <input type="password" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Password"/>
            <input type="password" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Confirm Password"/>
           
            <p className='terms'>By signing up, I agree with the website's <Link className='registernow' to='/terms'>Terms and Conditions</Link></p>

            <button type="button" className="registerbtn" >Register</button>
                   </div>
    </div>
  );
}

export default App;
