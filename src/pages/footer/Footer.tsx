import React, {useContext, useEffect, useState} from 'react';
import './styles/footer.css'
import {Icons} from "../header/components/socialContacts/Icons";
import {LanguageContext} from "../../lib/languageContext";
import {Link} from "react-router-dom";
import {SizeContext} from "../../lib/sizeContext";
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
    }: {
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
            <div className={`mt-3 mb-3 text-center ${isHydrated ? '' : ' not-hydrated'}`}>
                <div className='mt-3'>
                    {
                        Object.entries(address).map(([key, value]) => {
                            return <span className='mr-3'
                                         key={value}>
                                {value}
                            </span>
                        })
                    }
                </div>
                <div className='mt-3 d-flex flex-wrap justify-content-center'>
                    {contactsName}
                    {
                        Object.entries(contacts).map(([key, value]) => {
                            const phoneNumber = ['phoneNumber', 'extraPhoneNumber'];
                            const email = ['email'];

                            if (phoneNumber.includes(key)) {
                                return <span>
                                    <a href={`tel:${value}`}
                                       title='Phone'
                                       className='ml-3'
                                       key={value}>
                                    {value}
                                </a>
                                </span>
                            }

                            if (email.includes(key)) {
                                return <span>
                                    <a href={`mailto:${value}`}
                                       title='Email'
                                       className='ml-3'
                                       key={value}>
                                    {value}
                                </a>
                                </span>
                            }

                            return null;
                        })
                    }
                </div>
                <div className='mt-3'>
                    {
                        Object.entries(links).map(([key, value], index) => {
                            const className = cx('', {'mt-3': index !== 0})
                            return smallSize ? <div className={className}>
                                <Link to={`/${language}/${key}`} title={value} key={key}
                                      onClick={scrollToTop}>
                                    {value}
                                </Link>
                            </div> : <Link to={`/${language}/${key}`} title={value} key={key} className='col-2'
                                           onClick={scrollToTop}>
                                {value}
                            </Link>
                        })
                    }
                </div>
            </div>
            <div className='mt-3 mb-3 w-100'>
                <Icons iconClassName='col-lg-1 col-md-1 col-3' className="d-flex flex-wrap align-center-full"/>
            </div>
            <div className='politics d-flex justify-content-center'>{text}</div>
        </div>
    );
}
