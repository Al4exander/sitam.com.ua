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
import { data as routesData } from './constdata/pages';
import {PageTemplates} from "./pages/standartPages/enum";
import {TwoImagesTwoTextsBigType} from "./pages/standartPages/twoImagesPage/TwoImagesTwoTextsBigType";
import {TwoImagesOneTextBigType} from "./pages/standartPages/twoImagesPage/TwoImagesOneTextBigType";
import {Projects} from "./pages/projects/Projects";
import {Tender} from "./pages/Tender/Tender";
import {Sitemap} from "./Sitemap";
import {Helmet} from "react-helmet";

export const App = () => {
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
            case PageTemplates.TwoImagesOneTextBigType:
                return <TwoImagesOneTextBigType data={element}/>;
        }
    };

    return (
    <>
        <Helmet>
            <title>Поставщики услуг для промышленных предприятий | Ситам</title>
            <meta name="description" content="Ремонт и техническое обслуживание | Работы по монтажу и демонтажу | Изготовление металлоконструкций | Строительные работы и др." />
            <link rel="canonical" href="http://www.sitam.tech"/>
        </Helmet>
        <Router>
          <Header/>
          <Routes>
              <Route path='/'>
                  <HomePage/>
              </Route>
              {routesData.map((element: any, index: number) => {
                  return <Route path={element.url} key={index}>
                      {determineElementType(element)}
                  </Route>
              })}
              <Route path='/projects'>
                  <Projects/>
              </Route>
              <Route path='/tender'>
                  <Tender/>
              </Route>
              {/*<Route path='sitemap'>*/}
                  {/*<Sitemap/>*/}
              {/*</Route>*/}
              <Route path={'*'}>
                  <Navigate to='/' />
              </Route>
          </Routes>
          <Footer/>
        </Router>
    </>
  );
};
