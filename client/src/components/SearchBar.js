import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './SearchBar.component.css'

export default function SearchBar({onClickRefresh,setSearchText,searchText}) {
  
  return (
    <>
      <Form.Group className="mb-3" controlId="formSearch">
        <Form.Control onKeyDown={(e) => 
          (e.key==="Enter" && onClickRefresh(e.target.value))
        } value={searchText} onChange={(e)=>setSearchText(e.target.value)}  type="text" className='text-white border-red box-shadow-focus-none' placeholder="Search Anime" />
        <Form.Text className="text-muted">
          Anime for life!
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={onClickRefresh}>
        Search
      </Button>
      <Button className='ms-3' variant="warning" onClick={onClickRefresh}>
        Refresh
      </Button>
    </>
  )
}
