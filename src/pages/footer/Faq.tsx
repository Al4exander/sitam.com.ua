import React, {useState} from 'react';
import './styles/Faq.css'
import {ElementWithShadow} from "./components/ElementWithShadow";
import {faqData, IFaqData} from "../../constdata/FaqData";
import worker from '../../images/Worker.png';
import workerWithout from '../../images/worker-cut.png';
import FaqInput from '../../images/FaqInput.png';

import { Collapse } from 'antd';

const { Panel } = Collapse;

export function FaqComponent(props: any) {
    let [selectedRow, setSelectedRow] = useState(0);

    const clickedRows = () => {
        return faqData.map((element: IFaqData, index: number) => {
            return <div className={`col-12 mt-2 faq-text-button ${index === selectedRow ? 'faq-selected-item' : ''}`} onClick={() => setSelectedRow(index)}>{element.buttonText}</div>;
        })
    };

    return (
      <>
          <p className='faq-header-text mx-auto mt-5'>Часто задаваемые вопросы</p>
          <div className='row col-lg-12 col-sm-12 col-md-12 ml-lg-6 d-flex justify-content-end'>
              { props.smallSize ?
                  <div className='col-lg-12 col-md-12 col-sm-12' style={{paddingRight: "0", paddingLeft: "0"}}>
                      <ElementWithShadow
                          key={1}
                          className='col-lg-11 col-sm-11 col-md-11 col-11 ml-4'
                          text={<Collapse accordion defaultActiveKey='0' bordered={false} ghost>
                              {
                                  faqData.map((element: IFaqData, index: number) => {
                                      return <Panel header={element.buttonText} key={index} showArrow={false}>
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
                          key={1}
                          className='col-lg-12 col-sm-12 col-md-12'
                          text={clickedRows()}
                          textClassName='row container'
                      />
                      <ElementWithShadow
                          key={2}
                          className='col-lg-12 col-md-12 col-sm-12 second-faq-box'
                          text={faqData[selectedRow].text}
                      />
                  </div>
                      <img
                      className='col-lg-6 col-md-6 col-sm-8 ml-5 pl-5 worker-image'
                      src={worker}/>
                  </>}
          </div>
      </>
  );
}
