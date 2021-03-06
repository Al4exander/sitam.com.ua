import React from 'react';
import '../../footer/styles/CardBlock.css';

export function CardBlock(props: any) {
  return (
      <div className={props.className}>
          <div className="img-square-wrapper">
              <img className='card-img' src={props.image}/>
          </div>
          <div className="card-body">
              <p className={props.textClassName}>{props.text}</p>
          </div>
      </div>
  );
}
