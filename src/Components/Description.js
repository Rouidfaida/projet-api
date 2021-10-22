import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Description = ({match}) => {
    const photo = useSelector(state => state.allPhoto.photo)
    let item=photo.find(el=>el.id==match.params.id)
console.log(item)
    return (
        
        <div style={{border:"1px solid red"}}>
       <img style={{width:"200px",height:"200px"}} src={item.jetpack_featured_media_url}/>
       <h3>{item.slug}</h3>
       {/* <Link to="/">
           <button>back</button>
       </Link> */}
        </div>
    )
}

export default Description
