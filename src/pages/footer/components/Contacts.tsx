import React, {useContext, useRef} from "react";
import {message, Tooltip} from "antd";
import { CopyOutlined } from '@ant-design/icons';
import '../styles/ContactsAndAsk.css'
import {LanguageContext} from "../../../lib/languageContext";

export const ContactsFooter = () => {
    const [language] = useContext(LanguageContext);
    const data = language === 'ua' ? {
        title: 'Контакти',
        copy: 'Скопіювати номер телефону',
        callUs: 'Дзвоніть! Наш менеджер проконсультує вас за усіма питаннями',
        copyEmail: 'Скопіювати e-mail',
        address: 'м. Харьков, Проспект Московський, 51, офіс 5',
    } : {
        title: 'Контакты',
        copy: 'Скопировать номер телефона',
        callUs: 'Звоните! Наш менеджер проконсультирует вас по всем вопросам.',
        copyEmail: 'Скопировать e-mail',
        address: 'г. Харьков, Проспект Московский, 51, офис 5',
    };
    const emailRef = useRef<HTMLAnchorElement>(null);
    const phoneRef = useRef<HTMLAnchorElement>(null);

    const copyToClipboard = async (ref: any) => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(ref.current);
        selection!.removeAllRanges();
        selection!.addRange(range);
        document.execCommand('copy');
        selection!.removeAllRanges();
        await message.success('Скопировано');
    };

    return (
        <div className='contacts'>
            <div className='d-flex justify-content-center'>
                <p className='contacts-header'>{data.title}</p>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='contacts-info'>{data.callUs}</p>
            </div>
            <div className='col-12'>
                <div className='contact-cloud  align-center-full container'>
                    <p className='contact-cloud-text ml-3'>
                        <a href='tel:380505184007' title='Phone' ref={phoneRef as React.RefObject<HTMLAnchorElement>}>+38 (050) 518 40 07</a>
                        <span className='ml-2'>
                                        <Tooltip title={data.copy} placement='bottom'>
                                            <CopyOutlined onClick={() => copyToClipboard(phoneRef)}/>
                                        </Tooltip>
                                    </span>
                        </p>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='contact-cloud  align-center-full container'>
                        <p className='contact-cloud-text ml-4'>
                            <a id='contacts-copy-email' href='mailto:sitam.office@gmail.com' title='Email' ref={emailRef}>sitam.office@gmail.com</a>
                            <span className='ml-2'>
                                    <Tooltip title={data.copyEmail} placement='top'>
                                        <CopyOutlined onClick={() => copyToClipboard(emailRef)}/>
                                    </Tooltip>
                                </span>
                    </p>
                </div>
            </div>
            <div className='col-12'>
                <div className='contact-cloud  align-center-full container'>
                    <p className='contact-cloud-text'>
                        {data.address}
                    </p>
                </div>
            </div>
        </div>
    )
};
