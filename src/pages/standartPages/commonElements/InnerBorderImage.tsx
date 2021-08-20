import React, {useContext} from 'react';
import './styles/Images.css';
import {Image} from "antd";
import {ShowMenuContext} from "../../../lib/showMenuContext";

export const InnerBorderImage: React.FC<InnerBorderImageProps> = ({className, element, src, alt}) => {
  const [_, setShowMenu] = useContext(ShowMenuContext);

  return (
      <div>
          <Image
              src={src}
              alt={alt}
              wrapperClassName='image-holder'
              className={className}
              preview={
                  {
                      maskClassName: 'className',
                      mask: 'Нажмите чтобы посмотреть поближе',
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