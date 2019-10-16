import React, {useState} from 'react';
import Progress from './components/progress.js'
import Q from './components/q.js';
import Answers from './components/answers.js'

function App(){
  const [currentQuestion, setQuestion] = useState(0);
  const [responses, setAnswer] = useState([]);


  const questions =[
    {
      id: 1,
      question: 'Which type of coffee are you looking for?',
      answers:[
        {a: 'Espresso'},
        {b: 'Blend'},
        {c: 'Single-Origin'},
        {d: 'Decaf'},
        {e: 'No-Preference'},
      ],
      type: ['type', 100]
      
    },
    {
      id: 2,
      question: 'Do you add anything to your coffee?',
      answers:[
        {a: 'Milk or Cream'},
        {b: 'Alternative Milk'},
        {c: 'Spices'},
        {d: 'Sweetener'}
      ], 
      type: ['body', 20]
    },
    {
      id: 3,
      question: 'How would you describe your ideal cup of coffee?',
      answers: [
        {a: 'Delicate'},
        {b: 'Juicy'},
        {c: 'Bold and Heavy'}
      ],
      type: ['body', 80]
    },
    {
      id: 4,
      question: 'How many cups of coffee do you brew a day?',
      answers: [
        {a: '1-3'},
        {b: '4-6'},
        {c: '7-9'},
        {d: '10-13'},
        {e: '14-16'}
      ],
      type: [
        'frequency', 100
      ]
    },
    {
      id: 5,
      question: 'What is your roast preference?',
      answers: [
        {a: 'Light'},
        {b: 'Medium'},
        {c: 'Dark'}
      ],
      type: ['roast', 100]
    },
    {
      id: 6,
      question: 'What types of flavors do you like in your coffee?',
      answers: [
        {a: 'Warm Spices'},
        {b: 'Vanilla'},
        {c: 'Honey'},
        {d: 'Floral'},
        {e: 'Nuts'},
        {f: 'Caramel'},
        {g: 'Sweet Tobacco'},
        {h: 'Dried Fruit'}
      ],
      type: ['flavor', 30]
    },
    {
      id: 7,  
      question: 'What kind of chocolate do you like best?',
      answers: [
        {a: 'Dark Chocolate'},
        {b: 'Milk Chocolate'}
      ],
      type: ['flavor', 30]
    },
    {
      id: 8,
      question: 'What type of fruit do you enjoy best?',
      answers: [
        {a: 'Citrus'},
        {b: 'Stone Fruit'},
        {c: 'Berries'},
        {d: 'Figs'},
        {e: 'Grapes'},
        {f: 'Tropical & Exotic'}
      ],
      type: ['flavor', 40]
    }
    
     
  ]

  const selectionHandler = e => {
    e.preventDefault();
    setAnswer([...responses, e.target.value ]);
  }


  const question = questions[currentQuestion];

  console.log('answer state', responses);
  return( 
    <div className="container">
      <Progress total='8' current={currentQuestion + 1}/>
      <Q question={question.question} />

      <Answers answerOptions={question} 
               answerHandler={selectionHandler} 
               id={question.id} 
               />

      <button onClick={() => setQuestion(currentQuestion + 1) }> Next Question </button>
    </div>
  );
}

export default App;
