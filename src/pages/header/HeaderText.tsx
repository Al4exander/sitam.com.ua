import React, {useState} from 'react';
import './styles/contacts.css';
import {Contacts} from "./Contacts";
import {HeaderMenu} from "./Menu";

export function HeaderText() {
    return (
        <>
            <span className='col-12 header-text d-flex justify-content-center'>Поставщики услуг для</span>
            <span className='col-12 header-text d-flex justify-content-center'>промышленных предприятий</span>
            <p className='col-12 under-header-text d-flex justify-content-center mb-5'>100+ выполненных проектов по всей Украине</p>
            <div className='col-12 under-header-row row d-flex justify-content-around'>
                <p>Работы по монтажу и демонтажу</p>
                <p>Ремонт и техническое обслуживание</p>
                <p>Изготовление металлоконструкций </p>
                <p>Строительные работы и др.</p>
            </div>
        </>
    );
}
