import React from 'react';
import './buttonAllDone.sass';
 
const ButtonAllDone = ({allDone})=> {
    return (
      <button 
        onClick={allDone}
        className="BtnAllDone">
        &#215;
      </button>
    );
  }

export default ButtonAllDone
