import {HeaderLinks} from "../pages/header/Interfaces";

export const othersLinks: HeaderLinks[] = [{
    Type: 'МЕТАЛЛОКОНСТРУКЦИИ',
    Col: 8,
    children: [{
        link: "/welding-works",
        title: 'Сварочные работы'
    },{
        link: "/manufacturing-and-installation-of-metal-structures",
        title: 'Изготовление и монтаж металлоконструкций'
    }]
},{
    Type: 'ТЕПЛОИЗОЛЯЦИЯ',
    Col: 7,
    children: [{
        link: "/thermal-insulation-of-the-tank",
        title: 'Теплоизоляция резервуара'
    },{
        link: "/thermal-insulation-of-the-pipeline",
        title: 'Теплоизоляция трубопровода'
    }]
},{
    Type: 'ОЧИСТКА И ЗАЩИТА',
    Col: 8,
    children: [{
        link: "/silo-cleaning",
        title: 'Очистка силоса'
    },{
        link: "/painting-corrosion-protection-of-the-tank",
        title: 'Покраска (антикоррозионная защита) резервуара'
    },{
        link: "/crane-painting",
        title: 'Покраска крана'
    }]
}];
