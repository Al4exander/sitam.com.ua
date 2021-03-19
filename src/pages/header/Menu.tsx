import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {ShadowButton} from './components/ShadowButton';
import {MenuList} from './MenuList';
import {montageDemontageLinks} from '../../constdata/MontageDemontageData';
import {repairsLinks} from '../../constdata/RepairsData';
import {Link} from "react-router-dom";
import {othersLinks} from "../../constdata/OthersData";
import logoIcon from '../../images/LOGO.png';
import './styles/Menu.css';

export function HeaderMenu(props: any) {
    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [mobDropdown, setMobDropdown] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [selected, setSelected] = useState(0);
    let [sticky, setSticky] = useState(false);

    const scrollToBottom = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('contacts'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    });

    const handleScroll = () => {
        if(window.scrollY > 220) {
            !sticky && setSticky(true);
        } else {
            sticky && setSticky(false);
        }
    };

    const openDropdown = () => {
        dropdownOpen ? setTimeout(() => {
            setDropdownOpen(!dropdownOpen);
            setDropdownClosing(false);
        }, 500) : setDropdownOpen(true);

        dropdownOpen && setDropdownClosing(true);
    };

    const openMobDropdown = () => {
        mobDropdown ? setTimeout(() => {
            setMobDropdown(!mobDropdown);
            setDropdownClosing(false);
        }, 500) : setMobDropdown(true);

        mobDropdown && setDropdownClosing(true);
    };

    return (
        !props.smallSize ? <div className={`col-11 container ml-5 pl-5 mx-auto ${sticky ? 'sticky-top' : ''}`}>
            <div className='topnav align-center-full' id='myTopnav'>
                <Link to={'/'} key='main' className='col-2'>
                    Главная
                </Link>
                <a key='services' className={`col-2 ${dropdownOpen ? 'nav-active' : ''}`} onClick={openDropdown}>
                    Услуги
                </a>
                <a key='industries' className='col-2'>
                    Отрасли
                </a>
                <a key='projects' className='col-2'>
                    Проекты
                </a>
                <a key='tender' className='col-2'>
                    У Вас тендер?
                </a>
                <Link to='#contacts' key='contacts' className='col-2' onClick={scrollToBottom}>
                    Контакты
                </Link>
            </div>
            {dropdownOpen && <div key='dropdownContent' className='mt-2'>
                <div className={`nav-dropdown ${dropdownClosing ? 'nav-inactive' : ''}`}>
                    <div className='row'>
                        <div className='row mt-4 col-lg-3 col-md-5 col-sm-4 max-height-5'>
                            <ShadowButton onClick={() => setSelected(0)} text='Монтаж/демонтаж' className={`col-12 mt-3 align-center-full ${selected === 0 ? 'active' : ''}`}/>
                            <ShadowButton onClick={() => setSelected(1)} text='Ремонт' className={`col-12 mt-5 align-center-full ${selected === 1 ? 'active' : ''}`}/>
                            <ShadowButton onClick={() => setSelected(2)} text='Прочее' className={`col-12 mt-5 align-center-full ${selected === 2 ? 'active' : ''}`}/>
                        </div>
                        <div className='row col-lg-9 col-md-7 col-sm-8 mt-1'>
                            <MenuList onClick={openDropdown}
                                      links={selected === 0 ? montageDemontageLinks : selected === 1 ? repairsLinks : othersLinks}/>
                        </div>
                    </div>
                </div>
            </div>}
        </div> : <div>
            {!mobDropdown ? <div className='top-nav-circle' onClick={openMobDropdown}/> :
                <div className={`top-nav-mobile ${dropdownClosing ? 'mob-nav-inactive' : ''}`}>
                    <header className='logo-name m-3'>
                        <img src={logoIcon}/> Sitam
                        <div className='tag-remove' onClick={openMobDropdown}/>
                    </header>
                    <div className='row container h-25 m-3'>
                        <Link to={'/'} key='main' className='col-6'>
                            Главная
                        </Link>
                        <a key='services' className={`col-6 ${mobDropdown ? 'nav-active' : ''}`} onClick={openDropdown}>
                            Услуги
                        </a>
                        <a key='industries' className='col-6'>
                            Отрасли
                        </a>
                        <a key='projects' className='col-6'>
                            Проекты
                        </a>
                        <a key='tender' className='col-6'>
                            У Вас тендер?
                        </a>
                        <Link to='#contacts' key='contacts' className='col-6' onClick={scrollToBottom}>
                            Контакты
                        </Link>
                    </div>
                </div>}
        </div>
  );
}
