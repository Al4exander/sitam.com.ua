import React, {useContext, useState} from 'react';
import './styles/ContactsAndAsk.css'
import {AskQuestionsInput} from "../../elements/inputFIeld/AskQuestionsInput";
import {MessageField} from "./components/MessageField";
import {SendButton} from "./components/SendButton";
import {sendMail} from "./MailFunctions";
import {message} from "antd";
import map from '../../images/common/map.png'
import smallMap from '../../images/common/small_map.png'
import {SizeContext} from "../../lib/sizeContext";
import {ContactsFooter} from "./components/Contacts";

export function ContactsAndAsk() {
    const [smallSize] = useContext(SizeContext);

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [textMessage, setTextMessage] = useState('');
    let [loading, setLoading] = useState(false);

    const handleNameChange = (e: any) => setName(e.target.value);
    const handleEmailChange = (e: any) => setEmail(e.target.value);
    const handleSubjectChange = (e: any) => setSubject(e.target.value);
    const handleTextMessageChange = (e: any) => setTextMessage(e.target.value);

    const mapLink = 'https://www.google.com/maps/place/Московский+просп.,+51,+Харьков,+Харьковская+область,+61000/@49.9880973,36.2488262,17z/data=!4m5!3m4!1s0x4127a092e6348827:0xaf2b56c5bd388dde!8m2!3d49.9897357!4d36.2499913';

    const handleSendClick = async () => {
        if(name) {
            if(email) {
                if(subject) {
                    if(textMessage) {
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
                    } else await message.error('Поле "Сообщение" должно быть заполнено');
                } else await message.error('Поле "Тема письма" должно быть заполнено');
            } else await message.error('Поле "E-mail" должно быть заполнено');
        } else await message.error('Поле "Имя" должно быть заполнено');
    };

    const handleMapClick = (e: any) => {
        if(e.target.className === 'main-form') window.open(mapLink);
    };

    return (
      <div id="contacts" key='contacts' className='col-12 d-flex justify-content-center main-form-frame'>
          <div className='main-form' style={{backgroundImage:`url(${smallSize ? smallMap : map})`}} onMouseDown={handleMapClick}>
              <div className='row'>
                  <ContactsFooter/>
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
                      <MessageField className='col-12 mb-3 mb-xl-0 mb-lg-0 mb-sm-0 mb-md-0'
                                    value={textMessage}
                                    onChange={handleTextMessageChange}
                      />
                      <SendButton loading={loading} onClick={handleSendClick} className='col-12 align-center-full'/>
                  </div>
              </div>
          </div>
      </div>
  );
}
