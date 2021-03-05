import React from 'react';
import '../styles/ContactsAndAsk.css'

export function MessageField() {
  return (
      <>
          <div className='message-input-field-shadow' />
          <div className='message-input-field-shadow-2' />
          <input className='message-input-field' placeholder='Сообщение' />
      </>
  );
}
