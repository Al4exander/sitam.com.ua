import React from 'react';
import './styles/Contacts.css';
import youtube from '../../images/socialNets/youtube.png';
import instagram from '../../images/socialNets/inst.png';
import linkedin from '../../images/socialNets/ln.png';
import facebook from '../../images/socialNets/fb.png';

export function Contacts(props: any) {
    return (
        <div className='mt-5'>
            {!props.smallSize ? <div className='container mx-auto row mb-5'>
                <div className='container row col-lg-8 col-md-6 col-sm-12 d-flex justify-content-between'>
                    <div className="address col-lg-6 col-md-12 col-sm-12">
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
                 <div className="row align-items-center col-lg-4 col-md-6 ml-md-3 ml-lg-0 ml-sm-0 mt-sm-5 mt-lg-0 mt-md-0 col-sm-12 d-flex justify-content-between">
                    <div className='col-lg-2 col-sm-6 contacts-social-net'>
                        <a target='_blank' href='https://youtube.com'>
                            <img src={youtube}/>
                        </a>
                    </div>
                    <div className='col-lg-2 col-sm-6 contacts-social-net'>
                        <img src={linkedin}/>
                    </div>
                    <div className='col-lg-2 col-sm-6 contacts-social-net'>
                        <img src={facebook}/>
                    </div>
                    <div className='col-lg-2 col-sm-6 contacts-social-net'>
                        <img src={instagram}/>
                    </div>
                </div>
            </div> : <div className="row col-12 d-flex justify-content-end">
                <div className='col-2' >
                    <img src={youtube} className='contacts-social-net'/>
                </div>
                <div className='col-2'>
                    <img src={linkedin} className='contacts-social-net'/>
                </div>
                <div className='col-2' >
                    <img src={facebook} className='contacts-social-net'/>
                </div>
                <div className='col-2' >
                    <img src={instagram} className='contacts-social-net'/>
                </div>
            </div>}
        </div>
    );
}
