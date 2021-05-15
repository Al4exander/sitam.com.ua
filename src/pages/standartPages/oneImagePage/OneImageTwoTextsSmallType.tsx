import React, {useContext, useEffect} from 'react';
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";
import '../commonElements/styles/Common.css';
import '../commonElements/styles/Images.css';
import GirlWithPhone from '../../../images/common/GirlWithPhone.png';
import {SizeContext} from "../../../lib/sizeContext";
import {TwoImagesElement} from "../commonElements/TwoImagesElement";
import {Manufacturers} from "../commonElements/Manufacturers";

export function OneImageTwoTextsSmallType(props: any) {
  const [smallSize] = useContext(SizeContext);

    useEffect(() => {
        document.title = `Sitam - ${props.data.title}`;
    }, []);

    return (
    <div>
        <div className='d-flex justify-content-center page-title-text'>{props.data.title}</div>
        {!smallSize ? <>
                {props.data.firstText && <TextBoxWithShadow className='col-10 mx-auto mt-4 d-flex justify-content-center'
                               text={props.data.firstText.text}
                        />}
                <section className='col-10 mx-auto row mt-5'>
                     <TextBoxWithShadow className='col-lg-4 col-xl-5 col-md-6 col-6 mr-5'
                                       text={props.data.secondText.text}
                     />
                    <TwoImagesElement className='col-xl-5 col-lg-7 col-md-5 ml-lg-0 ml-xl-5 ml-md-0 ml-0'
                                      first={props.data.firstImage}
                                      second={GirlWithPhone}
                                      maxSize={props.data.maxSize || false}
                                      alt={props.data.title}
                    />
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
                    <TwoImagesElement first={props.data.firstImage}
                                      second={GirlWithPhone}
                                      alt={props.data.title}
                    />
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
