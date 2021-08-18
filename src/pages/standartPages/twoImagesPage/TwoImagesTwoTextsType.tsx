import React, {useContext, useEffect} from 'react';
import {ButtonWithShadow} from "../commonElements/ButtonWithShadow";
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {SizeContext} from "../../../lib/sizeContext";
import pointRight from '../../../images/common/Point_right.png';

import '../commonElements/styles/Images.css';
import '../commonElements/styles/Common.css';
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {Helmet} from "react-helmet";
import {HelmetComponent} from "../../../elements/HelmetComponent";

export function TwoImagesTwoTextsType(props: any) {
  const [smallSize] = useContext(SizeContext);

  return (
    <div>
        <HelmetComponent data={props.data}/>
        <div className='d-flex justify-content-center page-title-text mb-4 mt-2'>{props.data.title}</div>
        <div className='container page-under-title-text mb-4'>{props.data.underTitle}</div>
        {props.data.buttons && props.data.buttons.length && <SubButtons buttons={props.data.buttons}/>}
        {!smallSize ? <div className='d-flex flex-wrap justify-content-center mt-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12 col-12'>
                <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                {props.data.firstText && <TextBoxWithShadow className='col-12 mt-5'
                                   text={props.data.firstText.text}
                />}
            </div>
            <TextBoxWithShadow className='col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 ml-xl-5 ml-lg-5 ml-md-5 ml-sm-0 ml-0'
                               text={props.data.secondText.text}
            />
            <div className='row col-xl-10 col-lg-10 col-md-12 col-12 justify-content-center'>
                <div className='col-lg-5 col-md-4 col-sm-12 col-12 mt-5 ml-xl-5 ml-lg-5 ml-md-5 ml-sm-0 ml-0 d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                </div>
            </div>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </div> : <div className='justify-content-center mt-4'>
            <div className='col-sm-12 col-12 d-flex justify-content-center'>
                <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
            </div>
            <TextBoxWithShadow
                div
                className='col-lg-5 col-md-10 col-sm-11 col-11 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                text={props.data.secondText.text}
            />
            <div className='col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
            </div>
            {props.data.firstText && <TextBoxWithShadow
                div
                className='col-11 mt-3 mx-auto'
                text={props.data.firstText.text}
            />}
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </div>}
    </div>
);
}
