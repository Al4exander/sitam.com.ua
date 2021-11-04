import React from 'react';
import viber from '../socialContacts/images/viber.svg';
import telegram from '../socialContacts/images/telegram.png';
import whatsapp from '../socialContacts/images/whatsapp.png';

export const Icons: React.FC<IIcons> = ({className, size, iconClassName}) => {
    return (
        <div className={className}>
            <a className={iconClassName} target='_blank' rel='noopener noreferrer' href='viber://chat?number=380676951098' title={'Viber'}>
                <img className='header-icon-first' src={viber}  title={'Viber'} alt={'Viber'}/>
            </a>
            <a href='https://t.me/Sitamtech' target='_blank' rel='noopener noreferrer' className={iconClassName} title={'Telegram'}>
                <img className='header-icon' src={telegram} title={'Telegram'} alt={'Telegram'}/>
            </a>
            <a className={iconClassName} target='_blank' rel='noopener noreferrer' href='https://wa.me/+380676951098?text=Здравствуйте,%20я%20по%20поводу' title={'Whatsapp'} >
                <img className='header-icon' src={whatsapp} title={'Whatsapp'} alt={'Whatsapp'}/>
            </a>
        </div>
    )
};

interface IIcons {
    className?: string;
    size?: number;
    iconClassName?: string;
}
