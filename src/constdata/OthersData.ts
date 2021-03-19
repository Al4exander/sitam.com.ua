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
    Type: 'Молниезащита',
    Col: 4,
    children: [{
        link: '/design-project-approval-with-the-state-institution-of-emergency-situations',
        title: 'Проектирование , согласование проекта с ГУ ГСЧС'
    },{
        link: '/installation-use-of-european-level-components-commissioning',
        title: 'Монтаж, использование комплектующих европейского уровня, сдача в эксплуатацию'
    },{
        link: '/production-and-installation-of-containers-for-the-food-industry',
        title: 'Изготовление и монтаж ёмкостей для пищевой промышленности',
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
