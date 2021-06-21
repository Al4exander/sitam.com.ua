import React, {useContext, useRef} from 'react';
import {Icons} from "./components/socialContacts/Icons";
import {SizeContext} from "../../lib/sizeContext";
import {Tooltip, message}from "antd";
import { CopyOutlined } from '@ant-design/icons';

import './styles/Contacts.css';

export function Contacts() {
    const [smallSize] = useContext(SizeContext);
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
        <div className='mt-5'>
            {!smallSize && <div className='container mx-auto row mb-5'>
                <div className='row col-lg-7 col-md-8 mt-2 d-flex justify-content-between'>
                    <div className="address col-lg-6 col-md-12">
                        <div className='row'>
                            <p className="address-box-text col-12 align-center-full mt-3">г. Харьков, Проспект Московский, 51, офис 5</p>
                            <p className="address-box-text col-12 align-center-full">Работаем по всей Украине!</p>
                        </div>
                    </div>
                    <div className="address col-lg-5 mt-sm-5 mt-lg-0 mt-md-3 col-md-12 col-sm-12 pl-4">
                        <div className='row'>
                            <div className='col-12 align-center-full mt-3 address-box-text'>
                                <a id='contacts-copy-email' href={'mailto:sitam.office@gmail.com'} ref={emailRef as React.RefObject<HTMLAnchorElement>}>sitam.office@gmail.com</a>
                                <span className='ml-2'>
                                    <Tooltip title='Скопировать e-mail' placement='top'>
                                        <CopyOutlined onClick={() => copyToClipboard(emailRef)}/>
                                    </Tooltip>
                                </span>
                            </div>
                            <div className='col-12 align-center-full address-box-text mt-3'>
                                <a href={'tel:380676951098'} ref={phoneRef as React.RefObject<HTMLAnchorElement>}>+38 (067) 695 10 98</a>
                                <span className='ml-2'>
                                    <Tooltip title='Скопировать номер телефона' placement='bottom'>
                                        <CopyOutlined onClick={() => copyToClipboard(phoneRef)}/>
                                    </Tooltip>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Icons iconClassName='col-4 col-md-6 col-lg-4' size={100} className="row align-center-full col-lg-5 col-md-4 ml-md-3 ml-lg-0 col-sm-12"/>
            </div>}
        </div>
    );
}
