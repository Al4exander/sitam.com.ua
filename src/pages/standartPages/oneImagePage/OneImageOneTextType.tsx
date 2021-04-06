import React, {useContext,} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import {SizeContext} from "../../../lib/sizeContext";
import {InnerBorderImage} from "../commonElements/InnerBorderImage";
import {Manufacturers} from "../commonElements/Manufacturers";
import {SubButtons} from "../commonElements/SubButtons";

export function OneImageOneTextType(props: any) {
  const [smallSize] = useContext(SizeContext);

    return (
    <div>
        <div className='align-center-full page-title-text'>{props.data.title}</div>
        {props.data.buttons && props.data.buttons.length && <section className='mt-2'>
            <SubButtons buttons={props.data.buttons}/>
        </section>}
        {!smallSize ? <section className='col-10 col-lg-12 col-md-12 mx-lg-auto mx-md-0 row mt-5 d-lg-flex justify-content-center'>
                     <TextBoxWithShadow className='col-5 col-md-5 col-lg-6 col-xl-5 mr-5'
                                       text={props.data.text}
                     />
                    <div>
                        <InnerBorderImage className='img-size' src={props.data.image}/>
                    </div>
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text}/>}
            </section>
            :
            <section className='mx-auto mt-4'>
                <TextBoxWithShadow
                    style={{ paddingLeft: 0}}
                    div
                    className='col-11 mt-3 mx-auto'
                    text={props.data.text}
                />
                <div className='mt-4 d-flex justify-content-center'>
                    <InnerBorderImage className='img-size' src={props.data.image}/>
                </div>
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text}/>}
            </section>}
    </div>
);
}
