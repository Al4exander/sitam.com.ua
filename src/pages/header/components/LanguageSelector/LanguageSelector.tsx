import React, {useContext, useState} from 'react';
import './styles/index.css';
import {ReactComponent as FlagUA} from './flags/ua.svg';
import {ReactComponent as FlagRU} from './flags/ru.svg';
import {LanguageContext} from "../../../../lib/languageContext";

const LanguageSelector = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectLanguage = (lang: string) => {
        localStorage.setItem('language', language);
        setLanguage(lang);
        setDropdownOpen(false);
    };

    return (
        <div className="language-selector">
            <div className="language-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
                <button className="language-button" onClick={toggleDropdown}>
                    {language === 'ua' ? <FlagUA/> : <FlagRU/>} {language === 'ua' ? 'Укр' : 'Рус'}
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
