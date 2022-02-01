import React from 'react';
import './styles/Header.css';
import {HeaderText} from "./HeaderText";
import mainImage from '../../images/common/main.jpg';

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

    return (
        <>
            <header style={style}>
                <HeaderText/>
            </header>
            <div id='extra-info' style={extraStyle}/>
        </>
    );
}
