import React from 'react';
import NameItem from './NameItem';

function NameList() {
  //create and object called NameList
  const nameList=[
  { 
    name:{
    "title": "Mr.",
    "first": "Brad",
    "last": "Gibson"},
    location: {
      "street": "9278 new road",
      "city": "kilcoole"},
    email: "brad.gibson@example.com",
    dob: {
      "date": "1993-07-20",
      "age": 26},
    picture: {
      "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"}
  },
  { 
    name:{
    "title": "Ms.",
    "first": "Maja",
    "last": "Kristensen"},
    location: {
      "street": "6034 Vagtelvej",
      "city": "Allinge"},
    email: "maja.kristensen@example.com",
    dob: {
      "date": "2015-01-06",
      "age": 7},
    picture: {
      "medium": "https://randomuser.me/api/portraits/med/women/60.jpg"}
  }
];
  return <div>
      <ul>
         <NameItem 
         picture={nameList[0].picture.medium}
         //old way of combinning strings
         //name={nameList.name.title + ' ' + nameList.name.first} 
         name={`${nameList[0].name.title} ${nameList[0].name.first} ${nameList[0].name.last}`}
         //this is the new way using string literals ES6
         location={`${nameList[0].location.street} ${nameList[0].location.city}`}
         email={nameList[0].email}
         birthday={nameList[0].dob.date}
         />
        
      </ul>
  </div>;
}

export default NameList;
