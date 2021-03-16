import React from 'react';
import {
    Route,
} from "react-router-dom";
import {TwoImagesTwoTextsType} from "../standartPages/twoImagesPage/TwoImagesTwoTextsType";
import {OneImageTwoTextsSmallType} from "../standartPages/oneImagePage/OneImageTwoTextsSmallType";
import {siloInstallation} from "../../constdata/pages/silo-installation";
import {oilPressingLineInstallation} from "../../constdata/pages/oil-pressing-line-installation";
import {oilExtractionLineInstallation} from "../../constdata/pages/oil-extraction-line-installation";

export function RoutesPage(props: any) {
    return (
        <>
            <Route exact path='/silo-installation'>
                <TwoImagesTwoTextsType data={siloInstallation} smallSize={props.smallSize}/>
            </Route>
            <Route exact path='/oil-pressing-line-installation'>
                <TwoImagesTwoTextsType data={oilPressingLineInstallation} smallSize={props.smallSize}/>
            </Route>
            <Route exact path='/oil-extraction-line-installation'>
                <OneImageTwoTextsSmallType data={oilExtractionLineInstallation} smallSize={props.smallSize}/>
            </Route>
        </>
  );
}

