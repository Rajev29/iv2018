import React from 'react';
import './App.css';

function Texterror(props) {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}

export default Texterror