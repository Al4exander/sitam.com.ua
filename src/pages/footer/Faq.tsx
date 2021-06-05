import React, {useContext, useState} from 'react';
import './styles/Faq.css'
import {ElementWithShadow} from "./components/ElementWithShadow";
import {faqData, IFaqData} from "../../constdata/FaqData";
import worker from '../../images/common/Worker.png';
import workerWithout from '../../images/common/worker-cut.png';
import FaqInput from '../../images/common/FaqInput.png';

import { Collapse } from 'antd';
import {SizeContext} from "../../lib/sizeContext";

const { Panel } = Collapse;

export function FaqComponent() {
    let [selectedRow, setSelectedRow] = useState(0);
    const [smallSize] = useContext(SizeContext);

    const clickedRows = () => {
        return faqData.map((element: IFaqData, index: number) => {
            return <div className={`col-12 mt-2 faq-text-button ${index === selectedRow ? 'faq-selected-item' : ''}`}
                        onClick={() => setSelectedRow(index)}
                        key={index}>
                            {element.buttonText}
                        </div>;
        })
    };

    return (
      <>
          <p className='faq-header-text mx-auto mt-5'>Часто задаваемые вопросы</p>
          <div className='row col-lg-12 col-sm-12 col-md-12 ml-lg-6 d-flex justify-content-end'>
              { smallSize ?
                  <div className='col-lg-12 col-md-12 col-sm-12' style={{paddingRight: "0", paddingLeft: "0"}}>
                      <ElementWithShadow
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
                  </div>: <>
                  <div className='col-lg-11 col-md-12 col-sm-12 row justify-content-center'>
                      <ElementWithShadow
                          className='col-lg-4 col-sm-12 col-md-5 mr-5'
                          text={clickedRows()}
                          textClassName='row container'
                      />
                      <ElementWithShadow
                          className='col-lg-4 col-md-5 col-sm-12'
                          text={faqData[selectedRow].text}
                      />
                  </div>
                  </>}
          </div>
      </>
  );
}
