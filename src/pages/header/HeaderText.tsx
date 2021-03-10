import React from 'react';
import './styles/Header.css';

export function HeaderText() {
    return (
        <>
            <span className='col-12 header-text'>Поставщики услуг для промышленных предприятий</span>
            <p className='col-12 under-header-text mb-5'>100+ выполненных проектов по всей Украине</p>
            <div className='col-12 under-header-row row d-flex justify-content-around ml-sm-5 ml-lg-0 ml-md-0'>
                <p>Работы по монтажу и демонтажу</p>
                <p>Ремонт и техническое обслуживание</p>
                <p>Изготовление металлоконструкций </p>
                <p>Строительные работы и др.</p>
            </div>
        </>
    );
}
