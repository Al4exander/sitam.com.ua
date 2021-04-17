import React from 'react';
import './styles/ButtonWithShadow.css';
import {Link} from "react-router-dom";

export const ButtonWithShadow: React.FC<ButtonWithShadowProps> = ({text, className, url}) => {
  return (
      <span className={className}>
          <Link className={`two-images-button-box align-center-full col-12`} to={url}>
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