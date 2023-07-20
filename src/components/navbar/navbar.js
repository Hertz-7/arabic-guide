import './navbar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import { BsList,BsCart2 } from "react-icons/bs";
import { Link,useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
function App() {
    const navigate = useNavigate();
    const items = useSelector(state => state)
  return (
   <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/"><img src={logo} alt='logo'/></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <BsList/>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav justify-content-around">
                    <Link class="nav-link" aria-current="page" to="/">Home</Link>
                    <Link class="nav-link" to="/aboutme">About Me</Link>
                    <Link class="nav-link" to="/courses">Courses</Link>
                    <Link class="nav-link" to="/books">Buy Books</Link>
                    <Link class="nav-link" to="/raabta">Raabta</Link>
                    <Link class="nav-link" to="/cart"><BsCart2 /><div className='itemsincart'> {items.cart.length}</div></Link>
                    <button type="button" class="navbtn" onClick={() => navigate('/signin')} >Sign In</button>
                    
                </div>
            </div>
        </div>
    </nav>
  );
}

export default App;




