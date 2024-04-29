import {Children} from "../pages/header/Interfaces";
import sugarFactories from '../images/pages/sugar-factories/firstImage.jpg';
import oilExtraction from '../images/pages/repair-and-installation-of-oil-extraction-plant-equipment/secondImage.png';
import industrialEquipment from '../images/pages/installation-of-industrial-equipment/firstImage.jpg';
import scrapProcessing from '../images/pages/scrap-processing-enterprises/secondImage.jpg';
import technologicalLines from '../images/pages/installation-of-technological-lines/secondImage.jpg';
import pressingEquipment from '../images/pages/repair-of-pressing-equipment/image.jpg';

export const homePageMainWaysData: Children[] = [{
    link: '/sugar-factories',
    title: 'Цукрові заводи',
    image: sugarFactories,
},{
    link: '/repair-and-installation-of-oil-extraction-plant-equipment',
    title: 'Маслоекстракційні заводи',
    image: oilExtraction,
},{
    link: '/installation-of-industrial-equipment',
    title: 'Монтаж промислового обладнання',
    image: industrialEquipment,
},{
    link: '/scrap-processing-enterprises',
    title: 'Переробні підприємства зі скрапу',
    image: scrapProcessing,
},{
    link: '/installation-of-technological-lines',
    title: 'Монтаж технологічних ліній',
    image: technologicalLines,
},{
    link: '/repair-of-pressing-equipment',
    title: 'Ремонт пресового обладнання',
    image: pressingEquipment,
}];
