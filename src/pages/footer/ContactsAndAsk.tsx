import React from 'react';
import './styles/ContactsAndAsk.css'
import google_map from '../../images/google_map.png'
import {AskQuestionsInput} from "../../elements/inputFIeld/AskQuestionsInput";
import {MessageField} from "./components/MessageField";
import {SendButton} from "./components/SendButton";

export function ContactsAndAsk() {
  return (
      <div className='col-12 d-flex justify-content-center'>
          <div className='main-form' style={{backgroundImage:`url(${google_map})`}}>
              <div className='row'>
                  <div>
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
                  <div className='ask-question-shadow'/>
                  <div className='ask-question'>
                      <div className='d-flex justify-content-center'>
                          <p className='ask-question-header'>Задать вопрос</p>
                      </div>
                      <div className='d-flex justify-content-center'>
                          <p className='ask-question-under-header'>Если у Вас есть вопросы, пожалуйста, напишите нам:</p>
                      </div>
                      <div className='row justify-content-between'>
                          <AskQuestionsInput left='5%' placeholder='Имя'/>
                          <AskQuestionsInput left='38%' placeholder='E-mail'/>
                          <AskQuestionsInput left='71%' placeholder='Тема письма'/>
                      </div>
                      <MessageField/>
                      <SendButton/>
                  </div>
              </div>
          </div>
      </div>
  );
}
