import React from 'react';
import A from './a.js'

function Answers(props){

  return(
    <>
      {props.answerOptions.answers.map(option => {
       return <A letter={Object.keys(option)} 
                 answer={Object.values(option)}
                 handleClick={props.answerHandler} 
                  />
      })}
    </>
  );
};

export default Answers;

