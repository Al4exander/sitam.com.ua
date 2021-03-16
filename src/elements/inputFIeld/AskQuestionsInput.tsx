import React from 'react';

export function AskQuestionsInput(props: any) {
    return (
      <div className={props.className}>
          <input className='input-field' placeholder={props.placeholder}/>
      </div>
  );
}