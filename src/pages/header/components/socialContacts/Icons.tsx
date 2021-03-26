import React from 'react';
import viber from '../socialContacts/images/viber.svg';
import telegram from '../socialContacts/images/telegram.svg';
import whatsapp from '../socialContacts/images/whatsapp.svg';

export const Icons: React.FC<IIcons> = ({className, size, iconClassName}) => {
    return (
        <div className={className}>
            <a className={iconClassName} target='_blank' rel='noopener noreferrer' href='viber://chat?number='>
                <img src={viber} style={size ? {height: `${size+30}px`, width:`${size+30}px`}: {}}/>
            </a>
            <a href='https://t.me/1' target='_blank' rel='noopener noreferrer' className={iconClassName}>
                <img src={telegram} style={{height: `${size}px`, width:`${size}px`, marginLeft: '4px'}}/>
            </a>
            <a className={iconClassName} target='_blank' rel='noopener noreferrer' href='https://wa.me/+?text=Здравствуйте,%20я%20по%20поводу'>
                <img src={whatsapp} style={{height: `${size}px`, width:`${size}px`}}/>
            </a>
        </div>
    )
};

interface IIcons {
    className?: string;
    size?: number;
    iconClassName?: string;
}
