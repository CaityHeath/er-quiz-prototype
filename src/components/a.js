import React from 'react';

function A(props){
  console.log(props.answer);
  return(
    <button value={props.answer} >{props.answer}</button>
  );
};

export default A;

