import React from 'react';
import '../styles/ElementWithShadow.css'

export const ElementWithShadow: React.FC<IElementWithShadow> = ({className, text, textClassName}) => {
  return (
      <div className={`element-box-rectangle ${className}`}
      >
          <div className={textClassName}>
              <div className='element-box-text'>{text}</div>
          </div>
      </div>
  );
};

interface IElementWithShadow {
    className?: string;
    text?: any;
    textClassName?: string;
}