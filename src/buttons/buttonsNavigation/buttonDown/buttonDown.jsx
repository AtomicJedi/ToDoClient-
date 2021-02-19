import React from 'react';
import './buttonDown.sass';


const buttonDown = ({ 
  stepDown: Down,

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

export default buttonDown
