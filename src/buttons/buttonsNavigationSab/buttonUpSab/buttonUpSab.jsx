import React from 'react';
import './buttonUpSab.sass';


const buttonUpSab = ({ 
  moveUp: up,
}) => {
  // console.log(up)
  return (
    <div className="buttonsNavigation_Frame">
      <button
        onClick={up}
        className="Button_Up"
      >
        &#11014;
          </button>
    </div>
  );
}

export default buttonUpSab
