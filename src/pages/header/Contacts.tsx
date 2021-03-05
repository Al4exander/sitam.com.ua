import React from 'react';
import './styles/contacts.css';
import youtube from '../../svgFiles/youtube.svg';
import instagram from '../../svgFiles/instagram.svg';
import linkedin from '../../svgFiles/linkedin.svg';
import facebook from '../../svgFiles/facebook.svg';

export function Contacts() {
    return (
        <div className='mt-5'>
            <div className='container d-flex justify-content-between'>
                <div className='row col-lg-8 col-sm-6 d-flex justify-content-between'>
                    <div className="address col-lg-6 col-sm-12">
                        <div className="address-shadow"/>
                        <div className="address-shadow-2"/>
                        <div className="address-box"/>
                        <p className="address-box-text d-flex justify-content-center">г. Харьков, Проспект Московский, 51, офис 5</p>
                        <p className="address-box-text-2 d-flex justify-content-center">Работаем по всей Украине!</p>
                    </div>
                    <div className="address col-lg-5 col-sm-12">
                        <div className="address-shadow"/>
                        <div className="address-shadow-2"/>
                        <div className="address-box"/>
                        <p className="address-box-text d-flex justify-content-center">-----------------@gmail.com</p>
                        <p className="address-box-text-2 d-flex justify-content-center">+38 (067) 695 10 98</p>
                    </div>
                </div>
                <div className="row align-items-center col-lg-5 col-sm-6 ml-5 d-flex justify-content-between">
                    <div className='col-lg-2 col-sm-5 pr-0'>
                        <a target='_blank' href='https://youtube.com'>
                            <img src={youtube}/>
                        </a>
                    </div>
                    <div className='col-lg-2 col-sm-5'>
                        <img src={linkedin}/>
                    </div>
                    <div className='col-lg-2 col-sm-5'>
                        <img src={facebook}/>
                    </div>
                    <div className='col-lg-2 col-sm-5 mb-4'>
                        <img src={instagram}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
