import React, {useContext, useEffect} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import GirlWithPhone from '../../../images/common/GirlWithPhone.png';
import {SizeContext} from "../../../lib/sizeContext";
import {TwoImagesElement} from "../commonElements/TwoImagesElement";
import {Manufacturers} from "../commonElements/Manufacturers";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {Helmet} from "react-helmet";

export function OneImageTwoTextsSmallType(props: any) {
  const [smallSize] = useContext(SizeContext);

    return (
    <div>
        <Helmet>
            <title>{props.data.title} | Ситам</title>
            <meta name="description" content={`${props.data.manufacturers ? props.data.manufacturers.text.slice(0, 296) :
                props.data.underTitle ? props.data.underTitle.slice(0, 296) : props.data.firstText.text.replace(/#/g, '').slice(0, 296)}...`} />
            <link rel="canonical" href={`http://www.sitam.tech/${props.data.url}`}/>
        </Helmet>
        <div className='d-flex justify-content-center page-title-text'>{props.data.title}</div>
        {!smallSize ? <>
                {props.data.firstText && <TextBoxWithShadow className='col-10 mx-auto mt-4 d-flex justify-content-center'
                               text={props.data.firstText.text}
                        />}
                <section className='col-10 mx-auto row mt-5'>
                     <TextBoxWithShadow className='col-lg-4 col-xl-5 col-md-6 col-6 mr-5'
                                       text={props.data.secondText.text}
                     />
                    <div className='col-xl-5 col-lg-7 col-md-5 ml-lg-0 ml-xl-5 ml-md-0 ml-0'>
                        <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                    </div>
                </section>
                <footer className='d-flex justify-content-center'>
                    {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
                </footer>
            </> :
            <section className='mx-auto mt-4'>
                {props.data.firstText && <TextBoxWithShadow
                    style={{ paddingLeft: 0}}
                    div
                    className='col-11 mt-3 mx-auto'
                    text={props.data.firstText.text}
                />}
                <div className='mt-4 col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                </div>
                <TextBoxWithShadow
                    style={{ paddingLeft: 0}}
                    div
                    className='col-11 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                    text={props.data.secondText.text}
                />
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
            </section>}
    </div>
);
}
