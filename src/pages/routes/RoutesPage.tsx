import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import {TwoImagesTwoTextsType} from "../standartPages/twoImagesPage/TwoImagesTwoTextsType";
import {OneImageTwoTextsSmallType} from "../standartPages/oneImagePage/OneImageTwoTextsSmallType";
import {siloInstallation} from "../../constdata/pages/silo-installation";
import {oilPressingLineInstallation} from "../../constdata/pages/oil-pressing-line-installation";
import {oilExtractionLineInstallation} from "../../constdata/pages/oil-extraction-line-installation";

export const RoutesPage = () => {
    console.log(test);
    return (
        <Routes>
            <Route path='/silo-installation'>
                <TwoImagesTwoTextsType data={siloInstallation}/>
            </Route>
            <Route path='/oil-pressing-line-installation'>
                <TwoImagesTwoTextsType data={oilPressingLineInstallation}/>
            </Route>
            <Route path='/oil-extraction-line-installation'>
                <OneImageTwoTextsSmallType data={oilExtractionLineInstallation}/>
            </Route>
        </Routes>
  );
};
