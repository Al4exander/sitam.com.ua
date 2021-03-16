import React from 'react';
import './styles/ContactsAndAsk.css'
import google_map from '../../images/google_map.png'
import {AskQuestionsInput} from "../../elements/inputFIeld/AskQuestionsInput";
import {MessageField} from "./components/MessageField";
import {ShadowButton} from "../header/components/ShadowButton";
import {SendButton} from "./components/SendButton";

export function ContactsAndAsk() {
  return (
      <div id="contacts" key='contacts' className='col-12 d-flex justify-content-center main-form-frame'>
          <div className='main-form w-100' style={{backgroundImage:`url(${google_map})`}}>
              <div className='row'>
                  <div className='contacts-top'>
                      <div className='shadow-contacts'/>
                      <div className='contacts'>
                          <div className='d-flex justify-content-center'>
                              <p className='contacts-header'>Контакты</p>
                          </div>
                          <div className='d-flex justify-content-center'>
                              <p className='contacts-info'>Звоните! Наш менеджер проконсультирует вас по всем вопросам.</p>
                          </div>
                          <div className='col-12 align-center-full'>
                              <div className='contact-cloud-shadow'/>
                              <div className='contact-cloud-shadow-2'/>
                              <div className='contact-cloud'>
                              </div>
                              <p className='contact-cloud-text'>
                                  +38 (067) 695 10 98
                              </p>
                          </div>
                          <div className='col-12 align-center-full'>
                              <div className='contact-cloud-shadow'/>
                              <div className='contact-cloud-shadow-2'/>
                              <div className='contact-cloud'>
                              </div>
                              <p className='contact-cloud-text'>
                                  ----@gmail.com
                              </p>
                          </div>
                          <div className='col-12 align-center-full'>
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
                  <div className='ask-question-shadow'/>
                  <div className='ask-question d-flex flex-wrap'>
                      <div className='align-center-full row col-12'>
                          <div className='ask-question-header col-12'>Задать вопрос</div>
                          <div className='ask-question-under-header align-center-full col-12 mt-4'>Если у Вас есть вопросы, пожалуйста, напишите нам:</div>
                      </div>
                      <div className='col-12 row mt-3'>
                          <AskQuestionsInput className='col-4' placeholder='Имя'/>
                          <AskQuestionsInput className='col-4' placeholder='E-mail'/>
                          <AskQuestionsInput className='col-4' placeholder='Тема письма'/>
                      </div>
                      <MessageField className='col-12'/>
                      <SendButton className='col-12 mb-1 align-center-full'/>
                  </div>
              </div>
          </div>
      </div>
  );
}
