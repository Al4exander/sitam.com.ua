import React, {useContext} from 'react';
import {ButtonWithShadow} from "../commonElements/ButtonWithShadow";
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/images.css';
import '../commonElements/styles/Common.css';
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {SizeContext} from "../../../lib/sizeContext";

export function TwoImagesTwoTextsType(props: any) {
  const [smallSize] = useContext(SizeContext);

  return (
    <div>
        <div className='d-flex justify-content-center page-title-text mb-5'>{props.data.title}</div>
        {props.data.buttons && props.data.buttons.length && <div className='row justify-content-center'>
            <div className='row col-12 d-flex justify-content-center'>
                {props.data.buttons.map((button: any) => {
                    return <ButtonWithShadow className='col-xl-2 col-lg-5 col-md-4 col-sm-4 col-5 mt-2' text={button.text}/>;
                })}
            </div>
        </div> }
        {!smallSize ? <div className='d-flex flex-wrap justify-content-center mt-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12 col-12'>
                <InnerBorderImage className='img-size' src={props.data.firstImage}/>
                <TextBoxWithShadow className='col-12 mt-5'
                                   text={props.data.firstText.text}
                />
            </div>
            <TextBoxWithShadow className='col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 ml-lg-5 ml-md-5 ml-sm-0 ml-0'
                               text={props.data.secondText.text}
            />
            <div className='row col-xl-10 col-lg-10 col-md-12 col-12'>
                <div className='col-6'>
                    <img src={props.data.pointRight}/>
                </div>
                <div className='col-lg-5 col-md-4 col-sm-12 col-12 mt-5'>
                    <InnerBorderImage className='img-size' src={props.data.secondImage}/>
                </div>
            </div>
        </div> : <div className='justify-content-center mt-4'>
            <div className='col-sm-12 col-12 d-flex justify-content-center'>
                <InnerBorderImage className='img-size' src={props.data.firstImage}/>
            </div>
            <TextBoxWithShadow
                div
                className='col-lg-5 col-md-10 col-sm-11 col-11 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                text={props.data.secondText.text}
            />
            <div className='col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                <InnerBorderImage className='img-size' src={props.data.secondImage}/>
            </div>
            <TextBoxWithShadow
                div
                className='col-11 mt-3 mx-auto'
                text={props.data.firstText.text}
            />
        </div>}
    </div>
);
}
