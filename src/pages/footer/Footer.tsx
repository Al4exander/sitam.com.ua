import React, {useContext, useEffect, useState} from 'react';
import './styles/footer.css'
import {Icons} from "../header/components/socialContacts/Icons";
import {LanguageContext} from "../../lib/languageContext";
import {Link} from "react-router-dom";
import {SizeContext} from "../../lib/sizeContext";
import visaIcon from './images/visa.svg';
import masterCardIcon from './images/mastercard.svg';
import cx from "classnames";

export function Footer() {
    const [language] = useContext(LanguageContext);
    const [smallSize] = useContext(SizeContext);
    const [isHydrated, setIsHydrated] = useState(false);

    const text = language === 'ua' ? '2024 © Всі права захищені «Сітам»' : '2021 © Все права защищены «Ситам»';

    const links = language === 'ua' ? {
        privacy: 'Угода про передачу персональних данних',
        oferta: 'Договір публічної оферти',
        otkaz: 'Згода на обробку персональних данних',
    } : {
        privacy: 'Соглашение про передачу персональных данных',
        oferta: 'Договор публичной оферты',
        otkaz: 'Соглашение на оброботку персональных данных',
    };

    const scrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const address = language === 'ua' ? {
        name: 'ФОП «Тіщук Віктор Акімович»',
        address: 'м. Харьков, Проспект Героїв Харкова, 51, офіс 5',
    } : {
        name: 'ФЛП «Тищук Виктор Акимович»',
        address: 'г. Харьков, Проспект Героїв Харкова, 51, офис 5',
    };

    const contacts = {
        phoneNumber: '+380505184007',
        extraPhoneNumber: '+380666951098',
        email: 'sitam.office@gmail.com',
    };

    const contactsName = language === 'ua' ? 'Контакти:' : 'Контакты:';

    return (
        <div className={`sitam-footer${isHydrated ? '' : ' not-hydrated'}`}>
            <div className={`section ${isHydrated ? '' : ' not-hydrated'}`}>
                <div className={`text-center ${isHydrated ? '' : ' not-hydrated'}`}>
                    <span>{address.name}</span>
                    <div className={`mt-3 text-container ${isHydrated ? '' : ' not-hydrated'}`}>
                        {
                            Object.entries(links).map(([key, value], index) => {
                                const className = cx('', { 'mt-3': index !== 0 });
                                return <div className={className} key={key}>
                                    <Link to={`/${language}/${key}`} title={value} onClick={scrollToTop}>
                                        {value}
                                    </Link>
                                </div>;
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={`section ${isHydrated ? '' : ' not-hydrated'}`}>
                <div className={`text-center ${isHydrated ? '' : ' not-hydrated'}`}>
                    <span>{contactsName}</span>
                    <div className='mt-3'>
                        <span>{address.address}</span>
                    </div>
                    <div className='mt-3'>
                        {
                            Object.entries(contacts).map(([key, value]) => {
                                const phoneNumber = ['phoneNumber', 'extraPhoneNumber'];
                                const email = ['email'];

                                if (phoneNumber.includes(key)) {
                                    return <div key={value} className='mt-3'>
                                        <a href={`tel:${value}`} title='Phone'>
                                            {value}
                                        </a>
                                    </div>;
                                }

                                if (email.includes(key)) {
                                    return <div key={value} className='mt-3'>
                                        <a href={`mailto:${value}`} title='Email'>
                                            {value}
                                        </a>
                                    </div>;
                                }

                                return null;
                            })
                        }
                    </div>
                    <div className='mt-3 mb-3'>
                        <Icons iconClassName='ml-5'
                               className="d-flex flex-wrap align-center-full"/>
                    </div>
                </div>
            </div>
            <div className={`section ${isHydrated ? '' : ' not-hydrated'}`}>
                <div className={`text-center ${isHydrated ? '' : ' not-hydrated'}`}>
                    <div className='mt-3 icon-container'>
                        <img className='header-icon' src={visaIcon} title='Visa' alt='Visa' loading='lazy' />
                        <img className='header-icon' src={masterCardIcon} title='MasterCard' alt='MasterCard' loading='lazy' />
                    </div>
                </div>
            </div>
            <div className='politics d-flex justify-content-center'>{text}</div>
        </div>
    );
}
