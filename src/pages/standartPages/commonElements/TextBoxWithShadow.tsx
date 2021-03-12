import React from 'react';
import './styles/TextBoxWithShadow.css';

export function TextBoxWithShadow(props: any) {
  return (
      <div className={`two-images-text-box-box ${props.className}`} style={{height: `${props.height+5}px`, width: `${props.width+5}px`}}>
          <div className='two-images-text-box-shadow' style={{height: `${props.height+5}px`, width: `${props.width+5}px`}}/>
          <div className='two-images-text-box-shadow-2' style={{height: `${props.height+5}px`, width: `${props.width+5}px`}}/>
          <div className='two-images-text-box' style={{height: `${props.height+5}px`, width: `${props.width+5}px`}}>
              <div className='two-images-text-box-text row' style={{width: `${props.width-5}px`}}>
                  {props.text.split('\n').map((text: string) => {
                      return <p className='col-12'>{text}</p>
                  })}
              </div>
          </div>
      </div>
  );
}

