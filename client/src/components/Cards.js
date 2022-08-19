import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Cards({source}) {
  const navigate = useNavigate()
  function onClickMovieDetails(id){
    navigate(`/${id}`);
  }

  return (
    <div className='d-flex flex-wrap mt-5'>
        {source.map(({id,name,poster})=>(
          <Card key={id} className="m-2" style={{ width: '16rem'}}>
          <Card.Img variant="top" src={poster} style={{height:'15rem'}} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button onClick={()=>onClickMovieDetails(id)} variant="primary">Details</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  )
}
