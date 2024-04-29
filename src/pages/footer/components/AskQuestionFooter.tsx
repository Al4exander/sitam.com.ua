import React, {useContext, useState} from 'react';
import {AskQuestionsInput} from "../../../elements/inputFIeld/AskQuestionsInput";
import {MessageField} from "./MessageField";
import {SendButton} from "./SendButton";
import {sendMail} from "../MailFunctions";
import {message} from "antd";
import '../styles/ContactsAndAsk.css';
import {LanguageContext} from "../../../lib/languageContext";

export function AskQuestionFooter() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [textMessage, setTextMessage] = useState('');
    let [loading, setLoading] = useState(false);
    const [language] = useContext(LanguageContext);

    const data = language === 'ua' ? {
        title: 'Задати питання',
        subtitle: 'Якщо у вас є питання, будь ласка, напишіть нам:',
        name: 'Ім\'я',
        email: 'E-mail',
        theme: 'Тема',
        send: {
            success: 'Ваше повідомлення успішно надіслано!',
            failedName: 'Поле "Ім\'я" повинно бути заповненим',
            failedMessage: 'Поле "Повідомлення" повинно бути заповненим',
            failedTheme: 'Поле "Тема" повинно бути заповненим',
            failedEmail: 'Поле "E-mail" повинно бути заповненим',
        }
    } : {
        title: 'Задать вопрос',
        subtitle: 'Если у Вас есть вопросы, пожалуйста, напишите нам:',
        name: 'Имя',
        email: 'E-mail',
        theme: 'Тема',
        send: {
            success: 'Ваше письмо успешно отправлено!',
            failedName: 'Поле "Имя" должно быть заполнено',
            failedMessage: 'Поле "Сообщение" должно быть заполнено',
            failedTheme: 'Поле "Тема письма" должно быть заполнено',
            failedEmail: 'Поле "E-mail" должно быть заполнено',
        }
    };

    const handleNameChange = (e: any) => setName(e.target.value);
    const handleEmailChange = (e: any) => setEmail(e.target.value);
    const handleSubjectChange = (e: any) => setSubject(e.target.value);
    const handleTextMessageChange = (e: any) => setTextMessage(e.target.value);

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

                        await message.success(data.send.success);
                    } else await message.error(data.send.failedMessage);
                } else await message.error(data.send.failedTheme);
            } else await message.error(data.send.failedEmail);
        } else await message.error(data.send.failedName);
    };

    return (
        <div className='ask-question d-flex flex-wrap'>
            <div className='align-center-full row col-12'>
                <div className='ask-question-header col-12'>{data.title}</div>
                <div className='ask-question-under-header align-center-full col-12 mt-4'>{data.subtitle}</div>
            </div>
            <div className='row mt-3 ml-1 mr-1'>
                <AskQuestionsInput className='col-12 col-lg-4 col-md-4 col-sm-12'
                                   placeholder={data.name}
                                   value={name}
                                   onChange={handleNameChange}
                />
                <AskQuestionsInput className='col-12 col-lg-4 col-md-4 col-sm-12'
                                   placeholder={data.email}
                                   value={email}
                                   onChange={handleEmailChange}
                />
                <AskQuestionsInput className='col-12 col-lg-4 col-md-4 col-sm-12'
                                   placeholder={data.theme}
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
  );
}
