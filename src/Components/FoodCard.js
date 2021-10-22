import React from 'react'
// import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
  import CardActions from '@mui/material/CardActions'
  import CardContent from '@mui/material/CardContent'
  import Button from '@mui/material/Button'
  import Typography from '@mui/material/Typography'
  import CardMedia from '@mui/material/CardMedia';
import { handelDelete } from '../redux/action'
import { useDispatch } from 'react-redux'
import { Avatar } from '@mui/material'


const FoodCard = ({mov}) => {

    return (
        <div>
            
            <div style={{display:"flex",flexWrap:"wrap",}}>
            {
              <Card sx={{ maxWidth: 200,height:"500px", marginLeft:5, marginBottom:5 }}>
               {/* marginBottom: '20px',marginTop:"30px"}}> */}
                  <ReactStars style={{marginLeft:"20px"}}
                count={5}
                size={24}
                onChange={null}
                edit={false}
                value={mov.rating}
              />
<Avatar style={{backgroundColor:"blue", marginLeft:"50px"}} >{mov.product_type[0]}</Avatar>
<h6 style={{marginLeft:"20px"}}>{mov.product_type}</h6>
       <img  src={mov.image_link} alt="" />
        <CardContent>
          <p>
            {mov.name}
          </p>
          {/* <h4>
           {mov.brand}
          </h4> */}
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Link to={`makeup/${mov.id}`}>

          <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
           
            
          




    
      
    
  
      }
        </div>
        </div>
    )
}

export default FoodCard
