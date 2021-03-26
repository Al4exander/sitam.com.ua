import React from 'react';
import './styles/OurAdvantages.css'
import {
    IAdvantagesData,
    ourAdvantagesData,
} from "../../constdata/OurAdvantagesData";
import {CardBlock} from "./components/CardBlock";

export function OurAdvantages() {
  return (
      <>
          <div className='advantages-header d-flex justify-content-center mb-4 mt-5'>Наши преимущества</div>
          <div className='col-12 row mx-auto'>
              {ourAdvantagesData.map((data: IAdvantagesData, index: number) => {
                  return <CardBlock
                      key={index}
                      className='col-lg-4 col-md-12 col-sm-12 card-horizontal'
                      image={data.image}
                      textClassName={'advantages-text'}
                      text={data.text}
                  />;
              })}
          </div>
      </>
  );
}