import React from 'react';
import '../styles/NameItem.css'
import Avatar from 'react-avatar';

function NameItem(props) {
  return <div>
  <Avatar src={props.picture} alt='avatar' size="75" round={true} />
  <p>Name: {props.name}</p>
  <p>Address: {props.location}</p>
  <p>Email: {props.email}</p>
  <p>Date of birth: {props.birthday}</p>
  </div>;
}

export default NameItem;
