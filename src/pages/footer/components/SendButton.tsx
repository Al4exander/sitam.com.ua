import React from 'react';
import '../styles/ContactsAndAsk.css'

export function SendButton(props: any) {
  return (
      <div className={props.className}>
          <div className='send-button-shadow' />
          <div className='send-button-shadow-2' />
          <div className='send-button-outline' />
          <button className='send-button'>Отправить</button>
      </div>
  );
}
