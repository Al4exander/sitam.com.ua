import React, {useContext, useEffect, useState} from 'react';
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
import {oilPressingLineInstallation} from "./constdata/pages/oil-pressing-line-installation";
import {oilExtractionLineInstallation} from "./constdata/pages/oil-extraction-line-installation";
import {siloInstallation} from "./constdata/pages/silo-installation";
import {OneImageTwoTextsSmallType} from "./pages/standartPages/oneImagePage/OneImageTwoTextsSmallType";
import {TwoImagesTwoTextsType} from "./pages/standartPages/twoImagesPage/TwoImagesTwoTextsType";

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
              <Route path='/silo-installation'>
                  <TwoImagesTwoTextsType data={siloInstallation}/>
              </Route>
              <Route path='/oil-pressing-line-installation'>
                  <TwoImagesTwoTextsType data={oilPressingLineInstallation}/>
              </Route>
              <Route path='/oil-extraction-line-installation'>
                  <OneImageTwoTextsSmallType data={oilExtractionLineInstallation}/>
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
