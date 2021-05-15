import React, {useState} from 'react';
import './styles/Contacts.css';
import {Contacts} from "./Contacts";
import {HeaderMenu} from "./Menu";
import {HeaderText} from "./HeaderText";

export const Header = () => {
    return (
        <>
            <Contacts />
            <HeaderMenu />
            <HeaderText/>
        </>
    );
};
