import React from 'react';
import './styles/Header.css';

export function HeaderText() {
    return (
        <>
            <span id='text-start' className='col-12 header-text'>Поставщики услуг для промышленных предприятий</span>
            <p className='col-12 under-header-text mb-5'>100+ выполненных проектов по всей Украине</p>
            <div className='col-12 under-header-row row d-flex justify-content-around mx-auto'>
                <p>Работы по монтажу и демонтажу</p>
                <p>Ремонт и техническое обслуживание</p>
                <p>Изготовление металлоконструкций </p>
                <p>Строительные работы и др.</p>
            </div>
        </>
    );
}
