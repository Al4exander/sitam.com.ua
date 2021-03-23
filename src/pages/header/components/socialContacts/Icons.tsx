import React from 'react';
import viber from '../socialContacts/images/viber.svg';
import telegram from '../socialContacts/images/telegram.svg';
import whatsapp from '../socialContacts/images/whatsapp.svg';

export function Icons(props: any) {
    return (
        <div className={props.className}>
            <a className={props.iconClassName} target='_blank' rel='noopener noreferrer' href='viber://chat?number='>
                <img src={viber} style={{height: `${props.size+30}px`, width:`${props.size+30}px`}}/>
            </a>
            <a href='https://t.me/1' target='_blank' rel='noopener noreferrer' className={props.iconClassName}>
                <img src={telegram} style={{height: `${props.size}px`, width:`${props.size}px`, marginLeft: '4px'}}/>
            </a>
            <a className={props.iconClassName} target='_blank' rel='noopener noreferrer' href='https://wa.me/+?text=Здравствуйте,%20я%20по%20поводу'>
                <img src={whatsapp} style={{height: `${props.size}px`, width:`${props.size}px`}}/>
            </a>
        </div>
    )
}
