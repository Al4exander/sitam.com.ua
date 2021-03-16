import React from 'react';
import './styles/images.css';

export function InnerBorderImage(props: {src: string, className?: string}) {
  return (
      <div className={`image-holder`}>
          <img className={props.className} src={props.src}/>
      </div>
  );
}

