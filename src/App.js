import React, { useState } from 'react';
import Data from './Data';
import Questions from './components/Questions';

const App = () => {
  const [index, setIndex] = useState(0);
  const { questionText, answerOptions } = Data[index];
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const nextQuestion = index + 1;
  const Option = (answer) => {
    if (answer === true) {
      setScore(score + 1);
    }
    if (nextQuestion < Data.length) {
      setIndex(nextQuestion);
    } else {
      setShow(true);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Quiz App</h2>
          <div className='underline'></div>
        </div>
        <h2>
          Question {nextQuestion}
          <small>{Data.length}</small>
        </h2>
        <>
          {show ? (
            <div className='section-center'>
              <h3 className='score'>
                You have scored {score} out of {Data.length}
              </h3>
            </div>
          ) : (
            <div className='section-center'>
              <h2 className='.Questions'>{questionText}</h2>
              <Questions answerOptions={answerOptions} Option={Option} />
            </div>
          )}
        </>
      </section>
    </main>
  );
};

export default App;
