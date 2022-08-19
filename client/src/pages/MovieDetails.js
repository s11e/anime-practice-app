import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import {isEmpty} from 'lodash'
import moment from 'moment'

export default function MovieDetails() {
    const {movieId} = useParams()
    const [movieDetails,setMovieDetails] = useState({})
    const fetchMovies = async()=>{
      const response = await axios(`http://localhost:4000/animes/${movieId}`)
      setMovieDetails(response.data.response)
    }
    useEffect(() => {
      fetchMovies()
    },[])
  return (
    <div>
    {!isEmpty(movieDetails) && 
    <Card className='m-auto' style={{width:"35rem"}}>
      <Card.Header>{movieDetails.name}</Card.Header>
      <Card.Body>
        <Card.Img className='mb-2' src={movieDetails.poster}></Card.Img>
        <Card.Subtitle>Rating ⭐️</Card.Subtitle>
        <Card.Text>{movieDetails.rating}</Card.Text>
        <Card.Subtitle>Created At ⏰</Card.Subtitle>
        <Card.Text>{moment(movieDetails.createdAt).format("DD/MM/YYYY")}</Card.Text>
        <Card.Subtitle>Updated At ⏰</Card.Subtitle>
        <Card.Text>{moment(movieDetails.updatedAt).format("DD/MM/YYYY")}</Card.Text>
      </Card.Body>
      </Card>}
    
    </div>
    
  )
}
