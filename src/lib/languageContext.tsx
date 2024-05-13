/* Core */
import Cookies from 'js-cookie';
import React, {createContext, useState, SetStateAction} from 'react';

export const LanguageContext = createContext<SettingsProviderShape>([
    Cookies.get('language') || 'ua',
    () => null,
]);

export const LanguageProvider: React.FC = props => {
    let [language, setLanguage] = useState(Cookies.get('language') || 'ua');

    return <LanguageContext.Provider value={[language, setLanguage]}>{props.children}</LanguageContext.Provider>;
};

/* Types */
type SettingsProviderShape = [string, React.Dispatch<SetStateAction<string>>];
