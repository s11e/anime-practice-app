import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddAnime() {
    const [inputForm,setInputForm] = useState({})
    const navigate = useNavigate()
    function onInputChange(e){
        const {name,value} = e.target
        setInputForm(preValue => ({...preValue,[name]:(name==="rating")?parseFloat(value):value}))
    }
    async function onClickSubmit(){
      try{
        await axios({
          method: 'post',
          url:'http://localhost:4000/animes/add-anime',
          data:inputForm
        });
      }catch(e){
        console.log("Add Movie Failed")
      }
      navigate(-1)
    }
  return (
    <Card>
        <Card.Header ><h3 >Add Anime Homie.</h3></Card.Header>
        <Card.Body>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label className='text-dark'>Name</Form.Label>
        <Form.Control className='text-white' type="text" placeholder="Enter Name" name='name' onChange={onInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRating">
        <Form.Label className='text-dark'>Rating</Form.Label>
        <Form.Control className='text-white' pattern='^\d*(\.\d{0,1})?$' placeholder="Enter Rating(one decimal place allowed)" name='rating' onChange={onInputChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formPoster">
        <Form.Label className='text-dark'>Poster</Form.Label>
        <Form.Control className='text-white' type="text" placeholder="Enter Url" name='poster' onChange={onInputChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={onClickSubmit}>
        Submit
      </Button>
        </Card.Body>
      
    </Card>
  )
}
