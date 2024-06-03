import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/index.css';
import { ReactComponent as FlagUA } from './flags/ua.svg';
import { ReactComponent as FlagRU } from './flags/ru.svg';
import { LanguageContext } from '../../../../lib/languageContext';

const LanguageSelector = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const selectLanguage = (lang: string) => {
        setLanguage(lang);
        const newPath = `/${lang}${location.pathname.substring(3)}`;
        navigate(newPath);
        setDropdownOpen(false);
    };

    return (
        <div className="language-selector">
            <div className="language-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="language-button">
                    {language === 'ua' ? <FlagUA /> : <FlagRU />} {language === 'ua' ? 'Укр' : 'рус'}
                </button>
                {dropdownOpen && (
                    <div className="language-dropdown-content">
                        <a onClick={() => selectLanguage('ua')}><FlagUA /> Укр</a>
                        <a onClick={() => selectLanguage('ru')}><FlagRU /> рус</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
