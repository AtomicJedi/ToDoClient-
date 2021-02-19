import React from 'react';
import './buttonAddNestingList.sass';
 
const ButtonAddNestingList = ({onClick})=> {

    return (
      <button 
        onClick={onClick}
        className='NestingList'>
        <h1>&#10011;</h1>
      </button>
    );
  }

export default ButtonAddNestingList
