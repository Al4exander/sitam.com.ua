import React from 'react';
import {ButtonWithShadow} from "./ButtonWithShadow";
import '../commonElements/styles/Images.css';
import {useNavigate} from 'react-router-dom';

export const SubButtons: React.FC<SubButtonsProps> = ({buttons}) => {
  const navigate = useNavigate();

  return (
        <section className='flex-wrap container d-flex justify-content-center'>
            {buttons.map((button: any) => {
                return <ButtonWithShadow className='col-xl-3 col-lg-5 col-md-5 col-sm-5 col-6 mt-2'
                                         text={button.text}
                                         onClick={() => navigate(button.url)}
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