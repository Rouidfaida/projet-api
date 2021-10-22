import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
  import CardActions from '@mui/material/CardActions'
  import CardContent from '@mui/material/CardContent'
  import Button from '@mui/material/Button'
  import Typography from '@mui/material/Typography'
  import CardMedia from '@mui/material/CardMedia'
import AddPhoto from './AddPhoto'
import { handelDelete } from '../redux/action'
import Edit from './Edit'
const PhotoCard = ({el}) => {
  const dispatch = useDispatch()
  const handelsubmit=()=>{
 dispatch(handelDelete(el.id))
  }
    return (
        <div style={{display:"flex",flexWrap:"wrap", marginLeft:"30px"}}>
            
            {/* <Link to={`/infos/${el.id}`}> */}
                  
                      {/* <Button variant="primary">info</Button> */}
                      {/* </Link> */}
                {/* <p></p> */}
                {/* <h2>{el.name}</h2>
                <h3>{el.domains}</h3>
                <h3>{el.country}</h3> */}

<Card sx={{ maxWidth: 200, marginLeft:5, marginBottom:5 }}>
      <CardMedia
        component="img"
         height="140"
        image={el.jetpack_featured_media_url}
        
      />
        <CardContent>
          <p>
            {el.slug}
          </p>

        </CardContent>
<div style={{display:"flex"}}>
<button onClick={handelsubmit}>delete</button>
<Edit el={el}/>
          <Link to={`infos/${el.id}`}>

          <button >detail</button>
          </Link>
  <a href={el.link}> plus</a>
</div>
   

      </Card>
           
            
        </div>
    )
}

export default PhotoCard
