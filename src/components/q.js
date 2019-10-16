import React from 'react';

function Q1(props){
  console.log(props.question)
  return(
    <h1> {props.question} </h1>
  );
};

export default Q1;

