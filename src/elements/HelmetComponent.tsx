import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';

interface HelmetComponentProps {
    data: any;
}

export const HelmetComponent: React.FC<HelmetComponentProps> = ({data}) => {
  let text = data.manufacturers ? data.manufacturers.text : data.underTitle ? data.underTitle : data.firstText ? data.firstText.text : data.secondText ? data.secondText.text : data.text ? data.text : 'Ремонт и техническое обслуживание | Работы по монтажу и демонтажу | Изготовление металлоконструкций | Строительные работы и др.';

  text  = text ?? 'Ремонт и техническое обслуживание | Работы по монтажу и демонтажу | Изготовление металлоконструкций | Строительные работы и др.';
  return (
    <Helmet>
        <title>{data.title} | Ситам</title>
        <meta name="description" content={`${text.trim().replace(/#/g, '').replace(/\\n?\\r/, '').slice(0, 296)}...`} />
        <link rel="canonical" href={`https://sitam.tech${data.url}`}/>
        {data.keywords && <meta name="keywords" content={data.keywords} />}
    </Helmet>
  );
};
