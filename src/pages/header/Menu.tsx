import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import './styles/Menu.css';
import {MobileMenu} from "./MobileMenu";
import {SizeContext} from "../../lib/sizeContext";
import {MenuDropdowns} from "./MenuDropdowns";

export const HeaderMenu = () => {
    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [sticky, setSticky] = useState(false);
    let [menuItem, setMenuItem] = useState(0);
    const [smallSize] = useContext(SizeContext);
    const menuRef = useRef<HTMLAnchorElement>(null);

    const scrollToContactsAndAsk = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('contacts'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const scrollToTop = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('text-start'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            dropdownOpen && openDropdown();
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
        !smallSize ? <section className={`col-11 container ml-5 pl-5 mx-auto ${sticky ? 'sticky-top' : ''}`} ref={menuRef}>
            <nav className='topnav align-center-full' id='myTopnav'>
                <Link to={'/'} key='main' className='col-2' onClick={scrollToTop}>
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
                <a key='tender' className='col-2' href='mailto:sitam.office@gmail.com'>
                    У Вас тендер?
                </a>
                <Link to='#contacts' key='contacts' className='col-2' onClick={scrollToContactsAndAsk}>
                    Контакты
                </Link>
            </nav>
            {dropdownOpen && <MenuDropdowns dropdownClosing={dropdownClosing} menuItem={menuItem} openDropdown={openDropdown}/>}
        </section> : <MobileMenu/>
  );
};
