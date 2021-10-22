import React from 'react'
import { Navbar } from 'react-bootstrap'

const Navbare = ({handelChange,textm}) => {
    return (

        <div>
             <Navbar  bg="black">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <form style={{marginLeft:"400px",width:"500px"}}>
          <input value={textm} onChange={handelChange} style={{width:"500px"}} type="text"/>
      </form>
  </Navbar>
        </div>
    )
}

export default Navbare
