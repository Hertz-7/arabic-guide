
import './books.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions  } from '@mui/material';
import React from 'react';
import {StyledBookCard} from './styledbookcard.js';
import Button from '../button/button'
import {addtocart} from "../../redux/slices/cartSlice.js";
import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { toast,ToastContainer } from 'react-toastify';
function App(props) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch(addtocart({name:props.subtitle, price:props.price, image2:props.image2 } ) ) ;
      toast('Item added to cart');
      <ToastContainer />
  }
  return (
    <StyledBookCard sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="190"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
      <div className='item1'>
        <Typography gutterBottom variant="h6" component="div" font-weight={1000} >
          {props.subtitle}
        </Typography>
        </div>
      </CardContent>
    </CardActionArea>
    <CardActions>
       
    
    <Button  className="bookbtn" width="80%" height="20%" name="Download book" />
    
    <Button  className="bookbtn" width="80%" height="20%" name="Download Guide"/>
    
    <Button onClick={handleAddToCart} className="bookbtn" width="80%" height="20%" name="Buy Book"/>
    </CardActions>
  </StyledBookCard>
);
}

export default App;