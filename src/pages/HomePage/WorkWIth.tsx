import React from 'react';
import astarta from '../../images/workWithUs/astarta.png';
import cygnet from '../../images/workWithUs/cygnet.png';
import emc from '../../images/workWithUs/emc.png';
import interpipe from '../../images/workWithUs/interpipe.png';
import kernel from '../../images/workWithUs/kernel.png';
import mxp from '../../images/workWithUs/mxp.png';
import nibulon from '../../images/workWithUs/nibulon.png';
import Coworking from '../../svgFiles/Coworking.svg';
import '../HomePage/styles/WorkWIth.css';

export function WorkWithComponent() {
  return (
      <div>
          <div className='centered'>
              <div className='container row mx-lg-auto mx-md-0 mx-sm-0'>
                <div className='col-lg-6 col-sm-6 col-md-8 '>
                    <img className='work-with-us-img' src={Coworking}/>
                </div>
                <div className='col-lg-4 col-sm-8 col-md-4'>
                    <div className='col-6 mb-lg-5 mb-md-5'>
                        <img src={nibulon}/>
                    </div>
                    <div className='col-6 mt-sm-5'>
                        <img src={interpipe}/>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-4 col-md-7'>
                      <div className='col-6 col-sm-6 mb-lg-5'>
                          <img src={mxp}/>
                      </div>
                      <div className='col-6 col-sm-6 mt-sm-5'>
                          <img src={emc}/>
                      </div>
                </div>
                  <div className='container row ml-lg-5 pl-lg-5 col-lg-12 col-md-4 col-sm-6 ml-sm-4 mt-sm-5 mt-lg-0 mt-md-0'>
                      <div className='col-lg-4 col-sm-8 col-md-12'>
                          <img src={astarta}/>
                      </div>
                      <div className='col-lg-4 col-md-12 col-sm-12 mt-sm-5 mt-lg-0 mt-md-5'>
                          <img src={kernel}/>
                      </div>
                      <div className='col-lg-4 col-md-12 col-sm-12 mt-sm-5 mt-lg-0 mt-md-5'>
                          <img src={cygnet}/>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
}
