import React from 'react';
import '../styles/ContactsAndAsk.css'

export function MessageField(props: any) {
  return (
      <div className={props.className}>
          <input className='message-input-field col-12' placeholder='Сообщение' />
      </div>
  );
}
