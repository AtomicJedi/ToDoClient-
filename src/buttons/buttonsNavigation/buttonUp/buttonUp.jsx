import React from 'react';
import './buttonUp.sass';


const buttonUp = ({ 
  stepUp: up,
}) => {
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

export default buttonUp
