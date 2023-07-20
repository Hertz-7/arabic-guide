import './footer.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import {BsYoutube,BsInstagram,BsFacebook,BsWhatsapp,BsFillEnvelopeAtFill,BsPinMapFill} from 'react-icons/bs';
function App() {
  return (
    <>
        <div className="footer" >
            <div className='row1'>
                <img  src={logo} className='logo' alt='logo'></img>
                <h4>Follow Us</h4>
                <a href=' '><BsFacebook color="#fff"/></a>
                <a href=' '><BsInstagram color="#fff"/></a>
                <a href=' '><BsYoutube color="#fff"/></a>
            </div>
            <div className='row2'>
                <h3>About</h3>
                <p>This website is designed to help people who find difficulty in learning Arabic language / grammar, though they really want to learn Arabic language and want to understand the book of Allah</p>
            </div>
            <div className='row3'>
                <h3>Quick Links</h3>
                <a href=' ' className='links'>Books</a>
                <a href=' ' className='links'>Terms & Conditions</a>
                <a href=' ' className='links'>Privacy Policy</a>
                <a href=' ' className='links'>Refund Polic</a>
            </div>
            <div className='row4'>
                <h3>Contact Us</h3>
                <p><BsWhatsapp/>   +92 333 1234567</p>
                <p><BsFillEnvelopeAtFill/>   Info@thearabicguide.com</p>
                <p><BsPinMapFill/>   75-B , Street 15, G-9/2, Islamabad.</p>
            </div>
        </div>
        <div className='trademark'>
            <p>© 2021 The Arabic Guide. All Rights Reserved.</p>
        </div>
    </>
  );
}

export default App;




