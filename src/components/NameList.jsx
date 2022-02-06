import React from 'react';
import NameItem from './NameItem';

function NameList() {
  //create and object called NameList
  const nameList=[
  { id:1,
    name:{"title": "Mr.","first": "Brad","last": "Gibson"},
    location: { "street": "9278 new road","city": "kilcoole"},
    email: "brad.gibson@example.com",
    dob: { "date": "1993-07-20","age": 26},
    picture: { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"}
  },
  { id:2,
    name:{"title": "Ms.","first": "Maja","last": "Kristensen"},
    location: { "street": "6034 Vagtelvej","city": "Allinge"},
    email: "maja.kristensen@example.com",
    dob: { "date": "2015-01-06","age": 7},
    picture: {"medium": "https://randomuser.me/api/portraits/med/women/60.jpg"}
  },
  { id:3,
    name:{"title": "Mr.","first": "Magnus","last": "Hansen"},
    location: {"street": "1160 Bellisvej","city": "Brondby"},
    email: "magnus.hansen@example.com",
    dob: {"date": "2005-06-20","age": 17},
    picture: {"medium": "https://randomuser.me/api/portraits/med/men/96.jpg"}
  }
];

const nameListComponent =()=>{
  return nameList.map((person)=>{
    //person is an element/ one object in array
  return(
         <NameItem 
         key={person.id}
         picture={person.picture.medium}
         name={`${person.name.title} ${person.name.first} ${person.name.last}`}
         location={`${person.location.street} ${person.location.city}`}
         email={person.email}
         birthday={person.dob.date}
         />
         ); 
        } );
}
  return(
    <div>
      <ul>{nameListComponent()}</ul>
    </div>
  );
}



export default NameList;
