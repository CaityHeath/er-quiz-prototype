import React from 'react';

function A(props){


  return(
    <button value={props.answer} onClick={props.handleClick} weight={props.weight} typeQ={props.typeQ}> {props.answer}</button>
  );
};

export default A;

