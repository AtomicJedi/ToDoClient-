import React from 'react';
import './buttonDownSab.sass';


const buttonDownSab = ({ 
  moveDown: Down,

}) => {
  return (
    <div className="buttonsNavigation_Frame">
      <button
        onClick={Down}
        className="Button_Down"
      >
        &#11015;
          </button>
    </div>
  );
}

export default buttonDownSab
