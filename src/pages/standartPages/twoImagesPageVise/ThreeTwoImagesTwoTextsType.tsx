import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Images.css';
import '../commonElements/styles/Common.css';
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {AlsoSeeElement} from "../commonElements/AlsoSeeElement";

export function ThreeTwoImagesTwoTextsType(props: any) {

  return (
    <div>
        <HelmetComponent data={props.data}/>
        <h2 className='d-flex justify-content-center page-title-text mb-5'>{props.data.title}</h2>
        <div className='container page-under-title-text mb-4 mt-3'>{props.data.underTitle}</div>
        {props.data.buttons && props.data.buttons.length && <div className='row justify-content-center'>
            <SubButtons buttons={props.data.buttons}/>
        </div> }
        <div className='d-flex flex-wrap justify-content-center mt-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12 col-12'>
                <TextBoxWithShadow className='col-12 mb-5'
                                   text={props.data.firstText.text}
                />
                <div className='d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                </div>
                <div className='mt-3'>
                    {props.data.thirdImage && <InnerBorderImage className='img-size' src={props.data.thirdImage} alt={props.data.title}/>}
                </div>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 ml-lg-5 ml-md-5 ml-sm-0 ml-0'>
                <div className='d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                </div>
                <TextBoxWithShadow className='col-12 mt-5'
                                   text={props.data.secondText.text}
                />
            </div>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </div>
        <AlsoSeeElement url={props.data.url} notNeeded={props.data.notNeededAlsoSee}/>
    </div>
);
}
