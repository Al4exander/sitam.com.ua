import React, {useContext} from 'react';
import '../commonElements/styles/Common.css';
import '../commonElements/styles/images.css';
import {SizeContext} from "../../../lib/sizeContext";
import {InnerBorderImage} from "./InnerBorderImage";

export const TwoImagesElement: React.FC<ITwoImagesElement> = ({first, second, className, maxSize = true}) => {
  const [smallSize] = useContext(SizeContext);

  return (
      <section className={className}>
          <div className={`image-box`}>
              <InnerBorderImage className={maxSize && 'img-size'} src={first}/>
              <img className='second-img-overlay-size' src={second}/>
          </div>
      </section>
  )
};

interface ITwoImagesElement {
    first: any;
    second: any;
    className?: string;
    maxSize?: boolean;
}