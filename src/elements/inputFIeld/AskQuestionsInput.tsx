import React, {useState} from 'react';

export function AskQuestionsInput(props: any) {
    return (
      <div>
          <div className='input-field-shadow' style={{left: props.left}}/>
          <div className='input-field-shadow-2' style={{left: props.left}}/>
          <input className='input-field' placeholder={props.placeholder} style={{left: props.left}}/>
      </div>
  );
}