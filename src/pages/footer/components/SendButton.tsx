import React from 'react';
import '../styles/ContactsAndAsk.css'

export function SendButton(props: any) {
  return (
      <div className={props.className}>
          <div className='send-button-outline' />
          <button className='send-button'>Отправить</button>
      </div>
  );
}
