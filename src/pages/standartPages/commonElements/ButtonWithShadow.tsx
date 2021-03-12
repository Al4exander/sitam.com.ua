import React from 'react';
import './styles/ButtonWithShadow.css';

export function ButtonWithShadow(props: {text: string, className?: string}) {
  return (
      <div className={`two-images-button-box ${props.className}`}>
          <div className='two-images-button-shadow'/>
          <div className='two-images-button-shadow-2'/>
          <div className='two-images-button-outer'/>
          <div className='two-images-button-inner align-center-full'>
              <div className='two-images-button-text'>
                  {props.text}
              </div>
          </div>
      </div>
  );
}

