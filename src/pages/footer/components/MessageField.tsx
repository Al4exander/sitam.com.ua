import React, {useContext} from 'react';
import '../styles/ContactsAndAsk.css'
import {LanguageContext} from "../../../lib/languageContext";

export const MessageField: React.FC<IMessageField> = ({className, onChange, value}) => {
    const [language] = useContext(LanguageContext);
    const placeholder = language === 'ua' ? 'Повідомлення' : 'Сообщение';
  return (
      <div className={className}>
          <input className='message-input-field col-12'
                 onChange={onChange}
                 value={value}
                 placeholder={placeholder}
          />
      </div>
  );
};

interface IMessageField {
    className?: string;
    onChange: (e: any) => void;
    value: string;
}
