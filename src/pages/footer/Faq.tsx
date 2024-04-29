import React, {useContext} from 'react';
import './styles/Faq.css'
import {ElementWithShadow} from "./components/ElementWithShadow";
import {faqData, IFaqData} from "../../constdata/FaqData";
import {faqData as faqDataUA} from "../../constdata/FaqDataUA";

import {Collapse} from 'antd';
import {LanguageContext} from "../../lib/languageContext";

const { Panel } = Collapse;

export function FaqComponent() {
    const [language] = useContext(LanguageContext);
    const data = language === 'ua' ? faqDataUA : faqData;
    const title = language === 'ua' ? 'Поширені запитання' : 'Часто задаваемые вопросы';

    return (
      <>
          <p className='faq-header-text mx-auto'>{title}</p>
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
                                  data.map((element: IFaqData, index: number) => {
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
