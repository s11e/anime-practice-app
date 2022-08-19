import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios"
import Alert from 'react-bootstrap/Alert'

import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
export default function Home() {
  const [animes,setAnimes] = useState([])
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [searchText,setSearchText] = useState("")
  
  useEffect(()=>{
    fetchAnimes()
  },[])

  const fetchAnimes = async () => {
    try{
      setSearchText("")
      setLoading(true)
      setError(null)
      const response = await axios(`http://localhost:4000/animes?searchText=${searchText}`)
      if(response.statusText.toLowerCase()==="ok")
        setAnimes(response.data)
    }
    catch(e){
      setError("Error: "+e)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
    {error && <Alert variant="danger">{error}</Alert>}
    <SearchBar searchText={searchText} onClickRefresh={fetchAnimes} setSearchText={setSearchText}/>
    {loading?<Loading />:
    <Cards source={animes}/>}
    </>
  )
}
