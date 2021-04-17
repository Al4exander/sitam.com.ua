import React from 'react';
import {ButtonWithShadow} from "./ButtonWithShadow";
import '../commonElements/styles/Images.css';

export const SubButtons: React.FC<SubButtonsProps> = ({buttons}) => {
  return (
        <section className='flex-wrap container d-flex justify-content-center'>
            {buttons.map((button: any, index: number) => {
                return <ButtonWithShadow className='col-xl-3 col-lg-5 col-md-5 col-sm-5 col-6 mt-2'
                                         text={button.text}
                                         url={button.url}
                                         key={index}
                />;
            })}
        </section>
    );
};

interface SubButtonsProps {
    buttons: [{
      text: string;
      url: string;
    }]
}