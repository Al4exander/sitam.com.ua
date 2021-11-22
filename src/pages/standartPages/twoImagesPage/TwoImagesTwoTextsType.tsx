import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";

import '../commonElements/styles/Images.css';
import '../commonElements/styles/Common.css';
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {AlsoSeeElement} from "../commonElements/AlsoSeeElement";

export function TwoImagesTwoTextsType(props: any) {

  return (
    <div>
        <HelmetComponent data={props.data}/>
        <h2 className='d-flex justify-content-center page-title-text mb-4 mt-2'>{props.data.title}</h2>
        <div className='container page-under-title-text mb-4'>{props.data.underTitle}</div>
        {props.data.buttons && props.data.buttons.length && <SubButtons buttons={props.data.buttons}/>}
        <div className='d-flex flex-wrap justify-content-center mt-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12 col-12'>
                <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                {props.data.firstText && <TextBoxWithShadow className='col-12 mt-5'
                                   text={props.data.firstText.text}
                />}
            </div>
            <TextBoxWithShadow className='col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 ml-xl-5 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-5 mt-sm-5 mt-lg-0 mt-md-0'
                               text={props.data.secondText.text}
            />
            <div className='row col-xl-10 col-lg-10 col-md-12 col-12 justify-content-center'>
                <div className='col-lg-5 col-md-4 col-sm-12 col-12 mt-5 ml-xl-5 ml-lg-5 ml-md-5 ml-sm-0 ml-0 d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                </div>
            </div>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </div>
        <AlsoSeeElement url={props.data.url} alsoSeeIndex={props.data.alsoSeeIndex}/>
    </div>
);
}
