import {HeaderLinks} from "../pages/header/Interfaces";

export const montageDemontageLinks: HeaderLinks[] = [{
    Type: 'Станки',
    Col: 4,
    children: [{
        link: '/installation-of-presses',
        title: 'Монтаж прессов'
    },{
        link: '/installation-of-machines',
        title: 'Монтаж станков'
    },{
        link: '/dismantling-of-machines',
        title: 'Демонтаж станков'
    },{
        link: '/installation-of-technological-lines',
        title: 'Монтаж технологических линий'
    }]
},{
    Type: 'Агропромышленность',
    Col: 4,
    children: [{
        link: '/silo-installation',
        title: 'Монтаж , демонтаж силоса'
    },{
        link: '/bunker-manufacturing-and-installation',
        title: 'Изготовление и монтаж бункера'
    },{
        link: '/assembly-of-the-conveyor',
        title: 'Монтаж, демонтаж конвейера (скребкового, ленточного)'
    },{
        link: '/installation-of-containers',
        title: 'Изготовление и монтаж ёмкостей н/ж стали'
    },{
        link: '/disassembly-installation-of-miscella-distiller',
        title: 'Монтаж / демонтаж дистилятора'
    },{
        link: '/elevator-assembly-and-replacement',
        title: 'Монтаж / демонтаж нории'
    },{
        link: '/installation-and-dismantling-of-car-scales',
        title: 'Монтаж и демонтаж вагонных весов'
    },{
        link: '/installation-of-granulators',
        title: 'Монтаж грануляторов'
    },{
        link: '/installation-of-compresses',
        title: 'Монтаж компрессов'
    }]
},{
    Type: 'Отопление и вентиляция',
    Col: 7,
    children: [{
        link: '/cyclone-installation',
        title: 'Установка циклона'
    },{
        link: '/compressor-installation',
        title: 'Монтаж компрессора'
    },{
        link: '/installation-of-industrial-boilers',
        title: 'Монтаж промышленных котлов'
    },{
        link: '/boiler-room-installation-repair',
        title: 'Монтаж, ремонт котельной'
    }]
},{
    Type: 'Инженерные сети',
    Col: 4,
    children: [{
        link: '/installation-dismantling-of-process-pipelines-heat-carriers-steam-water)',
        title: 'Монтаж/ демонтаж технологических трубопроводов (теплоносителей, паро – водо)'
    },{
        link: '/dismantling-and-replacement-of-the-pipeline',
        title: 'Демонтаж и замена трубопровода'
    },{
        link: '/installation-replacement-of-power-control-electric-lines',
        title: 'Монтаж / замена силовых, контрольных электромагистралей'
    }]
},{
    Type: 'Металлоконструкции',
    Col: 4,
    children: [{
        link: '/installation-dismantling-of-process-pipelines-heat-carriers-steam-water)',
        title: 'Монтаж/ демонтаж технологических трубопроводов (теплоносителей, паро – водо)'
    },{
        link: '/installation-replacement-of-power-control-electric-lines',
        title: 'Монтаж / замена силовых, контрольных электромагистралей'
    }]
}
];