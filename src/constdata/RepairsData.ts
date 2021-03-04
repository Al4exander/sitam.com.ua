import {HeaderLinks} from '../pages/header/Interfaces';

export const repairsLinks: HeaderLinks[] = [{
    Type: 'ГИДРАВЛИКА',
    Col: 4,
    children: [{
        link: '/repair-of-hydraulic-cylinders',
        title: 'Ремонт гидроцилиндров'
    },{
        link: '/restoration-of-cylinders',
        title: 'Восстановление цилиндров'
    },{
        link: '/hydraulic-pump-repair',
        title: 'Ремонт гидронасоса'
    },{
        link: '/hydraulic-oil-change',
        title: 'Замена гидравлического масла'
    },{
        link: '/hydraulic-motor-repair',
        title: 'Ремонт гидромотора'
    }]
},{
    Type: 'ПРЕССОВОЕ ОБОРУДОВАНИЕ',
    Col: 5,
    children: [{
        link: '/hydraulic-press',
        title: 'Гидравлический пресс'
    },{
        link: '/modernization-of-the-hydraulic-press',
        title: 'Модернизация гидравлического пресса'
    },{
        link: '/waste-paper-press',
        title: 'Пресс для макулатуры'
    },{
        link: '/press-compactor',
        title: 'Пресс компактор'
    },{
        link: '/press-shears',
        title: 'Пресс-ножницы'
    },{
        link: '/modernization-of-the-shear-press',
        title: 'Модернизация пресс-ножниц'
    },{
        link: '/guillotine-press-shears',
        title: 'Гильотинные пресс ножницы'
    },{
        link: '/repair-of-a-baler-for-scrap-metal',
        title: 'Ремонт пакетировочного пресса для металлолома'
    },{
        link: '/bending-press',
        title: 'Листосгибочный пресс'
    }]
},{
    Type: 'АГРОПРОМЫШЛЕННОСТЬ',
    Col: 4,
    children: [{
        link: '/silo-repair',
        title: 'Ремонт силоса'
    },{
        link: '/elevator-repair',
        title: 'Ремонт элеватора'
    },{
        link: '/norii-repair',
        title: 'Ремонт нории'
    },{
        link: '/scraper-conveyor-conveyor-repair',
        title: 'Ремонт скребкового конвейера (транспортера)'
    },{
        link: '/belt-conveyor-repair',
        title: 'Ремонт конвейера ленточного'
    },{
        link: '/repair-of-a-grain-dryer',
        title: 'Ремонт зерносушилки'
    },{
        link: '/mold-repair',
        title: 'Ремонт кристаллизатора'
    },{
        link: '/reconstruction-of-the-meal-feed-line',
        title: 'Реконструкция линии подачи шрота'
    },{
        link: '/repair-of-the-dryer-cooler-of-meal',
        title: 'Ремонт сушилки-охладителя шрота'
    },{
        link: '/repair-of-the-seed-crusher',
        title: 'Ремонт семенорушки'
    },{
        link: '/oil-shop-brazier-repair',
        title: 'Ремонт жаровни маслоцеха'
    },{
        link: '/toaster-repair-vat-evaporator',
        title: 'Ремонт тостера (испаритель чанный)'
    },]
},{
    Type: 'ГРУЗОПОДЪЕМНОЕ ОБОРУДОВАНИЕ',
    Col: 5,
    children: [{
        link: '/grapple-repair',
        title: 'Ремонт грейфера'
    },{
        link: '/overhead-crane-repair',
        title: 'Ремонт мостового крана'
    },{
        link: '/gantry-crane-repair',
        title: 'Ремонт козлового крана'
    },{
        link: '/repair-of-crane-tracks',
        title: 'Ремонт подкрановых путей'
    }]
},{
    Type: 'ПРОЧЕЕ',
    Col: 4,
    children: [{
        link: '/process-pipeline-repair',
        title: 'Ремонт технологического трубопровода'
    },{
        link: '/repair-of-steel-tanks',
        title: 'Ремонт стальных резервуаров'
    },{
        link: '/cooling-tower-repair',
        title: 'Ремонт градирни'
    },{
        link: '/repair-of-a-car-dumper',
        title: 'Ремонт вагоноопрокидывателя'
    }]
},
];