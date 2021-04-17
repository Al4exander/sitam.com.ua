import React from 'react';
import '../commonElements/styles/Common.css';
import './styles/Images.css';
import {InnerBorderImage} from "./InnerBorderImage";

export const TwoImagesElement: React.FC<ITwoImagesElement> = ({first, second, className, alt, maxSize = true}) => {
  return (
      <section className={className}>
          <div className='image-box'>
              <InnerBorderImage className={maxSize ? 'img-size': ''} src={first} alt={alt}/>
              <img className='second-img-overlay-size' src={second}/>
          </div>
      </section>
  )
};

interface ITwoImagesElement {
    first: any;
    second: any;
    alt: string;
    className?: string;
    maxSize?: boolean;
}