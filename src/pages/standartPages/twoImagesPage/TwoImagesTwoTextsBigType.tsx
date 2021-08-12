import React, {useContext, useEffect} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {SizeContext} from "../../../lib/sizeContext";

import '../commonElements/styles/Images.css';
import '../commonElements/styles/Common.css';
import {Manufacturers} from "../commonElements/Manufacturers";
import {Helmet} from "react-helmet";

export function TwoImagesTwoTextsBigType(props: any) {
    const [smallSize] = useContext(SizeContext);

    return (
        <div>
            <Helmet>
                <title>{props.data.title} | Ситам</title>
                <meta name="description" content={`${props.data.manufacturers ? props.data.manufacturers.text.slice(0, 296) :
                    props.data.underTitle ? props.data.underTitle.slice(0, 296) : props.data.firstText.text.replace(/#/g, '').slice(0, 296)}...`} />
                <link rel="canonical" href={`https://sitam.tech${props.data.url}`}/>
            </Helmet>
            <div className='align-center-full page-title-text'>{props.data.title}</div>
            <div className='container page-under-title-text mb-4 mt-3'>{props.data.underTitle}</div>
            {!smallSize ? <section className='col-10 col-lg-12 col-md-12 mx-lg-auto mx-md-0 row mt-5 d-flex justify-content-center'>
                    <section className='col-5 col-md-5 col-lg-6 col-xl-5 mr-5'>
                        <TextBoxWithShadow
                            text={props.data.firstText.text}
                        />
                        <div className='mt-4 d-flex justify-content-center'>
                            <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                        </div>
                    </section>
                    <section className='col-5'>
                        <div className='d-flex justify-content-center'>
                            <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                        </div>
                        <TextBoxWithShadow
                            className='mt-4'
                            text={props.data.secondText.text}
                        />
                    </section>
                    {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
                </section>
                :
                <section className='mx-auto mt-4'>
                    <TextBoxWithShadow
                        style={{ paddingLeft: 0}}
                        div
                        className='col-11 mt-3 mx-auto'
                        text={props.data.firstText.text}
                    />
                    <div className='mt-4 d-flex justify-content-center'>
                        <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                    </div>
                    <TextBoxWithShadow
                        style={{ paddingLeft: 0}}
                        div
                        className='col-11 mt-3 mx-auto'
                        text={props.data.secondText.text}
                    />
                    <div className='mt-4 d-flex justify-content-center'>
                        <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                    </div>
                    {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
                </section>}
        </div>
);
}
