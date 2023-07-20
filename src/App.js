
import './App.css';
import React from 'react';
import Home from './components/home/home';
import Aboutme from './components/aboutme/aboutme';
import Courses from './components/course/course';
import Books from './components/books/books';
import Raabta from './components/raabta/raabta';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Signin from './components/signin/signin';
import Courseinfo from './components/courseinfo/courseinfo';
import Register from './components/register/register';
import Forgot from './components/forgot/forgot';
import Termsandconditions from './components/termsandconditions/termsandconditions';
import Cart from './components/cart/cart';
import Thumbnail1 from './book-1thumbnail.png';
import Thumbnail2 from './book-2thumbnail.png';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          
          <Route path="/courses" element={<Courses />} />
          
          <Route path="/courses/infoc1" element={<Courseinfo cname='Arabic Master Class (Part 1)' thumbnail={Thumbnail1} price='Rs.5000' about1='Beginner'
            about2='2853 Total Enrolled' about3='35 hours Duration' about4='June 20, 2023 Last Updated' about5='Certificate of completion'
            info1='35+hours of on-demand video' info2='2 downloadable resources' info3='Full lifetime access' 
            info4='Access on mobile and TV' info5='Certificate of completion' info6='Level beginner'  />} />
          
          <Route path="/courses/infoc2" element={<Courseinfo cname='Arabic Master Class (Part 2)' thumbnail={Thumbnail2} price='Rs.5000' about1='Intermediate'
            about2='560 Total Enrolled' about3='40 hours Duration' about4='June 12, 2023 Last Updated' about5='Certificate of completion' 
            info1='40 hours of on-demand video' info2='2 downloadable resources' info3='Full lifetime access'
             info4='Access on mobile and TV' info5='Certificate of completion' info6='Level Intermediate' 
             />} />

          <Route path="/books" element={<Books />} />
          <Route path="/raabta" element={<Raabta />} />
          
          <Route path="/signin" element={<Signin/>} />
          
          <Route path="/register" element={<Register/>} />
          
          <Route path="/terms" element={<Termsandconditions/>} />

          <Route path="/cart" element={<Cart/>} />
          
          <Route path="/forgot" element={<Forgot/>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
