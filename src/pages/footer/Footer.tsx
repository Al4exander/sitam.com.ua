import React, {useContext} from 'react';
import './styles/footer.css'
import {Icons} from "../header/components/socialContacts/Icons";
import {LanguageContext} from "../../lib/languageContext";

export function Footer() {
    const [language] = useContext(LanguageContext);
    const text = language === 'ua' ? '2021 © Всі права захищені «Сітам»' : '2021 © Все права защищены «Ситам»';
  return (
      <div className='sitam-footer'>
          <div className='d-flex flex-wrap align-center-full'>
              <div className='mt-3 mb-3 w-100'>
                  <Icons iconClassName='col-lg-1 col-md-1 col-3' className="d-flex flex-wrap align-center-full"/>
              </div>
              <div className='d-flex justify-content-center'>{text}</div>
          </div>
      </div>
  );
}
