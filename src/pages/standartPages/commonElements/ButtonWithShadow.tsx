import React from 'react';
import './styles/ButtonWithShadow.css';

export function ButtonWithShadow(props: {text: string, className?: string, onClick?: any}) {
  return (
      <div className={`two-images-button-box align-center-full ${props.className}`} onClick={props.onClick}>
          <div className='two-images-button-text '>
              {props.text}
          </div>
      </div>
  );
}

