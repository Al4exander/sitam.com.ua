import React from 'react';
import '../styles/ContactsAndAsk.css'

export function MessageField(props: any) {
  return (
      <div className={props.className}>
          <div className='message-input-field-shadow' />
          <div className='message-input-field-shadow-2' />
          <input className='message-input-field' placeholder='Сообщение' />
      </div>
  );
}
