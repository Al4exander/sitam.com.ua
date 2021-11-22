import React from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {AlsoSeeElement} from "../commonElements/AlsoSeeElement";

export function OneImageOneTextType(props: any) {

    return (
    <div>
        <HelmetComponent data={props.data}/>
        <div className='align-center-full page-title-text'>{props.data.title}</div>
        {props.data.buttons && props.data.buttons.length && <section className='mt-2'>
            <SubButtons buttons={props.data.buttons}/>
        </section>}
        <section className='col-10 col-lg-12 col-md-12 mx-lg-auto mx-md-0 mx-sm-auto mx-auto row mt-5 d-lg-flex justify-content-center'>
                     <TextBoxWithShadow className='col-12 col-md-5 col-lg-6 col-xl-5 mr-0 mr-lg-5 mr-md-5 mr-xl-5'
                                       text={props.data.text}
                     />
                    <div>
                    <div className='mt-5 mt-sm-5 mt-md-0 mt-lg-0'>
                        <InnerBorderImage className='img-size' src={props.data.image} alt={props.data.title}/>
                    </div>
                </div>
            {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text} images={props.data.manufacturers.images} title={props.data.manufacturers.title}/>}
        </section>
        <AlsoSeeElement url={props.data.url} alsoSeeIndex={props.data.alsoSeeIndex}/>
    </div>
);
}
