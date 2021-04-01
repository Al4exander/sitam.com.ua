import React, {useContext} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import GirlWithPhone from '../../../images/common/GirlWithPhone.png';
import {SizeContext} from "../../../lib/sizeContext";
import {TwoImagesElement} from "../commonElements/TwoImagesElement";
import {Manufacturers} from "../commonElements/Manufacturers";

export function OneImageTwoTextsSmallType(props: any) {
  const [smallSize] = useContext(SizeContext);

    return (
    <div>
        <div className='d-flex justify-content-center page-title-text'>{props.data.title}</div>
        {!smallSize ? <>
                        <TextBoxWithShadow className='col-10 mx-auto mt-4'
                               text={props.data.firstText.text}
                        />
                <section className='col-10 mx-auto row mt-5'>
                     <TextBoxWithShadow className='col-4 mr-5'
                                       text={props.data.secondText.text}
                     />
                    <TwoImagesElement className='col-xl-5 col-lg-7 col-md-5 ml-lg-0 ml-xl-5 ml-md-0 ml-0'
                                      first={props.data.firstImage}
                                      second={GirlWithPhone}
                                      maxSize={false}
                    />
                </section>
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text}/>}
            </> :
            <section className='mx-auto mt-4'>
                <TextBoxWithShadow
                    style={{ paddingLeft: 0}}
                    div
                    className='col-11 mt-3 mx-auto'
                    text={props.data.firstText.text}
                />
                <div className='mt-4 col-sm-12 col-12 mt-2 d-flex justify-content-center'>
                    <TwoImagesElement first={props.data.firstImage}
                                      second={GirlWithPhone}
                    />
                </div>
                <TextBoxWithShadow
                    style={{ paddingLeft: 0}}
                    div
                    className='col-11 ml-lg-5 ml-md-5 ml-sm-0 ml-0 mt-2 mx-auto'
                    text={props.data.secondText.text}
                />
                {props.data.manufacturers && <Manufacturers text={props.data.manufacturers.text}/>}
            </section>}
    </div>
);
}
