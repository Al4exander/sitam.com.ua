import React, {useEffect, useState} from 'react';
import './styles/Faq.css'
import worker from '../../images/Worker.png';
import {ElementWithShadow} from "./components/ElementWithShadow";

export function FaqComponent() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 1000);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        console.log(window.innerWidth);
        if(window.innerWidth < 1000) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
    };
  return (
      <div>
          <div className='row'>
              <div className='col-lg-6'>
                  <ElementWithShadow className='col-lg-8 col-sm-12' height='300px'  text={'123'}/>
                  <ElementWithShadow className={`col-lg-8 col-sm-12 ${!smallSize ? ' second-faq-box' : ''}`} height='300px' text={'321'}/>
              </div>
              {!smallSize && <img className='pl-5 worker-image col-lg-6 col-md-12 col-sm-12' src={worker}/>}
          </div>
      </div>
  );
}
