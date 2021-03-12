import React from 'react';

export function AskQuestionsInput(props: any) {
    return (
      <div className={props.className}>
          <div className='input-field-shadow'/>
          <div className='input-field-shadow-2' />
          <input className='input-field' placeholder={props.placeholder}/>
      </div>
  );
}