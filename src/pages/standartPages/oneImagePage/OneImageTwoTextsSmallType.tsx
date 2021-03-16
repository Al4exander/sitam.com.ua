import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/images.css';
import GirlWithPhone from '../../../images/GirlWithPhone.png';

export function OneImageTwoTextsSmallType(props: any) {
  return (
    <div>
        <div className='d-flex justify-content-center page-title-text'>{props.data.title}</div>
        {!props.smallSize ? <div className='row mx-auto'>
            <TextBoxWithShadow className='col-12 mt-5 mx-auto'
                               height={props.data.firstText.big.height}
                               width={props.data.firstText.big.width}
                               text={props.data.firstText.text}
            />
            <div className='row col-12 image-holder'>
                <TextBoxWithShadow className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 ml-lg-5 ml-md-5 ml-sm-0 ml-0'
                                   height={props.data.secondText.big.height}
                                   width={props.data.secondText.big.width}
                                   text={props.data.secondText.text}
                />
                <div className='col-xl-7 col-lg-8 col-md-6 col-sm-12 col-12 mx-auto mt-5 image-holder'>
                    <img className='img-overlay-size col-6' src={props.data.firstImage}/>
                    <img className='second-img-overlay-size' src={GirlWithPhone}/>
                </div>
            </div>
        </div> : <div className='justify-content-center mt-4'>
            <TextBoxWithShadow
                style={{ paddingLeft: 0}}
                div
                className='col-12 mt-3 mx-auto'
                height={props.data.firstText.small.height}
                width={props.data.firstText.small.width}
                text={props.data.firstText.text}
            />
            <div className='col-xl-7 col-lg-8 col-md-6 col-sm-12 col-12 mx-auto mt-5 image-holder'>
                <img className='img-overlay-size col-6' src={props.data.firstImage}/>
                <img className='second-img-overlay-size' src={GirlWithPhone}/>
            </div>
            <TextBoxWithShadow
                style={{ paddingLeft: 0}}
                div
                className='col-lg-5 col-md-5 col-sm-12 col-12 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                height={props.data.secondText.small.height}
                width={props.data.secondText.small.width}
                text={props.data.secondText.text}
            />
        </div>}
    </div>
);
}
