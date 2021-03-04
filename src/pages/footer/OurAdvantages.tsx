import React from 'react';
import './styles/OurAdvantages.css'
import {
    IAdvantagesData,
    ourAdvantagesFirstRowData,
    ourAdvantagesSecondRowData
} from "../../constdata/OurAdvantagesData";

export function OurAdvantages() {
  return (
      <div>
          <div className='advantages-header d-flex justify-content-center mb-4 mt-5'>Наши преимущества</div>
          <div className='col-12 row'>
              {ourAdvantagesFirstRowData.map((data: IAdvantagesData) => {
                  return <div className='col-4 d-flex justify-content-center'>
                      <img src={data.image}/>
                      <p className='advantages-text'>{data.text}</p>
                  </div>
              })}
          </div>
          <div className='col-12 row'>
              <div className='col-4 d-flex justify-content-center'>
                  <img src={ourAdvantagesSecondRowData[0].image}/>
                  <p className='advantages-text'>{ourAdvantagesSecondRowData[0].text}</p>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                  <img src={ourAdvantagesSecondRowData[1].image} className='ml-p-15 pl-2'/>
                  <p className='advantages-text ml-p-8'>{ourAdvantagesSecondRowData[0].text}</p>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                  <img src={ourAdvantagesSecondRowData[2].image} className='ml-2'/>
                  <p className='advantages-text ml-4'>{ourAdvantagesSecondRowData[0].text}</p>
              </div>
          </div>
      </div>
  );
}
