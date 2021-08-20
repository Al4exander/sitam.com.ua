/* Core */
import React, {createContext, useState, SetStateAction, useEffect} from 'react';

export const ShowMenuContext = createContext<SettingsProviderShape>([
    true,
    () => null,
]);

export const ShowMenuProvider: React.FC = props => {
    let [showMenu, setShowMenu] = useState(true);

    return <ShowMenuContext.Provider value={[showMenu, setShowMenu]}>{props.children}</ShowMenuContext.Provider>;
};

/* Types */
type SettingsProviderShape = [boolean, React.Dispatch<SetStateAction<boolean>>];
