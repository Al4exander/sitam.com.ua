import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";

import '../commonElements/styles/Images.css';
import '../commonElements/styles/Common.css';
import {Manufacturers} from "../commonElements/Manufacturers";
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {AlsoSeeElement} from "../commonElements/AlsoSeeElement";

export function TwoImagesTwoTextsBigType(props: any) {

    return (
        <div>
            <HelmetComponent data={props.data}/>
            <div className='align-center-full page-title-text'>{props.data.title}</div>
            <div className='container page-under-title-text mb-4 mt-3'>{props.data.underTitle}</div>
            <section className='container col-lg-12 col-md-12 mx-lg-auto mx-auto row mt-5 d-flex justify-content-center'>
                <section className='col-12 col-md-5 col-lg-6 col-xl-5 mr-0 mr-lg-5 mr-md-5 mr-sm-0'>
                    <TextBoxWithShadow
                        text={props.data.firstText.text}
                    />
                    <div className='mt-4 d-flex justify-content-center'>
                        <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                    </div>
                </section>
                <section className='col-12 col-md-5 col-lg-6 col-xl-5 mr-0 mr-sm-0 mr-lg-5 mr-md-5'>
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
            <AlsoSeeElement url={props.data.url} notNeeded={props.data.notNeededAlsoSee}/>
        </div>
);
}
