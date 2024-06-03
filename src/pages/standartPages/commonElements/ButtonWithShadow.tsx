import React, {useContext} from 'react';
import './styles/ButtonWithShadow.css';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../../lib/languageContext";

export const ButtonWithShadow: React.FC<ButtonWithShadowProps> = ({text, className, url}) => {
    const [language] = useContext(LanguageContext);
    return (
      <span className={className}>
          <Link className={`two-images-button-box align-center-full col-12`} to={`/${language}/${url}`}>
              <div className='two-images-button-text'>
                {text}
              </div>
          </Link>
      </span>
  );
};

interface ButtonWithShadowProps {
    text: string;
    url: string;
    className?: string;
}