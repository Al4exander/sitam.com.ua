import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import './styles/Menu.css';
import {MobileMenu} from "./MobileMenu";
import {SizeContext} from "../../lib/sizeContext";
import {MenuDropdowns} from "./MenuDropdowns";
import {ShowMenuContext} from "../../lib/showMenuContext";
import cx from "classnames";

export const HeaderMenu = () => {
    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [sticky, setSticky] = useState(false);
    let [menuItem, setMenuItem] = useState(0);
    const [smallSize] = useContext(SizeContext);
    const menuRef = useRef<HTMLAnchorElement>(null);
    const [showMenu] = useContext(ShowMenuContext);
    const [y, setY] = useState(window.scrollY);

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
        if(window.scrollY > 200) {
            if(y > window.scrollY + 10) {
                !sticky && setSticky(true);
            } else if (y < window.scrollY - 10){
                sticky && setSticky(false);
            }
        } else sticky && setSticky(false);

        diffInTen(y) && setY(window.scrollY);
    };

    const diffInTen = (y: number) => {
        return window.scrollY + 10 < y || window.scrollY - 10 > y;
    }

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

    if(showMenu) {
        return (
            !smallSize ? <section className={cx('col-11 container ml-5 pl-5 mx-auto', {'sticky-top': sticky || dropdownOpen && window.scrollY > 220, 'sticky-top-out': !(sticky || dropdownOpen) && window.scrollY > 220})} ref={menuRef}>
                <nav className='topnav align-center-full' id='myTopnav'>
                    <Link to={'/'} title='На главную' key='main' className='col-2' onClick={scrollToTop}>
                        Главная
                    </Link>
                    <a id='services' key='services' title='Наши услуги' className={`col-2 ${dropdownOpen ? 'nav-active' : ''}`} onClick={() => handleItemSelection(1)}>
                        Услуги
                    </a>
                    <a id='main-ways' key='main-ways' title='Основные направления' className='col-2' onClick={() => handleItemSelection(2)}>
                        Основные направления
                    </a>
                    <Link to={'/projects'} title='Проекты' key='projects' className='col-2' onClick={scrollToTop}>
                        Проекты
                    </Link>
                    <a key='tender' title='У Вас тендер?' className='col-2' href='mailto:sitam.office@gmail.com'>
                        У Вас тендер?
                    </a>
                    <Link to='#contacts' title='Наши контакты' key='contacts' className='col-2' onClick={scrollToContactsAndAsk}>
                        Контакты
                    </Link>
                </nav>
                {dropdownOpen && <MenuDropdowns dropdownClosing={dropdownClosing} menuItem={menuItem} openDropdown={openDropdown}/>}
            </section> : <MobileMenu/>
        );
    }

    return null;
};
