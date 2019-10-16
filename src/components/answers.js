import React from 'react';
import A from './a.js'

function Answers(props){
  console.log('from answers', props.answer);
  return(
    <>
      {props.answer.answers.map(option => {
       return <A letter={Object.keys(option)} answer={Object.values(option)}/>
      })}

    </>
  );
};

export default Answers;

