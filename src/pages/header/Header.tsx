import React, {useState} from 'react';
import './styles/Contacts.css';
import {Contacts} from "./Contacts";
import {HeaderMenu} from "./Menu";
import {HeaderText} from "./HeaderText";

export function Header(props: any) {
    return (
        <>
            <Contacts {...props}/>
            <HeaderMenu {...props}/>
            <HeaderText/>
        </>
    );
}
