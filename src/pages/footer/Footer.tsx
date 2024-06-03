import React, {useContext, useEffect, useState} from 'react';
import './styles/footer.css'
import {Icons} from "../header/components/socialContacts/Icons";
import {LanguageContext} from "../../lib/languageContext";
import {Link} from "react-router-dom";
import {SizeContext} from "../../lib/sizeContext";

export function Footer() {
    const [language] = useContext(LanguageContext);
    const [smallSize] = useContext(SizeContext);
    const [isHydrated, setIsHydrated] = useState(false);

    const text = language === 'ua' ? '2021 © Всі права захищені «Сітам»' : '2021 © Все права защищены «Ситам»';

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

    return (
        <div className={`sitam-footer${isHydrated ? '' : ' not-hydrated'}`}>
            <div className={`mt-3 mb-3 text-center ${isHydrated ? '' : ' not-hydrated'}`}>
                {
                    smallSize ? <>
                        <div>
                            <Link to={`/${language}/privacy`} title={links.privacy} key='privacy'
                                  onClick={scrollToTop}>
                                {links.privacy}
                            </Link>
                        </div>
                        <div className='mt-3'>
                            <Link to={`/${language}/oferta`} title={links.oferta} key='oferta'
                                  onClick={scrollToTop}>
                                {links.oferta}
                            </Link>
                        </div>
                        <div className='mt-3'>
                            <Link to={`/${language}/otkaz`} title={links.otkaz} key='otkaz'
                                  onClick={scrollToTop}>
                                {links.otkaz}
                            </Link>
                        </div>
                    </> : <>
                        <Link to={`/${language}/privacy`} title={links.privacy} key='privacy' className='col-2'
                              onClick={scrollToTop}>
                            {links.privacy}
                        </Link>
                        <Link to={`/${language}/oferta`} title={links.oferta} key='oferta' className='col-2'
                              onClick={scrollToTop}>
                            {links.oferta}
                        </Link>
                        <Link to={`/${language}/otkaz`} title={links.otkaz} key='otkaz' className='col-2'
                              onClick={scrollToTop}>
                            {links.otkaz}
                        </Link>
                    </>
                }
            </div>
            <div className='mt-3 mb-3 w-100'>
                <Icons iconClassName='col-lg-1 col-md-1 col-3' className="d-flex flex-wrap align-center-full"/>
            </div>
            <div className='politics d-flex justify-content-center'>{text}</div>
        </div>
    );
}
