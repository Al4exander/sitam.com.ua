import React from 'react';
import {ButtonWithShadow} from "../commonElements/ButtonWithShadow";
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/WithButtonsType.css';
import '../commonElements/styles/Common.css';

export function WithButtonsType(props: any) {
  return (
    <div>
        <div className='d-flex justify-content-center page-title-text mb-5'>{props.data.title}</div>
        {props.data.buttons && props.data.buttons.length && <div className='row justify-content-center ml-lg-0 ml-sm-5 ml-md-0 ml-2'>
            <div className='row col-lg-9 col-md-8 col-sm-12 col-12'>
                {props.data.buttons.map((button: any) => {
                    return <ButtonWithShadow className='col-xl-3 col-lg-6 col-md-6 col-sm-6' text={button.text}/>;
                })}
            </div>
        </div> }
        {!props.smallSize ? <div className='row justify-content-center mt-5'>
            <div className='col-xl-4 col-lg-6 col-md-5 col-sm-12 col-12'>
                <img className='img-size' src={props.data.firstImage}/>
                <TextBoxWithShadow className='col-12 mt-5'
                                   height={props.data.firstText.big.height}
                                   width={props.data.firstText.big.width}
                                   text={props.data.firstText.text}
                />
            </div>
            <TextBoxWithShadow className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 ml-lg-5 ml-md-5 ml-sm-0 ml-0' h
                               height={props.data.secondText.big.height}
                               width={props.data.secondText.big.width}
                               text={props.data.secondText.text}
            />
            <div className='row col-10'>
                <div className='col-6'>
                    <img src={props.data.pointRight}/>
                </div>
                <div className='col-lg-5 col-md-4 col-sm-12 col-12'>
                    <img className='img-size' src={props.data.secondImage}/>
                </div>
            </div>
        </div> : <div className='justify-content-center mt-4'>
            <div className='col-sm-12 col-12 d-flex justify-content-center'>
                <img className='img-size' src={props.data.firstImage}/>
            </div>
            <TextBoxWithShadow
                style={{ paddingLeft: 0}}
                div
                className='col-lg-5 col-md-5 col-sm-12 col-12 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                height={props.data.secondText.small.height}
                width={props.data.secondText.small.width}
                text={props.data.secondText.text}
            />
            <div className='col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                <img className='img-size' src={props.data.secondImage}/>
            </div>
            <TextBoxWithShadow
                style={{ paddingLeft: 0}}
                div
                className='col-12 mt-3 mx-auto'
                height={props.data.firstText.small.height}
                width={props.data.firstText.small.width}
                text={props.data.firstText.text}
            />
        </div>}
    </div>
);
}
