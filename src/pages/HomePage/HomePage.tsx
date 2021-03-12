import React from 'react';
import Coworking from '../../svgFiles/Coworking.svg';
import {WorkWithComponent} from "./WorkWIth";
import {MainWays} from "./MainWays";

export function HomePage(props: any) {
  return (
      <div>
          <WorkWithComponent smallSize={props.smallSize}/>
          <MainWays/>
          {/*<img src={Coworking}/>*/}
      </div>
  );
}

