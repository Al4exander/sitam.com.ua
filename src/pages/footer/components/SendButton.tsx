import React, {useContext} from 'react';
import { Spin } from 'antd';

import '../styles/ContactsAndAsk.css'
import {LanguageContext} from "../../../lib/languageContext";

export const SendButton: React.FC<ISendButton> = ({className, onClick, loading}) => {
    const [language] = useContext(LanguageContext);
    const data = language === 'ua' ? {
        placeholder: 'Відправити',
        waiting: 'Відправляємо',
    }: {
        placeholder: 'Отправить',
        waiting: 'Отправляем',
    };

  return (
      <div className={className}>
          <div className='send-button-outline' />
          <button className='send-button align-center-full' onClick={onClick} disabled={loading}>
              {loading ? <><Spin size="small" className='m-2'/>{data.waiting}</> : data.placeholder}
          </button>
      </div>
  );
};

interface ISendButton {
    onClick: () => void;
    className?: string;
    loading: boolean;
}