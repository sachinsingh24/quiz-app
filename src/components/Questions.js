import React from 'react';

const Questions = ({ answerOptions, Option }) => {
  return (
    <div className='btn-container'>
      {answerOptions.map((items, id) => {
        const Number = id + 1;
        return (
          <button
            key={id}
            className='answer-btn'
            onClick={() => Option(items.isCorrect)}
          >
            {`(${Number}) ${items.answerText}`}
          </button>
        );
      })}
    </div>
  );
};

export default Questions;
