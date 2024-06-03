import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export const LanguageContext = createContext<SettingsProviderShape>([
    'ua',
    () => null,
]);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const [language, setLanguage] = React.useState<string>('ua');

    useEffect(() => {
        const pathLanguage = location.pathname.split('/')[1];

        if (pathLanguage === 'ru' || pathLanguage === 'ua') {
            setLanguage(pathLanguage);
        } else {
            setLanguage('ua');
        }
    }, [location]);

    return <LanguageContext.Provider value={[language, setLanguage]}>{children}</LanguageContext.Provider>;
};

/* Types */
type SettingsProviderShape = [string, React.Dispatch<React.SetStateAction<string>>];
