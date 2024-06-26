import secondImage from '../../images/pages/scrap-processing-enterprises/secondImage.jpg';
import firstImage from '../../images/pages/scrap-processing-enterprises/firstImage.jpg';
import {PageTemplates} from "../../pages/standartPages/enum";

export const scrapProcessingEnterprises = {
    url: '/scrap-processing-enterprises',
    title: 'Ломоперерабатывающие предприятия',
    firstImage,
    secondImage,
    alsoSeeIndex: 9,
    type: PageTemplates.TwoImagesOneTextType,
    keywords: 'ремонт ломоперерабатывающего оборудования',
    buttons: [{
        text: 'Ремонт грейфера, перегружателя',
        url: '/repair-of-grab-reloader'
    },{
        text: 'Ремонт пресс ножниц',
        url: '/press-shears'
    },{
        text: 'Ремонт пакетировочного пресса для металлолома',
        url: '/repair-of-a-baler-for-scrap-metal'
    }],
    description: 'Выполним ремонт ломоперерабатываюего оборудования предприятий (приемных пунктов) по заготовке и переработке лома черных и цветных металлов',
    text: `Наша компания выполнит ремонт ломоперерабатываюего оборудования предприятий (приемных пунктов) по заготовке и переработке лома черных и цветных металлов.

#### В список оборудования для переработки металлолома может входить:

- Перегружаетль металлолома

- Грейфер, манипулятор, конвейер

- Пресс-ножницы для металлолома

- Пресс для брикетирования металлической стружки

- Пресс пакетировочный для металлолома

- Дробилка, измельчитель, шредер для лома и стружки металлов

- Аллигаторные ножницы для резки металла

- Металловоз (ломовоз)

- Тара и отсеки для хранения металлолома

- Промышленные весы и др.`,
};
