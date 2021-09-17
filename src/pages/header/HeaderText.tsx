import React from 'react';
import './styles/Header.css';

export function HeaderText() {
    return (
        <>
            <h1 id='text-start' className='col-12 header-text'>Поставщики услуг для промышленных предприятий</h1>
            <p className='col-12 under-header-text mb-5'>100+ выполненных проектов по всей Украине</p>
            <div className='col-12 under-header-row row justify-content-around mx-auto'>
                <p>Ремонт и техническое обслуживание</p>
                <p>Работы по монтажу и демонтажу</p>
                <p>Изготовление металлоконструкций </p>
                <p>Строительные работы и др.</p>
            </div>
        </>
    );
}
