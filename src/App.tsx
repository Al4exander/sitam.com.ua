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
    oilCleaningLineInstallation
} from './constdata/pages';

function App() {
    const [smallSize, setSmallSize] = useContext(SizeContext);

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

    return (
      <Router>
          <Header/>
          <Routes>
              <Route path='/'>
                  <HomePage/>
              </Route>
              <Route path={siloInstallation.url}>
                  <TwoImagesTwoTextsType data={siloInstallation}/>
              </Route>
              <Route path={repairAndInstallationOfOilExtractionPlantEquipment.url}>
                  <TwoImagesTwoTextsType data={repairAndInstallationOfOilExtractionPlantEquipment}/>
              </Route>
              <Route path={oilCleaningLineInstallation.url}>
                  <TwoImagesOneTextType data={oilCleaningLineInstallation}/>
              </Route>
              <Route path={oilPressingLineInstallation.url}>
                  <OneImageOneTextType data={oilPressingLineInstallation}/>
              </Route>
              <Route path={oilExtractionLineInstallation.url}>
                  <OneImageTwoTextsSmallType data={oilExtractionLineInstallation}/>
              </Route>
              <Route path={bunkerManufacturingAndInstallation.url}>
                  <OneImageTwoTextsSmallType data={bunkerManufacturingAndInstallation}/>
              </Route>
              <Route path={assemblyOfTheConveyor.url}>
                  <ThreeTwoImagesTwoTextsType data={assemblyOfTheConveyor}/>
              </Route>
              <Route path={assemblyOfTheConveyor.url}>
                  <ThreeTwoImagesTwoTextsType data={assemblyOfTheConveyor}/>
              </Route>
              <Route path={installationOfContainers.url}>
                  <ThreeTwoImagesTwoTextsType data={installationOfContainers}/>
              </Route>
              <Route path={'*'}>
                  <Navigate to='/' />
              </Route>
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
