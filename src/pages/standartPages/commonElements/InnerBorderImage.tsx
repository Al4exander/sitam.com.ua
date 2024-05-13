import React, {useContext} from 'react';
import './styles/Images.css';
import {Image} from "antd";
import {ShowMenuContext} from "../../../lib/showMenuContext";
import {LanguageContext} from "../../../lib/languageContext";

export const InnerBorderImage: React.FC<InnerBorderImageProps> = ({className, element, src, alt}) => {
  const [_, setShowMenu] = useContext(ShowMenuContext);
    const [language] = useContext(LanguageContext);
    const mask = language === 'ua' ? 'Натисніть щоб збільшити зображення' : 'Нажмите чтобы посмотреть поближе';

  return (
      <div className='align-center-full'>
          <Image
              src={src}
              alt={alt}
              title={alt}
              loading="lazy"
              wrapperClassName='image-holder'
              className={className}
              preview={
                  {
                      title: alt,
                      maskClassName: 'className',
                      mask,
                      onVisibleChange: (state: boolean) => setShowMenu(!state)
                  }
              }
          />
          {element}
      </div>
  );
};

interface InnerBorderImageProps {
    src: string;
    alt: string;
    className?: string;
    element?: any;
}
