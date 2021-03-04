import React from 'react';
import './styles/ContactsAndAsk.css'
import google_map from '../../images/google_map.png'

export function ContactsAndAsk() {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
  return (
      <div className='col-12 d-flex justify-content-center'>
          <div className='main-form' style={{backgroundImage:`url(${google_map})`}}>
              <div className='shadow-contacts'/>
              <div className='contacts'>
                  <div className='d-flex justify-content-center'>
                      <p className='contacts-header '>Контакты</p>
                  </div>
                  <div className='d-flex justify-content-center'>
                      <p className='contacts-info'>Звоните! Наш менеджер проконсультирует вас по всем вопросам.</p>
                  </div>
                  <div className='col-12'>
                      <div className='contact-cloud-shadow'/>
                      <div className='contact-cloud-shadow-2'/>
                      <div className='contact-cloud'>
                      </div>
                      <p className='contact-cloud-text ml-5'>
                          +38 (067) 695 10 98
                      </p>
                  </div>
                  <div className='col-12'>
                      <div className='contact-cloud-shadow'/>
                      <div className='contact-cloud-shadow-2'/>
                      <div className='contact-cloud'>
                      </div>
                      <p className='contact-cloud-text ml-5'>
                          ----@gmail.com
                      </p>
                  </div>
                  <div className='col-12'>
                      <div className='contact-cloud-shadow'/>
                      <div className='contact-cloud-shadow-2'/>
                      <div className='contact-cloud'>
                      </div>
                      <p className='contact-cloud-text'>
                          г. Харьков, Проспект Московский, 51, офис 5
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
