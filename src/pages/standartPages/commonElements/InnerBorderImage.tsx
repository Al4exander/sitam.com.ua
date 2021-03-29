import React from 'react';
import './styles/Images.css';

export function InnerBorderImage(props: any) {
  return (
      <div className={`image-holder`}>
          <img className={props.className} src={props.src}/>
          {props.element}
      </div>
  );
}

