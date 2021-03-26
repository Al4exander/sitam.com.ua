/* Core */
import React, {createContext, useState, SetStateAction, useEffect} from 'react';

export const SizeContext = createContext<SettingsProviderShape>([
    window.innerWidth < 850,
    () => null,
]);

export const SizeProvider: React.FC = props => {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 850);

    return <SizeContext.Provider value={[smallSize, setSmallSize]}>{props.children}</SizeContext.Provider>;
};

/* Types */
type SettingsProviderShape = [boolean, React.Dispatch<SetStateAction<boolean>>];
