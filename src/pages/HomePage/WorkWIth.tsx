import React, {useContext} from 'react';
import astarta from '../../images/workWithUs/astarta.png';
import cygnet from '../../images/workWithUs/cygnet.png';
import emc from '../../images/workWithUs/emc.png';
import interpipe from '../../images/workWithUs/interpipe.png';
import kernel from '../../images/workWithUs/kernel.png';
import mxp from '../../images/workWithUs/mxp.png';
import nibulon from '../../images/workWithUs/nibulon.png';
import '../HomePage/styles/WorkWIth.css';
import {LanguageContext} from "../../lib/languageContext";

export function WorkWithComponent() {
  const icons = [nibulon, mxp, astarta, interpipe, emc, kernel, cygnet];
    const [language] = useContext(LanguageContext);
    const title = language === 'ua' ? 'З нами співпрацюють' : 'С нами сотрудничают';

  return (
      <div>
          <div>
              <p className='container justify-content-center how-do-we-work-text'>{title}</p>
              <div className='container row mx-auto box-shadow'>
                  <div className='col-12 row d-flex justify-content-center'>
                      {icons.map((icon, index) => {
                          return <div className='col d-flex justify-content-center' key={index}>
                              <img src={icon}
                                   className='work-with-us-img'
                                   title={`Company_${index}`}
                                   alt={`Company_${index}`}
                                   loading="lazy"
                              />
                          </div>
                      })}
                  </div>
              </div>
          </div>
      </div>
  );
}
