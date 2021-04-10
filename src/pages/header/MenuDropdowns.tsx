import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ShadowButton} from './components/ShadowButton';
import {MenuList} from './MenuList';
import {montageDemontageLinks} from '../../constdata/MontageDemontageData';
import {repairsLinks} from '../../constdata/RepairsData';
import {Link} from "react-router-dom";
import './styles/Menu.css';
import {mainWaysData} from "../../constdata/MainWaysData";
import {Children} from "./Interfaces";

export const MenuDropdowns: React.FC<IMenuDropdowns> = ({dropdownClosing, openDropdown, menuItem}) => {
    let [selected, setSelected] = useState(0);

    const handleLinkSelection = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('text-start'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        openDropdown();
    };

    const mainWaysJSX = mainWaysData.map((child: Children) => <Link to={child.link} className='col-3' onClick={handleLinkSelection}> <h6 className="card-header-text-style">{child.title}</h6> </Link>);

    return (
       menuItem === 1 ? <div className='mt-2'>
            <div className={`nav-dropdown ${dropdownClosing ? 'nav-inactive' : ''}`}>
                <div className='row'>
                    <div className='row mt-4 col-lg-3 col-md-5 col-sm-4 max-height-5'>
                        <ShadowButton onClick={() => setSelected(0)} text='Монтаж/демонтаж' className={`col-12 mt-3 align-center-full ${!selected ? 'active' : ''}`}/>
                        <ShadowButton onClick={() => setSelected(1)} text='Ремонт' className={`col-12 mt-5 align-center-full ${selected ? 'active' : ''}`}/>
                    </div>
                    <div className='row col-lg-9 col-md-7 col-sm-8 mt-1'>
                        <MenuList onClick={handleLinkSelection}
                                  links={selected === 0 ? montageDemontageLinks : repairsLinks}/>
                    </div>
                </div>
            </div>
        </div> : <div key='dropdownContent' className='mt-2 '>
           <div className={`nav-dropdown-small p-3 ${dropdownClosing ? 'nav-inactive' : ''}`}>
               <div className=''>
                   {mainWaysJSX}
               </div>
           </div>
       </div>
  );
};

interface IMenuDropdowns {
    openDropdown: any;
    dropdownClosing: boolean;
    menuItem: number;
}
