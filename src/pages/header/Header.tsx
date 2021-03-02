import React, {useState} from 'react';
import './styles/contacts.css';
import {Contacts} from "./Contacts";
import {HeaderMenu} from "./Menu";
import {HeaderText} from "./HeaderText";

export function Header() {
    return (
        <>
            <Contacts/>
            <HeaderMenu/>
            <HeaderText/>
        </>
    );
}
