import React from 'react';
import {ImagesCarousel} from "../../elements/ImagesCarousel/ImagesCarousel";
import manufacture from '../../images/common/manufacture.jpg';
import metalurg from '../../images/common/metalurg.jpg';
import ShugarFactory from '../../images/common/ShugarFactory.jpg';
import '../HomePage/styles/MainWays.css';

export function MainWays() {
  return (
      <div className='mt-5'>
          <div className='d-flex justify-content-center'>
              <p className='main-ways-text'>Наши основные направления деятельности</p>
          </div>
          <div className='d-flex justify-content-center'>
              <ImagesCarousel images={[{
                  url: manufacture, text: 'Маслоэкстракционные заводы'
              }, {
                  url: metalurg, text: 'Металлургические предприятия'
              }, {
                  url: ShugarFactory, text: 'Сахарные заводы'
              }]}/>
          </div>
      </div>
  );
}
