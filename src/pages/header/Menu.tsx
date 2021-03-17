import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './styles/Menu.css';
import {ShadowButton} from "./components/ShadowButton";
import {MenuList} from "./MenuList";
import {montageDemontageLinks} from "../../constdata/MontageDemontageData";
import {repairsLinks} from "../../constdata/RepairsData";

export function HeaderMenu(props: any) {
    let [dropdownOpen, setDropdownOpen] = useState(false);
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

    return (
        <div className={`col-11 container ml-5 pl-5 mx-auto ${sticky ? 'sticky-top' : ''}`}>
            <div className="topnav align-center-full" id="myTopnav">
                <a href={'/'} key="main" className='col-2'>
                    Главная
                </a>
                <a key="uslugi" className={`col-2 ${dropdownOpen ? 'nav-active' : ''}`} onClick={openDropdown}>
                    Услуги
                </a>
                <a key="otrasli" className='col-2'>
                    Отрасли
                </a>
                <a key="projects" className='col-2'>
                    Проекты
                </a>
                <a key="tender" className='col-2'>
                    У Вас тендер?
                </a>
                <a href='#contacts' key="contacts" className='col-2' onClick={scrollToBottom}>
                    Контакты
                </a>
            </div>
            {dropdownOpen && <div key='dropdownContent' className='mt-2'>
                <div className={`nav-shadow-2 ${dropdownClosing ? 'nav-inactive' : ''}`}/>
                <div className={`nav-shadow ${dropdownClosing ? 'nav-inactive' : ''}`}/>
                <div className={`nav-dropdown ${dropdownClosing ? 'nav-inactive' : ''}`}>
                    <div className='row'>
                        <div className='row mt-4 col-lg-3 col-md-5 col-sm-4 max-height-5'>
                            <ShadowButton onClick={() => setSelected(0)} text='Монтаж/демонтаж' className={`col-12 mt-3 align-center-full ${!selected ? 'active' : ''}`}/>
                            <ShadowButton onClick={() => setSelected(1)} text='Ремонт' className={`col-12 mt-5 align-center-full ${selected ? 'active' : ''}`}/>
                        </div>
                        <div className='row col-lg-9 col-md-7 col-sm-8 mt-1'>
                            <MenuList onClick={openDropdown} links={!selected ? montageDemontageLinks : repairsLinks}/>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
  );
}
