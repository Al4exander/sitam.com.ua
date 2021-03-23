import React from 'react';
import './styles/Contacts.css';
import {Icons} from "./components/socialContacts/Icons";

export function Contacts(props: any) {
    return (
        <div className='mt-5'>
            {!props.smallSize && <div className='container mx-auto row mb-5'>
                <div className='row col-lg-7 col-md-8 d-flex justify-content-between'>
                    <div className="address col-lg-6 col-md-12">
                        <div className='row'>
                            <p className="address-box-text col-12 align-center-full mt-3">г. Харьков, Проспект Московский, 51, офис 5</p>
                            <p className="address-box-text col-12 align-center-full">Работаем по всей Украине!</p>
                        </div>
                    </div>
                    <div className="address col-lg-5 mt-sm-5 mt-lg-0 mt-md-3 col-md-12 col-sm-12">
                        <div className='row'>
                            <p className="address-box-text col-12 align-center-full mt-3">-----------------@gmail.com</p>
                            <p className="address-box-text col-12 align-center-full">+38 (067) 695 10 98</p>
                        </div>
                    </div>
                </div>
                <Icons iconClassName='col-4 col-md-6 col-lg-4' size={100} className="row align-center-full col-lg-5 col-md-4 ml-md-3 ml-lg-0 ml-sm-0 mt-sm-5 mt-lg-0 mt-md-0 col-sm-12"/>
            </div>}
        </div>
    );
}
