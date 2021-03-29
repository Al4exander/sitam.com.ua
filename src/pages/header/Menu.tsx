import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import './styles/Menu.css';
import {MobileMenu} from "./MobileMenu";
import {SizeContext} from "../../lib/sizeContext";
import {MenuDropdowns} from "./MenuDropdowns";

export function HeaderMenu() {
    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [sticky, setSticky] = useState(false);
    let [menuItem, setMenuItem] = useState(0);
    const [smallSize] = useContext(SizeContext);

    const scrollToContactsAndAsk = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('contacts'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        }
    });

    const handleClickOutside = (e: any) => {
        if(e.target.id && /services|main-ways/.test(e.target.id)){
            if(/services/.test(e.target.id) && menuItem === 1) {
                dropdownOpen && openDropdown();
            } else if(/main-ways/.test(e.target.id) && menuItem === 2) {
                dropdownOpen && openDropdown();
            }
        } else {
            !/dropdown-button/.test(e.target.className) && dropdownOpen && openDropdown();
        }
    };

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

    const handleItemSelection = (itemNumber: number) => {
        if(dropdownOpen) {
            if(itemNumber !== menuItem) {
                setMenuItem(itemNumber);
            } else {
                setMenuItem(itemNumber);
                openDropdown();
            }
        } else {
            setMenuItem(itemNumber);
            openDropdown();
        }
    };

    return (
        !smallSize ? <section className={`col-11 container ml-5 pl-5 mx-auto ${sticky ? 'sticky-top' : ''}`}>
            <nav className='topnav align-center-full' id='myTopnav'>
                <Link to={'/'} key='main' className='col-2'>
                    Главная
                </Link>
                <a id='services' key='services' className={`col-2 ${dropdownOpen ? 'nav-active' : ''}`} onClick={() => handleItemSelection(1)}>
                    Услуги
                </a>
                <a id='main-ways' key='main-ways' className='col-2' onClick={() => handleItemSelection(2)}>
                    Основные направления
                </a>
                <a key='projects' className='col-2'>
                    Проекты
                </a>
                <a key='tender' className='col-2'>
                    У Вас тендер?
                </a>
                <Link to='#contacts' key='contacts' className='col-2' onClick={scrollToContactsAndAsk}>
                    Контакты
                </Link>
            </nav>
            {dropdownOpen && <MenuDropdowns dropdownClosing={dropdownClosing} menuItem={menuItem} openDropdown={openDropdown}/>}
        </section> : <MobileMenu/>
  );
}
