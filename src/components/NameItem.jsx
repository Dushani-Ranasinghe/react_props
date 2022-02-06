import React from 'react';

function NameItem(props) {
  return <div>
  <p><img src={props.picture} alt='avatar'/></p>
  <p>Name: {props.name}</p>
  <p>Address: {props.location}</p>
  <p>Email: {props.email}</p>
  <p>Date of birth: {props.birthday}</p>
  </div>;
}

export default NameItem;
