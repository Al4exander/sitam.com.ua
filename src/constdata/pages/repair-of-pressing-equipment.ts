import image from '../../images/pages/repair-of-pressing-equipment/image.jpg';
import {PageTemplates} from "../../pages/standartPages/enum";

export const repairOfPressingEquipment = {
    url: '/repair-of-pressing-equipment',
    title: 'Ремонт и монтаж оборудования маслоэкстракционного завода',
    image,
    keywords: 'реконструкция маслоэкстракционного завода,ремонт завода,ремонт конвейера',
    type: PageTemplates.OneImageOneTextType,
    buttons: [{
        text: 'Ремонт гидравлического пресса',
        url: '/hydraulic-press'
    },{
        text: 'Ремонт пресс ножниц',
        url: '/press-shears'
    },{
        text: 'Ремонт пакетировочного пресса для металлолома',
        url: '/repair-of-a-baler-for-scrap-metal'
    },{
        text: 'Ремонт пресса для макулатуры и вторсырья',
        url: '/waste-paper-press'
    },{
        text: 'Ремонт листогибочного пресса',
        url: '/bending-press'
    },{
        text: 'Ремонт гильотинных ножниц',
        url: '/guillotine-press-shears'
    },{
        text: 'Ремонт пресс компактора',
        url: '/press-compactor'
    }],
    text: `Наша компания выполнит ремонт и обслуживание прессового оборудования предприятий по металлобработке и переработке металлолома и вторсырья.

В список услуг могут входить:

Диагностика пресса;

Текущий ремонт;

Капитальный ремонт пресса;

Монтаж пресса;

Техническое обслуживание пресса;

Модернизация пресса;

Пусконаладка.`,
};