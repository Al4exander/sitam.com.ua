import React from 'react';
import './styles/Footer.css'
import {FaqComponent} from "./Faq";
import {HowDoWeWork} from "./HowDoWeWork";
import {OurAdvantages} from "./OurAdvantages";
import {ContactsAndAsk} from "./ContactsAndAsk";

export function Footer(props: any) {
  return (
      <div>
          <HowDoWeWork/>
          <OurAdvantages/>
          <FaqComponent {...props}/>
          <ContactsAndAsk/>
          <div className='footer d-flex justify-content-center'>2021 © Все права защищены «Sitam»</div>
      </div>
  );
}
