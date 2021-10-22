import React, { useState } from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handelAdd } from '../redux/action';

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

const AddPhoto = ({ap}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [slugs, setSlugs] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch()
    const newphoto=
    {
        slug:slugs,
      jetpack_featured_media_url:image
        }
    const handelsubmit=(e)=>{
        e.preventDefault()
dispatch(handelAdd(
    newphoto
))
setImage('')
setSlugs('')

    }
    return (
        <div>
<Button style={{marginLeft:"700px",marginBottom:"-130px"}} onClick={handleOpen}>add</Button>
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
      <input type="text" value={slugs} placeholder="slug" onChange={(e)=>setSlugs(e.target.value)} />
    </Col>

    <Form.Label column sm="2">
      image
    </Form.Label>
    <Col sm="10">
      <input type="text" value={image} placeholder="image"  onChange={(e)=>setImage(e.target.value)}/>
    </Col>
   
  </Form.Group>
  <Button onClick={handelsubmit}>add</Button>
  <Button onClick={handleClose}>close</Button>
        </Box>
      </Modal>        </div>
    )
}

export default AddPhoto
