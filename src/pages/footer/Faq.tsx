import React, {useEffect, useState} from 'react';
import './styles/Faq.css'
import worker from '../../images/Worker.png';
import {ElementWithShadow} from "./components/ElementWithShadow";

export function FaqComponent() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 600);
    let [workerDisplay, setWorkerDisplay] = useState(window.innerWidth < 1000);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // countWorkerStyle();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 600) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
        if(window.innerWidth < 780) {
            !workerDisplay && setWorkerDisplay(true);
        } else {
            workerDisplay && setWorkerDisplay(false);
        }
    };

    return (
      <div>
          <p className='faq-header-text mx-auto mt-5'>Часто задаваемые вопросы</p>
          <div className='row mr-lg-5 mr-md-0 mr-sm-0'>
              <div className='col-lg-6 col-md-5'>
                  <ElementWithShadow
                      className='col-lg-8 col-sm-12 col-md-12'
                      height='300px'
                      text={'123'}
                  />
                  <ElementWithShadow
                      className='col-lg-8 col-md-12 col-sm-12 second-faq-box'
                      height='300px'
                      text={'321'}
                  />
              </div>
              {!workerDisplay && <img
                  className='col-lg-6 col-md-7 col-sm-12 worker-image'
                  src={worker}
              />}
          </div>
      </div>
  );
}
