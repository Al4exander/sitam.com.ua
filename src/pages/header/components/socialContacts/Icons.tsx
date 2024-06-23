import React from 'react';
import viber from '../socialContacts/images/viber.svg';
import telegram from '../socialContacts/images/telegram.png';
import whatsapp from '../socialContacts/images/whatsapp.png';

export const Icons: React.FC<IIcons> = ({className, iconClassName}) => {
    return (
        <div className={className}>
            <a className={iconClassName} target='_blank' rel='noopener noreferrer' href='viber://chat?number=380676951098' title={'Viber'}>
                <img className='header-icon-first' src={viber}  title={'Viber'} alt={'Viber'} loading='lazy'/>
            </a>
            <a href='https://t.me/Sitam_LLC' target='_blank' rel='noopener noreferrer' className={iconClassName} title={'Telegram'}>
                <img className='header-icon' src={telegram} title={'Telegram'} alt={'Telegram'} loading='lazy'/>
            </a>
            <a className={iconClassName} target='_blank' rel='noopener noreferrer' href='https://wa.me/+380676951098?text=Доброго дня,%20я%20стосовно' title={'Whatsapp'} >
                <img className='header-icon' src={whatsapp} title={'Whatsapp'} alt={'Whatsapp'} loading='lazy'/>
            </a>
        </div>
    )
};

interface IIcons {
    className?: string;
    iconClassName?: string;
}
