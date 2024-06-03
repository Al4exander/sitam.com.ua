import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useParams
} from "react-router-dom";
import { Header } from "./pages/header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { ExtraData } from "./pages/footer/ExtraData";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import { SizeContext } from "./lib/sizeContext";
import { OneImageTwoTextsSmallType } from "./pages/standartPages/oneImagePage/OneImageTwoTextsSmallType";
import { TwoImagesTwoTextsType } from "./pages/standartPages/twoImagesPage/TwoImagesTwoTextsType";
import { ThreeTwoImagesTwoTextsType } from "./pages/standartPages/twoImagesPageVise/ThreeTwoImagesTwoTextsType";
import { OneImageOneTextType } from "./pages/standartPages/oneImagePage/OneImageOneTextType";
import { TwoImagesOneTextType } from "./pages/standartPages/twoImagesPage/TwoImagesOneTextType";
import { data as routesData } from './constdata/pages';
import { data as uaRoutesData } from './constdata/uaPages';
import { PageTemplates } from "./pages/standartPages/enum";
import { TwoImagesTwoTextsBigType } from "./pages/standartPages/twoImagesPage/TwoImagesTwoTextsBigType";
import { TwoImagesOneTextBigType } from "./pages/standartPages/twoImagesPage/TwoImagesOneTextBigType";
import { Projects } from "./pages/projects/Projects";
import { Tender } from "./pages/Tender/Tender";
import { Helmet } from "react-helmet";
import { ShowMenuProvider } from "./lib/showMenuContext";
import { ContactsAndAsk } from "./pages/footer/ContactsAndAsk";
import { Footer } from "./pages/footer/Footer";
import { LanguageContext, LanguageProvider } from "./lib/languageContext";
import { SimpleTextType } from "./pages/standartPages/simpleText/SimpleTextType";

const AppRoutes = () => {
    const [smallSize, setSmallSize] = useContext(SizeContext);
    const [language] = useContext(LanguageContext);
    const routes = (language === 'ru' ? routesData : uaRoutesData) || routesData;

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if (window.innerWidth < 850) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
    };

    const determineElementType = (element: any) => {
        switch (element.type) {
            case PageTemplates.TwoImagesTwoTextsType:
                return <TwoImagesTwoTextsType data={element} />;
            case PageTemplates.OneImageOneTextType:
                return <OneImageOneTextType data={element} />;
            case PageTemplates.OneImageTwoTextsSmallType:
                return <OneImageTwoTextsSmallType data={element} />;
            case PageTemplates.TwoImagesOneTextType:
                return <TwoImagesOneTextType data={element} />;
            case PageTemplates.ThreeTwoImagesTwoTextsType:
                return <ThreeTwoImagesTwoTextsType data={element} />;
            case PageTemplates.TwoImagesTwoTextsBigType:
                return <TwoImagesTwoTextsBigType data={element} />;
            case PageTemplates.TwoImagesOneTextBigType:
                return <TwoImagesOneTextBigType data={element} />;
            case PageTemplates.SimpleText:
                return <SimpleTextType data={element} />;
        }
    };

    return (
        <>
            <Helmet>
                <title>Поставщики услуг для промышленных предприятий | Ситам</title>
                <meta name="description" content="Ремонт и техническое обслуживание | Работы по монтажу и демонтажу | Изготовление металлоконструкций | Строительные работы и др." />
                <link rel="canonical" href="https://sitam.tech" />
            </Helmet>
            <ShowMenuProvider>
                <Header />
                <Routes>
                    <Route path='/:lang/*'>
                        <Route path='/' element={<><HomePage /><ExtraData /></>} />
                        {routes.map((element: any, index: number) => (
                            <Route path={element.url} key={index} element={<><div>{determineElementType(element)}</div><ExtraData /></>} />
                        ))}
                        <Route path='projects' element={<><Projects /><ExtraData /></>} />
                        <Route path='contacts' element={<ContactsAndAsk />} />
                        <Route path='tender' element={<><Tender /><ExtraData /></>} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Route>
                    <Route path='*' element={<Navigate to={`/${language}`} />} />
                </Routes>
                <Footer />
            </ShowMenuProvider>
        </>
    );
};

export const App = () => (
    <Router>
        <LanguageProvider>
            <AppRoutes />
        </LanguageProvider>
    </Router>
);
