
import './forgot.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../button/button'
import { Link ,Navigate} from 'react-router-dom';
function App() {
  return (
    <div className='forgetbody'>
        <div className='forgetform'>  
            <p className='resettext'> Lost your password? Please enter your username or email address. You will receive a link to create a new password via email </p>       
            <input type="text" className="infield form-control mb-3" id="exampleFormControlInput1" placeholder="Email or Username"/>      
            
            <Button type="button" className="resetbtn" name="Reset Password" width="60%" height="15%" />
        </div>
    </div>
  );
}

export default App;
