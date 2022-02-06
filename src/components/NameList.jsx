import React from 'react';
import NameItem from './NameItem';

function NameList() {
  //create and object called NameList
  const nameList=[
  { 
    name:{"title": "Mr.","first": "Brad","last": "Gibson"},
    location: { "street": "9278 new road","city": "kilcoole"},
    email: "brad.gibson@example.com",
    dob: { "date": "1993-07-20","age": 26},
    picture: { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"}
  },
  { 
    name:{"title": "Ms.","first": "Maja","last": "Kristensen"},
    location: { "street": "6034 Vagtelvej","city": "Allinge"},
    email: "maja.kristensen@example.com",
    dob: { "date": "2015-01-06","age": 7},
    picture: {"medium": "https://randomuser.me/api/portraits/med/women/60.jpg"}
  },
  { 
    name:{"title": "Mr.","first": "Magnus","last": "Hansen"},
    location: {"street": "1160 Bellisvej","city": "Brondby"},
    email: "magnus.hansen@example.com",
    dob: {"date": "2005-06-20","age": 17},
    picture: {"medium": "https://randomuser.me/api/portraits/med/men/96.jpg"}
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
          <NameItem 
         picture={nameList[1].picture.medium}
         //old way of combinning strings
         //name={nameList.name.title + ' ' + nameList.name.first} 
         name={`${nameList[1].name.title} ${nameList[1].name.first} ${nameList[1].name.last}`}
         //this is the new way using string literals ES6
         location={`${nameList[1].location.street} ${nameList[1].location.city}`}
         email={nameList[1].email}
         birthday={nameList[1].dob.date}
         />
          <NameItem 
         picture={nameList[2].picture.medium}
         //old way of combinning strings
         //name={nameList.name.title + ' ' + nameList.name.first} 
         name={`${nameList[2].name.title} ${nameList[2].name.first} ${nameList[2].name.last}`}
         //this is the new way using string literals ES6
         location={`${nameList[2].location.street} ${nameList[2].location.city}`}
         email={nameList[2].email}
         birthday={nameList[2].dob.date}
         />
        
      </ul>
  </div>;
}

export default NameList;
