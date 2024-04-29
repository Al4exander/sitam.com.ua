import secondImage from '../../images/pages/scrap-processing-enterprises/secondImage.jpg';
import firstImage from '../../images/pages/scrap-processing-enterprises/firstImage.jpg';
import {PageTemplates} from "../../pages/standartPages/enum";

export const scrapProcessingEnterprises = {
    url: '/scrap-processing-enterprises',
    title: 'Підприємства з переробки лому',
    firstImage,
    secondImage,
    alsoSeeIndex: 9,
    type: PageTemplates.TwoImagesOneTextType,
    keywords: 'ремонт обладнання для переробки лому',
    buttons: [{
        text: 'Ремонт грейфера, перевантажувача',
        url: '/repair-of-grab-reloader'
    },{
        text: 'Ремонт прес-ножиць',
        url: '/press-shears'
    },{
        text: 'Ремонт пакувального пресу для металолому',
        url: '/repair-of-a-baler-for-scrap-metal'
    }],
    description: 'Виконаємо ремонт обладнання для переробки лому підприємств (пунктів прийому) з заготівлі та переробки лому чорних і кольорових металів',
    text: `Наша компанія виконає ремонт обладнання для переробки лому підприємств (пунктів прийому) з заготівлі та переробки лому чорних і кольорових металів.

#### До переліку обладнання для переробки металолому може входити:

- Перевантажувач металолому

- Грейфер, маніпулятор, конвеєр

- Прес-ножиці для металолому

- Прес для вибивання металевої стружки в брикети

- Прес пакувальний для металолому

- Дробарка, розмелювач, шредер для лому та стружки металів

- Алігаторні ножиці для різання металу

- Металовоз (ломовоз)

- Тара і відсіки для зберігання металолому

- Промислові ваги та інше.`,
};