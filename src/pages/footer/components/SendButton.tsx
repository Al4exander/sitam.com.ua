import React from 'react';
import { Spin } from 'antd';

import '../styles/ContactsAndAsk.css'

export const SendButton: React.FC<ISendButton> = ({className, onClick, loading}) => {
  return (
      <div className={className}>
          <div className='send-button-outline' />
          <button className='send-button align-center-full' onClick={onClick} disabled={loading}>
              {loading ? <><Spin size="small" className='m-2'/>Отправляем</> : 'Отправить'}
          </button>
      </div>
  );
};

interface ISendButton {
    onClick: () => void;
    className?: string;
    loading: boolean;
}