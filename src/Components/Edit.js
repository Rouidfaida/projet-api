import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handelAdd, handelEdit } from '../redux/action';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Edit = ({el}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [slugs, setSlugs] = useState(el.slug)
    const [image, setImage] = useState(el.jetpack_featured_media_url)
    const dispatch = useDispatch()
    
    const handelsubmit=(e)=>{
        e.preventDefault()
        const newphoto=
        {id:el.id,
            slug:slugs,
          jetpack_featured_media_url:image
            }
dispatch(handelEdit(newphoto))
handleClose()

    }
    return (
 <div>
<button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      slug
    </Form.Label>
    <Col sm="10">
      <input type="text" value={slugs} placeholder="name" onChange={(e)=>setSlugs(e.target.value)} />
    </Col>

    <Form.Label column sm="2">
      image
    </Form.Label>
    <Col sm="10">
      <input type="text" value={image} placeholder="name"  onChange={(e)=>setImage(e.target.value)}/>
    </Col>
   
  </Form.Group>
  <button onClick={handelsubmit}>add</button>
  <button onClick={handleClose}>close</button>
        </Box>
      </Modal>         </div>
    )
}

export default Edit
