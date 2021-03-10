import React, {useEffect, useState} from 'react';
import './styles/Faq.css'
import {ElementWithShadow} from "./components/ElementWithShadow";
import {faqData, IFaqData} from "../../constdata/FaqData";
import worker from '../../images/Worker.png';
import workerWithout from '../../images/worker-cut.png';
import FaqInput from '../../images/FaqInput.png';

import { Collapse } from 'antd';

const { Panel } = Collapse;

export function FaqComponent() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 800);
    let [selectedRow, setSelectedRow] = useState(0);
    let [workerDisplay, setWorkerDisplay] = useState(window.innerWidth < 1100);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 800) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
        if(window.innerWidth < 1100) {
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
      <div>
          <p className='faq-header-text mx-auto mt-5'>Часто задаваемые вопросы</p>
          <div className='row col-lg-12 col-sm-12 col-md-12 ml-lg-6 d-flex justify-content-end'>
              { smallSize ?
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                      <ElementWithShadow
                          className='col-lg-12 col-sm-12 col-md-12'
                          height='800px'
                          text={<Collapse accordion defaultActiveKey='card-0' bordered={false} ghost>
                              {
                                  faqData.map((element: IFaqData, index: number) => {
                                      return <Panel header={element.buttonText} key={`card-${index}`} showArrow={false}>
                                          <p className='ml-2'>{element.text}</p>
                                      </Panel>
                                  })
                              }
                          </Collapse> }
                          textClassName='row container'
                      />
                      <img
                          className='col-12 worker-image'
                          src={workerWithout}
                      />
                  </div>: <>
                  <img
                      className='faq-input-img'
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
                          className='col-lg-12 col-md-12 col-sm-12 second-faq-box'
                          height={smallSize ? '450px' : '300px'}
                          text={faqData[selectedRow].text}
                      />
                  </div>
                      <img
                      className='col-lg-6 col-md-6 col-sm-8 ml-5 pl-5 worker-image'
                      src={worker}/>
                  </>}
          </div>
      </div>
  );
}
