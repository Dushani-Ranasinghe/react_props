import React from 'react';
import NameItem from './NameItem';

function NameList() {
  return <div>
      <ul>
         <NameItem name="Anne" course="CSE"/>
         <NameItem name="Ben" course="IT"/>
      </ul>
  </div>;
}

export default NameList;
