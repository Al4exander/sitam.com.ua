import React, {useState} from 'react';
import './styles/ImagesCarusel.css';
import {CarouselItem} from "./interfaces/interfaces";

export function ImagesCarousel(props: any) {
    let [active, setActive] = useState(0);
    let [activeWay, setActiveWay] = useState('active-right');

    const setActiveProp = (current: number, elementsCount: number) => {
        if(current === 0) {
            setActiveWay('active-right');
        } else if(current === elementsCount) {
            setActiveWay('active-left');
        } else {
            setActiveWay('active-center');
        }
        setActive(current);
    };

    return (
      <div className=''>
          <div className='text'>{props.images[active].text}</div>
          <div className='d-flex justify-content-center'>
              {props.images.map((image: CarouselItem, index: number, array: CarouselItem[]) => {
                  return index === active ?
                      <img
                          key={`image-${index}`}
                          className={`carousel-image mr-3 ${activeWay}`}
                          src={image.url}/> :
                      <div
                          key={`image-${index}`}
                          className={`carousel-image mr-3 ${activeWay}`}
                          style={{
                              backgroundImage: `url(${image.url})`,
                              width: '133px',
                              height: '500px',
                              backgroundPosition: 'center',
                              opacity: '0.6'
                          }}
                          onMouseEnter={() => setActiveProp(index, array.length - 1)}
                      />
              })}
          </div>
      </div>
  );
}