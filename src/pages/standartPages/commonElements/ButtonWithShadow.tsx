import React from 'react';
import './styles/ButtonWithShadow.css';

export function ButtonWithShadow(props: {text: string, className?: string, onClick?: any}) {
  return (
      <span className={props.className}>
          <div className={`two-images-button-box align-center-full col-12`} onClick={props.onClick}>
              <div className='two-images-button-text'>
                {props.text}
              </div>
          </div>
      </span>
  );
}

