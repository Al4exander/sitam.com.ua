import React from 'react';
import {Helmet} from "react-helmet";

interface HelmetComponentProps {
    data: any;
}

export const HelmetComponent: React.FC<HelmetComponentProps> = ({data}) => {

  return (
        <Helmet>
            <title>{data.title} | Ситам</title>
            <meta name="description" content={`${data.manufacturers ? data.manufacturers.text.slice(0, 296) :
                data.underTitle ? data.underTitle.slice(0, 296) :
                    data.firstText ? data.firstText.text.replace(/#/g, '').slice(0, 296) :
                        data.text.replace(/#/g, '').slice(0, 296)}...`} />
            <link rel="canonical" href={`https://sitam.tech${data.url}`}/>
            {data.keywords && <meta name="keywords" content={data.keywords} />}
        </Helmet>
  );
};
