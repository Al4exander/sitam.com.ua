import React, {useEffect, useState} from 'react';
import './styles/Images.css';
import {AlsoSee} from "../../../constdata/AlsoSee";
import {Children} from "../../header/Interfaces";
import {Link} from "react-router-dom";
import './styles/Common.css'
import ReactDOM from "react-dom";

export const AlsoSeeElement: React.FC<SubButtonsProps> = ({url, alsoSeeIndex}) => {
    let [alsoSeeUrls, setAlsoSeeUrls] = useState<Children[]>([]);

    const scrollToTop = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('extra-info'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        if(!alsoSeeIndex) {
            Object.entries(AlsoSee).find(([, value]) => {
                const foundIndex: number = value.findIndex((innerChild) => innerChild.link === url);
                if (foundIndex >= 0) {
                    setAlsoSeeUrls(value.filter((inner, index) => index !== foundIndex));
                    return true;
                }
                return false;
            });
        } else {
            setAlsoSeeUrls(AlsoSee[alsoSeeIndex]);
        }
    }, [])

    if(!alsoSeeUrls.length) {
        return null;
    }

  return (
      <div>
          <p className='d-flex justify-content-center how-do-we-work-text'>Посмотрите также:</p>
          <section className='container box-shadow'>
            <ul>
                {alsoSeeUrls.map((alsoSee, index) => <li key={index}>
                    <Link to={alsoSee.link} className='common-text' onClick={scrollToTop} title={alsoSee.title}>{alsoSee.title}</Link>
                </li>)}
            </ul>
          </section>
      </div>
    );
};

interface SubButtonsProps {
    url: string;
    alsoSeeIndex?: number;
}
