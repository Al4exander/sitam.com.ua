import React from 'react';
import '../styles/ElementWithShadow.css'

export function ElementWithShadow(props: any) {
  return (
      <div className={`${props.className}`} style={{height: props.height}}>
          <div className='element-box-shadow'/>
          <div className='element-box-shadow-2'/>
          <div className='element-box-rectangle'/>
          <div className={props.textClassName}>
              <div className='element-box-text'>{props.text}</div>
          </div>
      </div>
  );
}
