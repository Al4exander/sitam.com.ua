import React, {useContext, useEffect,} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import {SizeContext} from "../../../lib/sizeContext";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {Helmet} from "react-helmet";

export function TwoImagesOneTextType(props: any) {
  const [smallSize] = useContext(SizeContext);

    return (
    <div>
        <Helmet>
            <title>{props.data.title} | Ситам</title>
            <meta name="description" content={`${props.data.manufacturers ? props.data.manufacturers.text.slice(0, 296) :
                props.data.underTitle ? props.data.underTitle.slice(0, 296) : props.data.text.replace(/#/g, '').slice(0, 296)}...`} />
            <link rel="canonical" href={`https://sitam.tech${props.data.url}`}/>
        </Helmet>
        <div className='align-center-full page-title-text'>{props.data.title}</div>
        <div className='container page-under-title-text mb-4 mt-3'>{props.data.underTitle}</div>
        {props.data.buttons && props.data.buttons.length && <section className='mt-2'>
            <SubButtons buttons={props.data.buttons}/>
        </section>}
        {!smallSize ? <section className='col-10 col-lg-12 col-md-12 mx-lg-auto mx-md-0 row mt-5 d-lg-flex justify-content-center'>
                     <section className='col-5 col-md-5 col-lg-6 col-xl-5 mr-5'>
                         <TextBoxWithShadow
                                            text={props.data.text}
                         />
                         <div className='mt-4 d-flex justify-content-center'>
                             <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                         </div>
                     </section>
                    <div>
                        <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                    </div>
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
            </section>
            :
            <section className='mx-auto mt-4'>
                <div className='mt-4 d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                </div>
                <TextBoxWithShadow
                    style={{ paddingLeft: 0}}
                    div
                    className='col-11 mt-3 mx-auto'
                    text={props.data.text}
                />
                <div className='mt-4 d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                </div>
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
            </section>}
    </div>
);
}
