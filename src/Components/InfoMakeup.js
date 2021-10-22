import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const InfoMakeup = ({match}) => {
        const makeup = useSelector(state => state.allMovie.movie)
        let item=makeup.find(el=>el.id==match.params.id)
    return (
        <div style={{border:" 4px dotted blue", width:"500px",marginLeft:"400px", marginTop:"200px"}}>
                <img style={{width:"200px",height:"200px", backgroundColor:"pink",marginLeft:"100px"}} src={item.image_link}/>
       <h6>{item.description}</h6>
       <Link to="/food/">
           <button>back</button>
       </Link>
        </div>
    )
}

export default InfoMakeup
