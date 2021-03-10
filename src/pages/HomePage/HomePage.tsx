import React from 'react';
import Coworking from '../../svgFiles/Coworking.svg';
import {WorkWithComponent} from "./WorkWIth";

export function HomePage(props: any) {
  return (
      <div>
          <WorkWithComponent smallSize={props.smallSize}/>
          {/*<img src={Coworking}/>*/}
      </div>
  );
}

