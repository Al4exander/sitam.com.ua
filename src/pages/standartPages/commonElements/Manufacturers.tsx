import React, {useContext} from 'react';
import StandardManufacturers from './../../../images/pages/standardManufacturers/StandardManufacturers.png';
import StandardManufacturers2 from './../../../images/pages/standardManufacturers/StandardManufacturers2.png';

import './styles/Manufacturers.css';
import {LanguageContext} from "../../../lib/languageContext";

export const Manufacturers: React.FC<IManufacturers> = ({ children, className, text, images, title}) => {
    const [language] = useContext(LanguageContext);
    const alternateTitle = language === 'ua' ? 'Виробники' : 'Производители';
    return (
        <section className={`col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 mt-5 ${className}`}>
            <header className='manuf-header align-center-full'>
                {title ? title : alternateTitle}
            </header>
            <span className='manuf-body mt-4 d-flex justify-content-center'>
                {text}
            </span>
            <section className='row mt-3 d-flex justify-content-center'>
                {images && images.length ? images.map((image, index) => {
                    return <a className='manuf-img mr-2 d-flex justify-content-center' target='_blank' rel='noopener noreferrer' href={image.url} key={index}>
                            <img src={image.src} loading="lazy" alt={`manufacure-${index}`}/>
                    </a>
                }) : <>
                        <img className='manuf-img mr-2' src={StandardManufacturers} alt="LIEBHERR" loading="lazy"/>
                        <img className='manuf-img' src={StandardManufacturers2} alt="Terex" loading="lazy"/>
                    </>
                }
            </section>
        </section>
  );
};

interface IManufacturers {
    className?: string;
    text: string;
    images?: Image[];
    title?: string;
}

interface Image {
    url?: string;
    src: string;
}
