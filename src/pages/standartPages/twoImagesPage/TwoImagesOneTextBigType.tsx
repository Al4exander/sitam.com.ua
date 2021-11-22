import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {AlsoSeeElement} from "../commonElements/AlsoSeeElement";

export function TwoImagesOneTextBigType(props: any) {

    return (
    <div>
        <HelmetComponent data={props.data}/>
        <div className='align-center-full page-title-text'>{props.data.title}</div>
        <div className='container page-under-title-text mb-4 mt-3'>{props.data.underTitle}</div>
        {props.data.buttons && props.data.buttons.length && <section className='mt-2'>
            <SubButtons buttons={props.data.buttons}/>
        </section>}
        <section className='container col-lg-12 col-md-12 mx-auto row mt-5 d-lg-flex justify-content-center'>
                 <section className='col-12 col-md-5 col-lg-6 col-xl-5 mr-0 mr-md-5 mr-lg-5'>
                     <TextBoxWithShadow
                                        text={props.data.text}
                     />
                 </section>
                <div className='mt-4 mt-lg-0 mt-md-0'>
                    <div className='d-flex justify-content-center'>
                        <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <InnerBorderImage className='img-size' src={props.data.secondImage} alt={props.data.title}/>
                    </div>
                </div>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </section>
        <AlsoSeeElement url={props.data.url} alsoSeeIndex={props.data.alsoSeeIndex}/>
    </div>
);
}
