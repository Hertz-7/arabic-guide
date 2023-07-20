import Card from '@mui/material/Card';
import './learncard.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import React from 'react';
import {StyledCard} from './stylecard.js';
import Button from '../button/button';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
function App(props) {
    const navigate = useNavigate();
    

  return (
    <StyledCard sx={{ maxWidth: 500 }}>
    <CardActionArea >
      <CardMedia
        component="img"
        height="300"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className='viewdiv'>
        <button  className="viewbtn" onClick={()=> navigate(props.goto)} >{props.lable}</button>
    </CardActions>
  </StyledCard>
);
}

export default App;