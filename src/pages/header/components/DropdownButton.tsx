import React from 'react';
import '../styles/DropdownButtons.css';

export function DropdownButton(props: any) {
    return (
        <div className={props.className}>
            <div className='dropdown-button-shadow'/>
            <div className='dropdown-button-shadow-2'/>
            <div className='dropdown-button-outer-line' onClick={props.onClick}/>
            <div className='dropdown-button-inner-line' onClick={props.onClick}>
                <p className='dropdown-button-text'>
                    {props.text}
                </p>
            </div>
        </div>
  );
}
