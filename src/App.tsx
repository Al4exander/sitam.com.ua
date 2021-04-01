import React, {useContext, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {Header} from "./pages/header/Header";
import {HomePage} from "./pages/HomePage/HomePage";
import {Footer} from "./pages/footer/Footer";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import {SizeContext} from "./lib/sizeContext";
import {OneImageTwoTextsSmallType} from "./pages/standartPages/oneImagePage/OneImageTwoTextsSmallType";
import {TwoImagesTwoTextsType} from "./pages/standartPages/twoImagesPage/TwoImagesTwoTextsType";
import {ThreeTwoImagesTwoTextsType} from "./pages/standartPages/twoImagesPageVise/ThreeTwoImagesTwoTextsType";
import {OneImageOneTextType} from "./pages/standartPages/oneImagePage/OneImageOneTextType";
import {TwoImagesOneTextType} from "./pages/standartPages/twoImagesPage/TwoImagesOneTextType";
import {
    siloInstallation,
    oilExtractionLineInstallation,
    repairAndInstallationOfOilExtractionPlantEquipment,
    bunkerManufacturingAndInstallation,
    assemblyOfTheConveyor,
    installationOfContainers,
    oilPressingLineInstallation,
    oilCleaningLineInstallation,
    installationOfMachines
} from './constdata/pages';
import {PageTemplates} from "./pages/standartPages/enum";
import {TwoImagesTwoTextsBigType} from "./pages/standartPages/twoImagesPage/TwoImagesTwoTextsBigType";

function App() {
    const [smallSize, setSmallSize] = useContext(SizeContext);
    const data = [siloInstallation,
        oilExtractionLineInstallation,
        repairAndInstallationOfOilExtractionPlantEquipment,
        bunkerManufacturingAndInstallation,
        assemblyOfTheConveyor,
        installationOfContainers,
        oilPressingLineInstallation,
        oilCleaningLineInstallation,
        installationOfMachines,
    ];

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 850) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
    };

    const determineElementType = (element: any) => {
        switch (element.type) {
            case PageTemplates.TwoImagesTwoTextsType:
                return <TwoImagesTwoTextsType data={element}/>;
            case PageTemplates.OneImageOneTextType:
                return <OneImageOneTextType data={element}/>;
            case PageTemplates.OneImageTwoTextsSmallType:
                return <OneImageTwoTextsSmallType data={element}/>;
            case PageTemplates.TwoImagesOneTextType:
                return <TwoImagesOneTextType data={element}/>;
            case PageTemplates.ThreeTwoImagesTwoTextsType:
                return <ThreeTwoImagesTwoTextsType data={element}/>;
            case PageTemplates.TwoImagesTwoTextsBigType:
                return <TwoImagesTwoTextsBigType data={element}/>;
        }
    };

    return (
      <Router>
          <Header/>
          <Routes>
              <Route path='/'>
                  <HomePage/>
              </Route>
              {data.map((element: any) => {
                  return <Route path={element.url}>
                      {determineElementType(element)}
                  </Route>
              })}
              <Route path={'*'}>
                  <Navigate to='/' />
              </Route>
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
