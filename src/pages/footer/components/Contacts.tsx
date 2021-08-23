import React, {useRef} from "react";
import {message, Tooltip} from "antd";
import { CopyOutlined } from '@ant-design/icons';

export const ContactsFooter = () => {

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
                <p className='contacts-header'>Контакты</p>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='contacts-info'>Звоните! Наш менеджер проконсультирует вас по всем вопросам.</p>
            </div>
            <div className='col-12'>
                <div className='contact-cloud  align-center-full'>
                    <p className='contact-cloud-text ml-3'>
                        <a href={'tel:380676951098'} ref={phoneRef as React.RefObject<HTMLAnchorElement>}>+38 (067) 695 10 98</a>
                        <span className='ml-2'>
                                        <Tooltip title='Скопировать номер телефона' placement='bottom'>
                                            <CopyOutlined onClick={() => copyToClipboard(phoneRef)}/>
                                        </Tooltip>
                                    </span>
                    </p>
                </div>
            </div>
            <div className='col-12'>
                <div className='contact-cloud  align-center-full'>
                    <p className='contact-cloud-text ml-4'>
                        <a id='contacts-copy-email' href={'mailto:sitam.office@gmail.com'} ref={emailRef as React.RefObject<HTMLAnchorElement>}>sitam.office@gmail.com</a>
                        <span className='ml-2'>
                                    <Tooltip title='Скопировать e-mail' placement='top'>
                                        <CopyOutlined onClick={() => copyToClipboard(emailRef)}/>
                                    </Tooltip>
                                </span>
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
    )
};