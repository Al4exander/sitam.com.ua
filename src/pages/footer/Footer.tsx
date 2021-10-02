import React from 'react';
import './styles/Footer.css'
import {FaqComponent} from "./Faq";
import {HowDoWeWork} from "./HowDoWeWork";
import {OurAdvantages} from "./OurAdvantages";
import {ContactsAndAsk} from "./ContactsAndAsk";

export function Footer() {
  return (
      <div>
          <HowDoWeWork/>
          <OurAdvantages/>
          <FaqComponent />
          <ContactsAndAsk/>
      </div>
  );
}
