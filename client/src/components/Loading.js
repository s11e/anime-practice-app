import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return (
    <div className="mt-5 d-flex justify-content-center"><Spinner animation="border" variant="danger"  /></div>
  )
}
