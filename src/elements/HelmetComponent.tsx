import React from 'react';
import {Helmet} from "react-helmet";

interface HelmetComponentProps {
    data: any;
}

export const HelmetComponent: React.FC<HelmetComponentProps> = ({data}) => {
  const text = data.description ?? 'Ремонт и техническое обслуживание | Работы по монтажу и демонтажу | Изготовление металлоконструкций | Строительные работы и др.';

  return (
    <Helmet>
        <title>{data.title} | Ситам</title>
        <meta name="description" content={`${text.trim().replace(/#/g, '').replace(/\\n?\\r/g, '').slice(0, 300)}...`} />
        <link rel="canonical" href={`https://sitam.tech${data.url}/`}/>
        {data.keywords && <meta name="keywords" content={data.keywords} />}
    </Helmet>
  );
};
