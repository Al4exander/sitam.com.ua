import React, {useState} from 'react';
import './styles/ContactsAndAsk.css'
import google_map from '../../images/common/google_map.png'
import {AskQuestionsInput} from "../../elements/inputFIeld/AskQuestionsInput";
import {MessageField} from "./components/MessageField";
import {SendButton} from "./components/SendButton";
import {sendMail} from "./MailFunctions";
import {message} from "antd";

export function ContactsAndAsk() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [textMessage, setTextMessage] = useState('');
    let [loading, setLoading] = useState(false);

    const handleNameChange = (e: any) => setName(e.target.value);
    const handleEmailChange = (e: any) => setEmail(e.target.value);
    const handleSubjectChange = (e: any) => setSubject(e.target.value);
    const handleTextMessageChange = (e: any) => setTextMessage(e.target.value);

    const handleSendClick = async () => {
        setLoading(true);
        await sendMail({
            name,
            email,
            subject,
            textMessage
        });
        setLoading(false);
        setName('');
        setEmail('');
        setSubject('');
        setTextMessage('');

        await message.success('Ваше письмо успешно отправлено!');
    };

    return (
      <div id="contacts" key='contacts' className='col-12 d-flex justify-content-center main-form-frame'>
          <div className='main-form w-100' style={{backgroundImage:`url(${google_map})`}}>
              <div className='row'>
                  <div className='contacts-top'>
                      <div className='contacts'>
                          <div className='d-flex justify-content-center'>
                              <p className='contacts-header'>Контакты</p>
                          </div>
                          <div className='d-flex justify-content-center'>
                              <p className='contacts-info'>Звоните! Наш менеджер проконсультирует вас по всем вопросам.</p>
                          </div>
                          <div className='col-12'>
                              <div className='contact-cloud  align-center-full'>
                                  <p className='contact-cloud-text'>
                                      +38 (067) 695 10 98
                                  </p>
                              </div>
                          </div>
                          <div className='col-12'>
                              <div className='contact-cloud  align-center-full'>
                                  <p className='contact-cloud-text'>
                                      sitam.office@gmail.com
                                  </p>
                              </div>
                          </div>
                          <div className='col-12'>
                              <div className='contact-cloud  align-center-full'>
                                  <p className='contact-cloud-text'>
                                      г. Харьков, Проспект Московский, 51, офис 5
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='ask-question d-flex flex-wrap'>
                      <div className='align-center-full row col-12'>
                          <div className='ask-question-header col-12'>Задать вопрос</div>
                          <div className='ask-question-under-header align-center-full col-12 mt-4'>Если у Вас есть вопросы, пожалуйста, напишите нам:</div>
                      </div>
                      <div className='row mt-3 ml-1 mr-1'>
                          <AskQuestionsInput className='col-4'
                                             placeholder='Имя'
                                             value={name}
                                             onChange={handleNameChange}
                          />
                          <AskQuestionsInput className='col-4'
                                             placeholder='E-mail'
                                             value={email}
                                             onChange={handleEmailChange}
                          />
                          <AskQuestionsInput className='col-4'
                                             placeholder='Тема письма'
                                             value={subject}
                                             onChange={handleSubjectChange}
                          />
                      </div>
                      <MessageField className='col-12'
                                    value={textMessage}
                                    onChange={handleTextMessageChange}
                      />
                      <SendButton loading={loading} onClick={handleSendClick} className='col-12 mb-1 align-center-full'/>
                  </div>
              </div>
          </div>
      </div>
  );
}
