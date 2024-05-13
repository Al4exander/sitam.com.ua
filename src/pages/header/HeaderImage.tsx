import React from 'react';
import './styles/Header.css';
import {HeaderText} from "./HeaderText";
import mainImage from '../../images/common/main.jpg';
import {useLocation} from "react-router-dom";

export function HeaderImage() {
    const style: React.CSSProperties = {
        position: 'relative',
        height: '85vh',
        backgroundImage: `url("${mainImage}")`,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: 5,
    }

    const extraStyle: React.CSSProperties = {
        marginBottom: '5em'
    }
    const location = useLocation();

    const notNeededLocations = [
        '/privacy',
        '/oferta',
        '/otkaz',
    ];

    if (notNeededLocations.includes(location.pathname)) {
        return null;
    }

    return (
        <>
            <header style={style}>
                <HeaderText/>
            </header>
            <div id='extra-info' style={extraStyle}/>
        </>
    );
}
