import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddPhoto from './AddPhoto'
import ListFood from './ListFood'
import Navbare from './Navbare'
import PhotoCard from './PhotoCard'
import { Button } from 'react-bootstrap';


const Listesphotos = () => {
    
  const [textm, setTextm] = useState('')
  const handelChange = (e) => {
    setTextm(e.target.value)
  }
    const photo = useSelector(state => state.allPhoto.photo)

    return (
        <div style={{backgroundColor:"pink"}}>
    <Navbare  handelChange={handelChange} textm={textm}/>
    <AddPhoto ap={photo}/>

    <Link to={`/food`}>
            <Button style={{marginLeft:"780px",marginTop:"-67px",marginBottom:"-150px"}}>makeup</Button></Link>
        <div style={{display:"flex",flexWrap:"wrap", marginLeft:"80px", marginTop:"80px", marginRight:"10px"}}>

            {

         photo.filter(el=>el.slug.toUpperCase().includes(textm.toUpperCase())).map(el=><PhotoCard el={el}/>)
            }
            
        </div>
        </div>
    )
}

export default Listesphotos
