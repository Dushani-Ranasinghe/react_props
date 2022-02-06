import React from 'react';
import '../styles/NameItem.css'
import Avatar from 'react-avatar';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function NameItem(props) {
  return <div>
  <Card bg="light" border="light" className="mx-auto my-2 shadow-sm p-3 mb-5 bg-white rounded" style={{width:'20rem'}}>
  <Card.Header>
  <Avatar src={props.picture} alt='avatar' size="75" round={true} />
  </Card.Header>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> {props.email} </Card.Subtitle>
    <Card.Text>
    {props.location}
    <br/>
   {props.birthday}
    </Card.Text>
  </Card.Body>
  </Card>
  </div>;
}

export default NameItem;
