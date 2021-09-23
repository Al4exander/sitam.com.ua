import React from 'react';
import './styles/Images.css';
import {AlsoSee} from "../../../constdata/AlsoSee";
import {Children} from "../../header/Interfaces";
import {Link} from "react-router-dom";
import './styles/Common.css'
import ReactDOM from "react-dom";

export const AlsoSeeElement: React.FC<SubButtonsProps> = ({url, notNeeded}) => {
    const scrollToTop = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('text-start'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    let alsoSeeUrls: Children[] = [];
    Object.entries(AlsoSee).find((el, index) => {
        const foundIndex: number = el[1].findIndex((innerChild) => innerChild.link === url);
        if(foundIndex >= 0) {
            alsoSeeUrls = el[1].filter((inner, index) => index !== foundIndex);
            return true;
        }
        return false;
    });

  return (
      alsoSeeUrls.length && !notNeeded ? <div>
          <p className='d-flex justify-content-center how-do-we-work-text'>Посмотрите так же:</p>
          <section className='container box-shadow'>
            <ul>
                {alsoSeeUrls.map((alsoSee, index) => <li key={index}>
                    <Link to={alsoSee.link} className='common-text' onClick={scrollToTop} title={alsoSee.title}>{alsoSee.title}</Link>
                </li>)}
            </ul>
          </section>
      </div> : null
    );
};

interface SubButtonsProps {
    url: string;
    notNeeded?: boolean;
}