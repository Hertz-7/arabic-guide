
import './course.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions ,Rating } from '@mui/material';
import React from 'react';
import {StyledCourseCard} from './styledcoursecard.js';
import Button from '../button/button'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import {addtocart} from "../../redux/slices/cartSlice.js";
import {useDispatch} from "react-redux";
import { toast, ToastContainer} from 'react-toastify';
function App(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCardClick = () => {
        if(props.subtitle==='Arabic Master Class (Part 1)'){
            navigate('/courses/infoc1')
        }else if(props.subtitle==='Arabic Master Class (Part 2)'){
            navigate('/courses/infoc2')
        }
    }
    const handleAddToCart = () => {
        dispatch(addtocart({name:props.subtitle, price:props.price, image2:props.image2 } ) ) ;
        toast('Item added to cart');
        <ToastContainer />
    }
  return (
    <StyledCourseCard sx={{ maxWidth: 400 }}>
    <CardActionArea onClick={handleCardClick} >
      <CardMedia
        component="img"
        height="190"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
      <div className='rated'>
        <Rating name="read-only" value={5} readOnly />
        <p className='stars'>5.00 </p>
        <p className='ratings'>({props.ratings})</p>
      </div>
      <div className='item1'>
        <Typography gutterBottom variant="h6" component="div" >
          {props.subtitle}
        </Typography>
        </div>
      </CardContent>
    </CardActionArea>
    <CardActions className='actions'>
       
        <Typography gutterBottom variant="p" component="div" fontWeight={800} mr={20} ml={1}>
        Rs5,000.00
        </Typography>
    
        <Button onClick={handleAddToCart} className="addcartbtn" name="Add to Cart" width="90%" height="30%" />
    </CardActions>
  </StyledCourseCard>
);
}

export default App;