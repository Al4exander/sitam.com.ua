import React from 'react';
import {ButtonWithShadow} from "../commonElements/ButtonWithShadow";
import {TextBoxWithShadow} from "../commonElements/TextBoxWithShadow";

export function WithButtonsType(props: any) {
  return (
    <div>
        <div className='row justify-content-center'>
            <div className='row col-lg-9 col-md-8 col-sm-7 col-12'>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии прессования масла'/>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии экстракции масла'/>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии очистки масла'/>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии гидратации и нейтрализации масла'/>
            </div>
            <div className='row col-lg-9 col-md-8 col-sm-7 col-12'>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии адсорбции (отбеливания) масла'/>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии винтеризации масла (вымораживания)'/>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии рафинации и дезодорации масла'/>
                <ButtonWithShadow className='col-lg-3 col-md-6 col-sm-6' text='Монтаж линии сушки фосфатидов'/>
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-4'>
                <img src={props.data.firstImage}/>
                <TextBoxWithShadow className='col-12 mt-5' height={800} width={400} text={props.data.firstText}/>
            </div>
            <TextBoxWithShadow className='col-5' height={1200} width={600} text={props.data.secondText}/>
            <div className='row col-10'>
                <div className='col-6'>
                    <img src={props.data.pointRight}/>
                </div>
                <div className='col-5'>
                    <img src={props.data.secondImage}/>
                </div>
            </div>
        </div>
    </div>
);
}
