import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ShadowButton} from './components/ShadowButton';
import {montageDemontageLinks} from '../../constdata/MontageDemontageData';
import {repairsLinks} from '../../constdata/RepairsData';
import {Link} from "react-router-dom";
import logoIcon from '../../images/LOGO.png';
import './styles/MobileMenu.css';
import {Icons} from "./components/socialContacts/Icons";
import { Collapse } from 'antd';
import {HeaderLinks} from "./Interfaces";
import Plumbs from '../../images/Plumbs.png';

const { Panel } = Collapse;

export function MobileMenu() {
    let [mobDropdown, setMobDropdown] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [selected, setSelected] = useState(0);
    let [servicesSelected, setServicesSelected] = useState(false);

    const scrollToContactsAndAsk = () => {
        openMobDropdown();
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('contacts'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const openMobDropdown = () => {
        mobDropdown ? setTimeout(() => {
            setMobDropdown(!mobDropdown);
            setDropdownClosing(false);
        }, 500) : setMobDropdown(true);

        mobDropdown && setDropdownClosing(true);
    };

    const handleLinkSelection = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('text-start'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        openMobDropdown();
    };

    return (
        <>
            {mobDropdown && servicesSelected && !dropdownClosing && <img className='services-img' src={Plumbs}/>}
            {!mobDropdown ? <div className='top-nav-circle' onClick={openMobDropdown}/> :
                <div className={`top-nav-mobile ${dropdownClosing ? 'mob-nav-inactive' : ''}`}>
                    <header className='logo-name mt-2 ml-4'>
                        <img src={logoIcon}/>
                        <span className='ml-3'>Sitam</span>
                        <div className='tag-remove' onClick={openMobDropdown}/>
                    </header>
                    {!servicesSelected ? <div className='row container m-3'>
                        <Link to={'/'} key='main' className='col-6'>
                            Главная
                        </Link>
                        <a key='services' className={`col-6 ${mobDropdown ? 'nav-active' : ''}`} onClick={() => setServicesSelected(true)}>
                            Услуги
                        </a>
                        <a key='industries' className='col-6'>
                            Основные направления
                        </a>
                        <a key='projects' className='col-6'>
                            Проекты
                        </a>
                        <a key='tender' className='col-6'>
                            У Вас тендер?
                        </a>
                        <Link to='#contacts' key='contacts' className='col-6' onClick={scrollToContactsAndAsk}>
                            Контакты
                        </Link>
                    </div> : <>
                                <div className='row m-3 align-center-semi show-from-right'>
                                    <span className='services-header col-12'>Услуги</span>
                                    <div className='row col-12 mt-3'>
                                        <ShadowButton onClick={() => setSelected(1)} text='Монтаж/демонтаж' className={`col-6 align-center-full ${selected === 1 ? 'active' : ''}`}/>
                                        <ShadowButton onClick={() => setSelected(2)} text='Ремонт' className={`col-6 align-center-full ${selected === 2 ? 'active' : ''}`}/>
                                    </div>
                                </div>
                                {(selected === 1 || selected === 2) && <Collapse className='show-from-top ml-5' accordion defaultActiveKey='0' bordered={false} ghost>
                                    {
                                        (selected === 1 ? montageDemontageLinks : repairsLinks).map((element: HeaderLinks, index: number) => {
                                            return <Panel className='services-accordion-header col-12'
                                                          header={<div className='services-accordion-header'>{element.Type}</div>}
                                                          key={index}
                                                          showArrow={false}
                                            >
                                                {element.children.map((child: {link: string, title: string}, index: number) =>
                                                    <Link to={child.link}
                                                          onClick={handleLinkSelection}
                                                          className='ml-2 col-12 services-accordion-text'
                                                          key={index}>{child.title}</Link>
                                                )}
                                            </Panel>
                                        })
                                    }
                                </Collapse>
                                }
                        </>}
                    {!servicesSelected && <Icons iconClassName='col-4 col-sm-3' className='col-6 row align-center-full'/>}
                </div>}
        </>
  );
}
