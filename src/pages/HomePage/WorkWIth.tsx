import React, {useContext} from 'react';
import astarta from '../../images/workWithUs/astarta.png';
import cygnet from '../../images/workWithUs/cygnet.png';
import emc from '../../images/workWithUs/emc.png';
import interpipe from '../../images/workWithUs/interpipe.png';
import kernel from '../../images/workWithUs/kernel.png';
import mxp from '../../images/workWithUs/mxp.png';
import nibulon from '../../images/workWithUs/nibulon.png';
import '../HomePage/styles/WorkWIth.css';
import {SizeContext} from "../../lib/sizeContext";

export function WorkWithComponent() {
  const [smallSize] = useContext(SizeContext);

  const icons = [nibulon, mxp, astarta, interpipe, emc, kernel, cygnet];

  return (
      <div>
          <div>
              <p className='container justify-content-center how-do-we-work-text'>С нами сотрудничают</p>
              <div className='container row mx-auto'>
                  <div className='col-12 row d-flex justify-content-center'>
                      {icons.map((icon, index) => {
                          return <div className='col d-flex justify-content-center' key={index}>
                              <img src={icon} className='work-with-us-img'/>
                          </div>
                      })}
                  </div>
              </div>
          </div>
      </div>
  );
}
