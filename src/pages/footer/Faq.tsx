import React from 'react';
import './styles/Faq.css'
import {ElementWithShadow} from "./components/ElementWithShadow";
import {faqData, IFaqData} from "../../constdata/FaqData";

import {Collapse} from 'antd';

const { Panel } = Collapse;

export function FaqComponent() {
    return (
      <>
          <p className='faq-header-text mx-auto'>Часто задаваемые вопросы</p>
          <div className='d-flex justify-content-center container faq-container'>
              <div className='col-12' style={{paddingRight: "0", paddingLeft: "0"}}>
                      <ElementWithShadow
                          className='col-12 mb-5'
                          text={<Collapse accordion
                                          defaultActiveKey='0'
                                          bordered={false}
                                          ghost
                                          expandIconPosition="right"
                                          style={{flexGrow: 1}}>
                              {
                                  faqData.map((element: IFaqData, index: number) => {
                                      return <Panel header={element.buttonText}
                                                    key={index}
                                                    showArrow={true}
                                                    className='faq-container-panel'>
                                          <p className='ml-2'>{element.text}</p>
                                      </Panel>
                                  })
                              }
                          </Collapse> }
                          textClassName='d-flex flex-wrap container'
                      />
                  </div>
          </div>
      </>
  );
}
