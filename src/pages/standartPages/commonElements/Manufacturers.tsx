import React from 'react';
import StandardManufacturers from './../../../images/pages/standardManufacturers/StandardManufacturers.png';
import StandardManufacturers2 from './../../../images/pages/standardManufacturers/StandardManufacturers2.png';

import './styles/Manufacturers.css';

export const Manufacturers: React.FC<IManufacturers> = ({ children, className, text}) => {
    return (
        <section className={`col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 mt-5 ${className}`}>
            <header className='manuf-header align-center-full'>
                Производители
            </header>
            <span className='manuf-body mt-4 d-flex justify-content-center'>
                {text}
            </span>
            <section className='row mt-3 d-flex justify-content-center'>
                <img className='manuf-img mr-2' src={StandardManufacturers}/>
                <img className='manuf-img' src={StandardManufacturers2}/>
            </section>
        </section>
  );
};

interface IManufacturers {
    className?: string;
    text: string;
}