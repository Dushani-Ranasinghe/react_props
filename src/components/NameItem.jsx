import React from 'react';
import '../styles/NameItem.css'
import Avatar from 'react-avatar';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function NameItem(props) {
  return <div>
  <Card bg="light" border="light" className="mx-auto my-2" style={{width:'28rem'}}>
  <Card.Header>
  <Avatar src={props.picture} alt='avatar' size="75" round={true} />
  </Card.Header>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.location}
    <br/>
    {props.email}
    <br/>
   {props.birthday}
    </Card.Text>
  </Card.Body>
  </Card>
  </div>;
}

export default NameItem;
