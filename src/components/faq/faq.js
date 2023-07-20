import './faq.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import aq from './aq.png'
import { useNavigate } from 'react-router-dom';
function App() {
    const navigate = useNavigate();
  return (
    <>
        <div className="bodyfaq" >
            <p className='pfaq' >Frequently Asked</p>
            <h2 className='tagfaq'>FAQ's</h2>
        </div>
        <div id="carouselExample" class="faq carousel slide"  >
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img src={aq} class="cimage" alt="..."/>
                    <img src={aq} class="cimage" alt="..."/>
                    <img src={aq} class="cimage" alt="..."/>
                </div>
                <div class="carousel-item " >
                    <img src={aq} class=" cimage" alt="..."/>
                    <img src={aq} class=" cimage" alt="..."/>
                    <img src={aq} class="cimage" alt="..."/>
                </div>
                <div class="carousel-item" >
                    <img src={aq} class=" cimage" alt="..."/>
                    <img src={aq} class="cimage" alt="..."/>
                    <img src={aq} class=" cimage" alt="..."/>
                    
                </div>
            </div>
            <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button  class="faqnext carousel-control-next"  type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
        <div className='btndiv'> 
        <a href='https://www.instagram.com/muzammilahmadb/'><button type="button" class="followbtn"  >Follow Us</button></a> 
        </div>
    </>
  );
}

export default App;




