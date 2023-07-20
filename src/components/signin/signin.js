
import './signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link ,Navigate} from 'react-router-dom';
function App() {
  return (
    <div className='signinbody'>
        <div className='signinform'>  
            <h5 className='welcomeheading'> Hi, Welcome back! </h5>       
            <input type="text" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Email or Username"/>      
            <input type="password" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Password"/>
            
            <div className="checkboxdiv form-check">
                <div>
                <input className="checkbox form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                        keep me signed in
                </label>
                </div>
                <Link className='forgotpassword' to='/forgot'> forgot? </Link>
            </div>
            
            <button type="button" className="signinbtn" >Sign In</button>
            <p>Do you have an account? <Link className='registernow' to='/register'>Register Now</Link></p>
        </div>
    </div>
  );
}

export default App;
