import React, {useContext} from 'react';
import './styles/Header.css';
import {LanguageContext} from "../../lib/languageContext";

export function HeaderText() {
    const [language] = useContext(LanguageContext);
    const data = language === 'ua' ? {
        title: 'Постачальники послуг для промислових підприємств',
        subTitle: '100+ виконаних проектів по всій Україні',
        ways: [
            'Ремонт і технічне обслуговування',
            'Роботи з монтажу та демонтажу',
            'Виготовлення металоконструкцій',
            'Будівельні роботи та інше'
        ]
    } : {
        title: 'Поставщики услуг для промышленных предприятий',
        subTitle: '100+ выполненных проектов по всей Украине',
        ways: [
            'Ремонт и техническое обслуживание',
            'Работы по монтажу и демонтажу',
            'Изготовление металлоконструкций',
            'Строительные работы и др.'
        ]
    };

    return (
        <>
            <h1 className='header-text'>{data.title}</h1>
            <p className='col-12 under-header-text mb-5'>{data.subTitle}</p>
            <div className='col-12 under-header-row row justify-content-around mx-auto'>
                {data.ways.map((way) => {
                    return <p key={way}>{way}</p>;
                })}
            </div>
        </>
    );
}
