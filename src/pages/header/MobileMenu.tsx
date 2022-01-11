import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ShadowButton} from './components/ShadowButton';
import {montageDemontageLinks} from '../../constdata/MontageDemontageData';
import {repairsLinks} from '../../constdata/RepairsData';
import {Link} from "react-router-dom";
import logoIcon from '../../images/common/LOGO.png';
import './styles/MobileMenu.css';
import {Icons} from "./components/socialContacts/Icons";
import {Collapse} from 'antd';
import {Children, HeaderLinks} from "./Interfaces";
import {mainWaysData} from "../../constdata/MainWaysData";

const { Panel } = Collapse;

export function MobileMenu() {
    let [mobDropdown, setMobDropdown] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [selected, setSelected] = useState(0);
    let [servicesSelected, setServicesSelected] = useState(false);
    let [mainWaysSelected, setMainWaysSelected ] = useState(false);

    const scrollToContactsAndAsk = () => {
        openMobDropdown();
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('contacts'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const scrollToTop = () => {
        openMobDropdown();
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };

    const openMobDropdown = () => {
        mobDropdown ? setTimeout(() => {
            setMobDropdown(!mobDropdown);
            setDropdownClosing(false);
            setSelected(0);
            setServicesSelected(false);
            setMainWaysSelected(false);
        }, 500) : setMobDropdown(true);

        mobDropdown && setDropdownClosing(true);
    };

    const handleLinkSelection = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('extra-info'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        openMobDropdown();
    };

    const menuItemsJSX = (menuItems: HeaderLinks[]) => {
        return menuItems.map((element: HeaderLinks, index: number) => {
            return <Panel className='services-accordion-header col-12'
                          header={<div className='services-accordion-header'>{element.Type}</div>}
                          key={index}
                          showArrow={false}
            >
                {element.children.map(({link, title}, index: number) =>
                    <Link to={link}
                          onClick={handleLinkSelection}
                          className='ml-2 col-12 services-accordion-text'
                          key={index}>{title}</Link>
                )}
            </Panel>
        })
    };

    const servicesJSX = <>
        <div className='row m-3 align-center-semi show-from-right'>
            <span className='services-header col-12'>
                <div className='arrow-left' onClick={() => setServicesSelected(false)}/>
                Услуги
            </span>
            <div className='row col-12 mt-3'>
                <ShadowButton onClick={() => setSelected(1)} text='Монтаж/демонтаж' className={`col-6 align-center-full pl-1 ${selected === 1 ? 'active' : ''}`}/>
                <ShadowButton onClick={() => setSelected(2)} text='Ремонт' className={`col-6 align-center-full pr-1 ${selected === 2 ? 'active' : ''}`}/>
            </div>
        </div>
        {<Collapse className={`section ml-3 ${(selected === 1 || selected === 2) ? '' : 'collapsed'}`} accordion defaultActiveKey='0' bordered={false} ghost>
            { (selected === 1 || selected === 2) && menuItemsJSX(selected === 1 ? montageDemontageLinks : repairsLinks)}
        </Collapse>
        }
    </>;

    const mainWaysJSX = <section className='row m-3 align-center-semi show-from-right'>
        <span className='services-header col-12'>
            <div className='arrow-left' onClick={() => setMainWaysSelected(false)}/>
            Основные направления
        </span>
        <div className='row container align-center-semi-d col-12 mt-3'>
            {mainWaysData.map((child: Children, index: number) => <Link to={child.link}
                                                                        className='col-6'
                                                                        key={index}
                                                                        onClick={handleLinkSelection}>{child.title}</Link>)}
        </div>
    </section>;

    return (
        <>
            {!mobDropdown ? <div className='top-nav-circle' onClick={openMobDropdown}>
                    <img src={logoIcon} alt='Logo' style={{width: 40, height: 40, margin: 5}}/>
                </div> :
                <div className={`top-nav-mobile ${dropdownClosing ? 'mob-nav-inactive' : ''}`}>
                    <header className='logo-name mt-2 ml-4'>
                        <img src={logoIcon} alt='Logo'/>
                        <span className='ml-3'>Ситам</span>
                        <div className='close' onClick={openMobDropdown}/>
                    </header>
                    {servicesSelected ? servicesJSX :
                        mainWaysSelected ? mainWaysJSX :
                            <div className='row container show-from-right mt-5'>
                                <Link to={'/'} title='Home page' key='main' className='col-12' onClick={scrollToTop}>
                                    Главная
                                </Link>
                                <a key='services' className={`col-12 ${mobDropdown ? 'nav-active' : ''}`} onClick={() => setServicesSelected(true)}>
                                    Услуги
                                </a>
                                <a key='industries' className='col-12' onClick={() => setMainWaysSelected(true)}>
                                    Основные направления
                                </a>
                                <Link to={'/projects'} key='projects' className='col-12' onClick={scrollToTop}>
                                    Проекты
                                </Link>
                                <a key='tender' className='col-12' href='mailto:sitam.office@gmail.com'>
                                    У Вас тендер?
                                </a>
                                <Link to='#contacts' title='contacts' key='contacts' className='col-12' onClick={scrollToContactsAndAsk}>
                                    Контакты
                                </Link>
                            </div>
                    }
                    {!servicesSelected && <Icons iconClassName='col-4 col-sm-4 pl-3 pr-3' className='col-8 col-sm-6 row align-center-full left-bottom-element show-from-right'/>}
                </div>}
        </>
  );
}
