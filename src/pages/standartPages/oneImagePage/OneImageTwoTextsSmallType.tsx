import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import {Manufacturers} from "../commonElements/Manufacturers";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {AlsoSeeElement} from "../commonElements/AlsoSeeElement";

export function OneImageTwoTextsSmallType(props: any) {

    return (
    <div>
        <HelmetComponent data={props.data}/>
        <h2 className='d-flex justify-content-center page-title-text'>{props.data.title}</h2>
        {props.data.firstText && <TextBoxWithShadow className='container mx-auto mt-4 d-flex justify-content-center'
                                                    text={props.data.firstText.text}
        />}
        <section className='container mx-auto row mt-5'>
            <TextBoxWithShadow className='col-lg-4 col-xl-5 col-md-6 col-12 mr-5'
                               text={props.data.secondText.text}
            />
            <div className='col-xl-5 col-lg-7 col-md-5 col-sm-12 col-12 ml-lg-0 ml-xl-5 ml-md-0 ml-0 mt-4 mt-lg-0 mt-md-0'>
                <InnerBorderImage className='img-size' src={props.data.firstImage} alt={props.data.title}/>
            </div>
        </section>
        <footer className='d-flex justify-content-center'>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </footer>
        <AlsoSeeElement url={props.data.url} notNeeded={props.data.notNeededAlsoSee}/>
    </div>
);
}
