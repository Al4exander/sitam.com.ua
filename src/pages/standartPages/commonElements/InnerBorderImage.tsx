import React from 'react';
import './styles/Images.css';

export const InnerBorderImage: React.FC<InnerBorderImageProps> = ({className, element, src, alt}) => {
  return (
      <div className='image-holder'>
          <img className={className} src={src} alt={alt}/>
          {element}
      </div>
  );
};

interface InnerBorderImageProps {
    src: string;
    alt: string;
    className?: string;
    element?: any;
}