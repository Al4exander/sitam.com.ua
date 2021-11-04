import React from 'react';
import '../../footer/styles/CardBlock.css';

export function CardBlock(props: any) {
  return (
      <div className={props.className}>
          <div className="img-square-wrapper col-2 align-center-full mb-4">
              <img className='card-img-sizes' src={props.image} title={props.imageTitle} alt={props.imageTitle}/>
          </div>
          <div className="card-body col-10">
              <p className={props.textClassName}>{props.text}</p>
          </div>
      </div>
  );
}
