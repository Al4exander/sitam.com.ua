import React from 'react';
import './styles/Footer.css'
import {Icons} from "../header/components/socialContacts/Icons";

export function Footer() {
  return (
      <div className='sitam-footer'>
          <div className='d-flex flex-wrap align-center-full'>
              <div className='mt-3 mb-3 w-100'>
                  <Icons iconClassName='col-lg-1 col-md-1 col-3' className="d-flex flex-wrap align-center-full"/>
              </div>
              <div className='d-flex justify-content-center'>2021 © Все права защищены «Ситам»</div>
          </div>
      </div>
  );
}
