import React from 'react';
import '../styles/ElementWithShadow.css'

export function ElementWithShadow(props: any) {
  return (
      <div className={`${props.className}`}
           style={{height: props.height, width: props.width, ...props.style}}
           key={props.key}
      >
          <div className='element-box-shadow' key='element_shadow'/>
          <div className='element-box-shadow-2' key='element_shadow-2'/>
          <div className='element-box-rectangle' key='element_rec'/>
          <div className={props.textClassName}>
              <div className='element-box-text'>{props.text}</div>
          </div>
      </div>
  );
}
