import {Children} from "../pages/header/Interfaces";
import sugarFactories from '../images/pages/sugar-factories/firstImage.jpg';
import oilExtraction from '../images/pages/repair-and-installation-of-oil-extraction-plant-equipment/secondImage.png';
import industrialEquipment from '../images/pages/installation-of-industrial-equipment/firstImage.jpg';
import scrapProcessing from '../images/pages/scrap-processing-enterprises/secondImage.jpg';
import technologicalLines from '../images/pages/installation-of-technological-lines/secondImage.jpg';
import pressingEquipment from '../images/pages/repair-of-pressing-equipment/image.jpg';

export const homePageMainWaysData: Children[] = [{
    link: '/sugar-factories',
    title: 'Сахарные заводы',
    image: sugarFactories,
},{
    link: '/repair-and-installation-of-oil-extraction-plant-equipment',
    title: 'Маслоэкстракционные заводы',
    image: oilExtraction,
},{
    link: '/installation-of-industrial-equipment',
    title: 'Монтаж промышленного оборудования',
    image: industrialEquipment,
},{
    link: '/scrap-processing-enterprises',
    title: 'Ломоперерабатывающие предприятия',
    image: scrapProcessing,
},{
    link: '/installation-of-technological-lines',
    title: 'Монтаж технологических линий',
    image: technologicalLines,
},{
    link: '/repair-of-pressing-equipment',
    title: 'Ремонт прессового оборудования',
    image: pressingEquipment,
}];
