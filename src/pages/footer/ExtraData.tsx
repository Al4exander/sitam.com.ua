import React from 'react';
import './styles/footer.css'
import {FaqComponent} from "./Faq";
import {HowDoWeWork} from "./HowDoWeWork";
import {OurAdvantages} from "./OurAdvantages";
import {useLocation} from "react-router-dom";

export function ExtraData() {
    const location = useLocation();

    const notNeededLocations = [
        '/ua/privacy',
        '/ua/oferta',
        '/ua/otkaz',
        '/ru/privacy',
        '/ru/oferta',
        '/ru/otkaz',
    ];

    if (notNeededLocations.includes(location.pathname)) {
        return null;
    }

    return (
      <>
          <HowDoWeWork/>
          <OurAdvantages/>
          <FaqComponent />
      </>
  );
}
