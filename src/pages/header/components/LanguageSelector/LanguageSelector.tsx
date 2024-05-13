import React, {useContext, useState} from 'react';
import './styles/index.css';
import {ReactComponent as FlagUA} from './flags/ua.svg';
import {ReactComponent as FlagRU} from './flags/ru.svg';
import {LanguageContext} from "../../../../lib/languageContext";
import Cookies from 'js-cookie';

const LanguageSelector = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectLanguage = (lang: string) => {
        Cookies.set('language', lang, { expires: 365, path: '/', SameSite: 'Lax', secure: true });
        setLanguage(lang);
        setDropdownOpen(false);
    };

    return (
        <div className="language-selector">
            <div className="language-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="language-button">
                    {language === 'ua' ? <FlagUA/> : <FlagRU/>} {language === 'ua' ? 'Укр' : 'рус'}
                </button>
                {dropdownOpen && (
                    <div className="language-dropdown-content">
                        <a onClick={() => selectLanguage('ua')}><FlagUA/> Укр</a>
                        <a onClick={() => selectLanguage('ru')}><FlagRU/> рус</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
