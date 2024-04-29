import {HeaderLinks} from '../pages/header/Interfaces';

export const repairsLinks: HeaderLinks[] = [{
    Type: 'ПРЕСОВЕ ОБЛАДНАННЯ',
    Col: 5,
    children: [{
        link: '/hydraulic-press',
        title: 'Гідравлічний прес'
    },{
        link: '/modernization-of-the-hydraulic-press',
        title: 'Модернізація гідравлічного преса'
    },{
        link: '/waste-paper-press',
        title: 'Прес для макулатури'
    },{
        link: '/press-compactor',
        title: 'Прес-компактор'
    },{
        link: '/press-shears',
        title: 'Прес-ножиці'
    },{
        link: '/modernization-of-the-shear-press',
        title: 'Модернізація прес-ножиць'
    },{
        link: '/guillotine-press-shears',
        title: 'Гільотинні прес-ножиці'
    },{
        link: '/repair-of-a-baler-for-scrap-metal',
        title: 'Ремонт пакетувального преса для металобрухту'
    },{
        link: '/bending-press',
        title: 'Листогибочний прес'
    }]
},{
    Type: 'АГРОПРОМИСЛОВІСТЬ',
    Col: 4,
    children: [{
        link: '/silo-repair',
        title: 'Ремонт силоса'
    },{
        link: '/elevator-repair',
        title: 'Ремонт елеватора'
    },{
        link: '/norii-repair',
        title: 'Ремонт норії'
    },{
        link: '/scraper-conveyor-conveyor-repair',
        title: 'Ремонт скребкового конвейєра (транспортера)'
    },{
        link: '/belt-conveyor-repair',
        title: 'Ремонт конвейєра ленточного'
    },{
        link: '/repair-of-a-grain-dryer',
        title: 'Ремонт зерносушарки'
    },{
        link: '/mold-repair',
        title: 'Ремонт кристалізатора'
    },{
        link: '/reconstruction-of-the-meal-feed-line',
        title: 'Реконструкція лінії подачі шроту'
    },{
        link: '/repair-of-the-dryer-cooler-of-meal',
        title: 'Ремонт сушильника-охолоджувача шроту'
    },{
        link: '/repair-of-the-seed-crusher',
        title: 'Ремонт сіменоочисника'
    },{
        link: '/oil-shop-brazier-repair',
        title: 'Ремонт жаровні маслозаводу'
    },{
        link: '/toaster-repair-vat-evaporator',
        title: 'Ремонт тостера (випарник чанний)'
    },]
},{
    Type: 'ОЧИЩЕННЯ І ЗАХИСТ',
    Col: 8,
    children: [{
        link: "/silo-cleaning",
        title: 'Очищення силоса'
    },{
        link: "/painting-corrosion-protection-of-the-tank",
        title: 'Фарбування (антикорозійний захист) резервуара'
    },{
        link: "/crane-painting",
        title: 'Фарбування крана'
    }]
},{
    Type: 'ІНШЕ',
    Col: 4,
    children: [{
        link: '/process-pipeline-repair',
        title: 'Ремонт технологічного трубопроводу'
    },{
        link: '/repair-of-steel-tanks',
        title: 'Ремонт сталевих резервуарів'
    },{
        link: '/cooling-tower-repair',
        title: 'Ремонт градирні'
    },{
        link: '/repair-of-a-car-dumper',
        title: 'Ремонт вагоноопрокидувача'
    }]
}
];
