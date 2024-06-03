import React, {useContext} from 'react';
import './styles/OurAdvantages.css'
import {
    IAdvantagesData,
    ourAdvantagesData,
} from "../../constdata/OurAdvantagesData";
import {
    ourAdvantagesData as ourAdvantagesDataUA,
} from "../../constdata/OurAdvantagesDataUA";
import {CardBlock} from "./components/CardBlock";
import {LanguageContext} from "../../lib/languageContext";

export function OurAdvantages() {
    const [language] = useContext(LanguageContext);
    const data = language === 'ua' ? ourAdvantagesDataUA : ourAdvantagesData;
    const title = language === 'ua' ? 'Наші переваги' : 'Наши преимущества';

    return (
      <div className='adwantages'>
          <div className='advantages-header d-flex justify-content-center mb-4 mt-5'>{title}</div>
          <div className='d-flex flex-wrap ml-3'>
              {data.map((data: IAdvantagesData, index: number) => {
                  return <CardBlock
                      key={index}
                      className='col-lg-4 col-md-12 col-sm-12 card-horizontal'
                      image={data.image}
                      textClassName={'advantages-text'}
                      imageTitle={data.imageTitle}
                      text={data.text}
                  />;
              })}
          </div>
      </div>
  );
}
