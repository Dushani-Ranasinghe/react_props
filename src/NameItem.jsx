import React from 'react';

function NameItem(props) {
  return <div>
   <li>Name {props.name} : Course {props.course}</li>
  </div>;
}

export default NameItem;
