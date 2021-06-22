import React, {useContext, useEffect} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Images.css';
import '../commonElements/styles/Common.css';
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {SizeContext} from "../../../lib/sizeContext";
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {Helmet} from "react-helmet";

export function ThreeTwoImagesTwoTextsType(props: any) {
  const [smallSize] = useContext(SizeContext);

  return (
    <div>
        <Helmet>
            <title>{props.data.title} | Ситам</title>
            <meta name="description" content={`${props.data.manufacturers ? props.data.manufacturers.text.slice(0, 296) :
                props.data.underTitle ? props.data.underTitle.slice(0, 296) : props.data.firstText.text.replace(/#/g, '').slice(0, 296)}...`} />
        </Helmet>
        <header className='d-flex justify-content-center page-title-text mb-5'>{props.data.title}</header>
        <div className='container page-under-title-text mb-4 mt-3'>{props.data.underTitle}</div>
        {props.data.buttons && props.data.buttons.length && <div className='row justify-content-center'>
            <SubButtons buttons={props.data.buttons}/>
        </div> }
        {!smallSize ? <div className='d-flex flex-wrap justify-content-center mt-5'>
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
        </div> : <div className='justify-content-center mt-4'>
            <div className='col-sm-12 col-12 d-flex justify-content-center'>
                <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
            </div>
            <TextBoxWithShadow
                div
                className='col-lg-5 col-md-10 col-sm-11 col-11 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                text={props.data.firstText.text}
            />
            <div className='col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
            </div>
            <TextBoxWithShadow
                div
                className='col-11 mt-3 mx-auto'
                text={props.data.secondText.text}
            />
            <div className='col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                {props.data.thirdImage && <InnerBorderImage className='img-size' src={props.data.thirdImage} alt={props.data.title}/>}
            </div>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </div>}
    </div>
);
}
