import React from 'react';
import '../styles/DropdownButtons.css';

export function ShadowButton(props: {onClick?: () => any, className?: string, text?: string}) {
    return (
        <div className={props.className}>
            <div className='dropdown-button-outer-line align-center-full' onClick={props.onClick}>
                <div className='dropdown-button-inner-line' onClick={props.onClick}>
                    <p className='dropdown-button-text'>
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
  );
}
