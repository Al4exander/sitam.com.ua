import React from 'react';
import {
    Route,
} from "react-router-dom";
import {WithButtonsType} from "../standartPages/twoImagesPage/WithButtonsType";
import {siloInstallation} from "../../constdata/pages/silo-installation";
import {oilPressingLineInstallation} from "../../constdata/pages/oil-pressing-line-installation";

export function RoutesPage(props: any) {
    return (
        <>
          <Route exact path='/silo-installation'>
              <WithButtonsType data={siloInstallation} smallSize={props.smallSize}/>
          </Route>
          <Route exact path='/oil-pressing-line-installation'>
              <WithButtonsType data={oilPressingLineInstallation} smallSize={props.smallSize}/>
          </Route>
        </>
  );
}

