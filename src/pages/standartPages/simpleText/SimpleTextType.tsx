import React from 'react';
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import {HelmetComponent} from "../../../elements/HelmetComponent";
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";

export function SimpleTextType(props: any) {
    return (
        <div>
            <HelmetComponent data={props.data}/>
            <div className='align-center-full page-title-text'>{props.data.title}</div>
            <div className='align-center-full'>
                <div className='page-under-title-text'>{props.data.underTitle}</div>
            </div>
            <section className='container col-lg-12 col-md-12 mx-auto row mt-5 d-lg-flex justify-content-center'>
                <section className='col-12'>
                    <TextBoxWithShadow
                        text={props.data.text}
                    />
                </section>
            </section>
        </div>
    );
}
