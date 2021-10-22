import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FoodCard from './FoodCard'
import { Card,Button } from 'react-bootstrap'

import Navbare from './Navbare'

const ListFood = () => {
    const [textm, setTextm] = useState('')
  const handelChange = (e) => {
    setTextm(e.target.value)
  }
    const movie = useSelector(state => state.allMovie.movie)
    return (
        <div className="makeup">
        <Navbare  handelChange={handelChange} textm={textm}/>
        <Link to="/">
                      <Button variant="primary">info</Button>
                      </Link>
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"180px"}}>

    
         { movie.filter(el=>el.name.toUpperCase().includes(textm.toUpperCase())).map(el=><FoodCard mov={el}/>) 
}
           

        </div>
        </div>
    )
}

export default ListFood
