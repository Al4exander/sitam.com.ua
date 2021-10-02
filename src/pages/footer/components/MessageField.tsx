import React from 'react';
import '../styles/ContactsAndAsk.css'

export const MessageField: React.FC<IMessageField> = ({className, onChange, value}) => {
  return (
      <div className={className}>
          <input className='message-input-field col-12'
                 onChange={onChange}
                 value={value}
                 placeholder='Message'
          />
      </div>
  );
};

interface IMessageField {
    className?: string;
    onChange: (e: any) => void;
    value: string;
}
