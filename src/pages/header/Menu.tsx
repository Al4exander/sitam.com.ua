import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles/Menu.css';
import {DropdownButton} from "./components/DropdownButton";
import {MontageDemontage} from "./MontageDemontage";

export function HeaderMenu() {
    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [dropdownClosing, setDropdownClosing] = useState(false);
    let [selected, setSelected] = useState(0);

    const scrollToBottom = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('contacts'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const openDropdown = () => {
        dropdownOpen ? setTimeout(() => {
            setDropdownOpen(!dropdownOpen);
            setDropdownClosing(false);
        }, 500) : setDropdownOpen(true);

        dropdownOpen && setDropdownClosing(true);
    };

    return (
        <div className='col-11 container ml-5 pl-5 mx-auto'>
            <div className="topnav" id="myTopnav">
                <a key="main" className='col-2'>
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
                            <DropdownButton onClick={() => setSelected(0)} text='Монтаж/демонтаж' className='col-12 mt-3 align-center-full'/>
                            <DropdownButton onClick={() => setSelected(1)} text='Ремонт' className='col-12 mt-5 align-center-full'/>
                        </div>
                        <div className='row col-lg-9 col-md-7 col-sm-8 mt-1'>
                            <MontageDemontage/>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
  );
}
