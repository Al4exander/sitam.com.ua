import React from 'react';
import '../styles/ElementWithShadow.css'

export function ElementWithShadow(props: any) {
  return (
      <div className={`element-box-rectangle ${props.className}`}
           style={{width: props.width, ...props.style}}
      >
          <div className={props.textClassName}>
              <div className='element-box-text'>{props.text}</div>
          </div>
      </div>
  );
}
