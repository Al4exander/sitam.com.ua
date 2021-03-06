import React, {useEffect, useState} from 'react';
import './styles/Faq.css'
import {ElementWithShadow} from "./components/ElementWithShadow";
import {faqData, IFaqData} from "../../constdata/FaqData";
import worker from '../../images/Worker.png';
import WorkerWithout from '../../images/WorkerWithout.png';
import FaqInput from '../../images/FaqInput.png';

export function FaqComponent() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 1100 && window.innerWidth > 576);
    let [selectedRow, setSelectedRow] = useState(0);
    let [workerDisplay, setWorkerDisplay] = useState(window.innerWidth < 1000);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 1100 && window.innerWidth > 576) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
        if(window.innerWidth < 700) {
            !workerDisplay && setWorkerDisplay(true);
        } else {
            workerDisplay && setWorkerDisplay(false);
        }
    };

    const clickedRows = () => {
        return faqData.map((element: IFaqData, index: number) => {
            return <div className={`col-12 mt-2 faq-text-button ${index === selectedRow ? 'faq-selected-item' : ''}`} onClick={() => setSelectedRow(index)}>{element.buttonText}</div>;
        })
    };

    return (
      <div className='ml-lg-5 ml-md-0 ml-sm-0'>
          <p className='faq-header-text mx-auto mt-5'>Часто задаваемые вопросы</p>
          <div className='row container col-lg-10 col-sm-12 col-md-12 ml-lg-6 mx-lg-auto mx-sm-0 mx-md-0'>
              <img
                  className=' faq-input-img'
                  src={FaqInput}
              />
              <div className='col-lg-4 col-md-4 col-sm-12'>
                  <ElementWithShadow
                      className='col-lg-12 col-sm-12 col-md-12'
                      height='300px'
                      text={clickedRows()}
                      textClassName='row container'
                  />
                  <ElementWithShadow
                      className='col-lg-12 col-md-12 col-sm-12 mt-lg-5 mt-md-0 mt-sm-0 second-faq-box'
                      height={smallSize ? '450px' : '300px'}
                      text={faqData[selectedRow].text}
                  />
              </div>
              {!workerDisplay && <img
                  className='col-lg-7 col-md-7 col-sm-8 worker-image'
                  src={worker}
              />}
          </div>
      </div>
  );
}
