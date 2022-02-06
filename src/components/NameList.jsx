import React from 'react';
import NameItem from './NameItem';

function NameList() {
  //create and object called NameList
  const nameList={ 
    name:{
    "title": "mr",
    "first": "brad",
    "last": "gibson"},
    location: {
      "street": "9278 new road",
      "city": "kilcoole",},
    email: "brad.gibson@example.com",
    dob: {
      "date": "1993-07-20T09:44:18.674Z",
      "age": 26},
    picture: {
      "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"}
  };
  return <div>
      <ul>
         <NameItem name="Anne" course="CSE"/>
         <NameItem name="Ben" course="IT"/>
      </ul>
  </div>;
}

export default NameList;
