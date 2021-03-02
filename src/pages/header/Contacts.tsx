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
                <div className="address col-4">
                    <div className="address-shadow"/>
                    <div className="address-shadow-2"/>
                    <div className="address-box"/>
                    <p className="address-box-text">г. Харьков, Проспект Московский, 51, офис 5</p>
                    <p className="address-box-text-2">Работаем по всей Украине!</p>
                </div>
                <div className="address col-3 ml-5">
                    <div className="address-shadow"/>
                    <div className="address-shadow-2"/>
                    <div className="address-box"/>
                    <p className="address-box-text">-----------------@gmail.com</p>
                    <p className="address-box-text-2">+38 (067) 695 10 98</p>
                </div>
                <div className="row align-items-center col-5 ml-5">
                    <div className='col-2 pr-0 mr-4'>
                        <a target='_blank' href='https://youtube.com'>
                            <img src={youtube}/>
                        </a>
                    </div>
                    <div className='col-2 mr-4'>
                        <img src={linkedin}/>
                    </div>
                    <div className='col-2 mr-4'>
                        <img src={facebook}/>
                    </div>
                    <div className='col-2 mb-4'>
                        <img src={instagram}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
