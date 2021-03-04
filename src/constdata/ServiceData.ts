import {HeaderLinks} from '../pages/header/Interfaces';

export const serviceLinks: HeaderLinks[] = [{
    Type: 'ПРЕССОВОЕ ОБОРУДОВАНИЕ',
    Col: 24,
    children: [{
        link: '/shearing-press-service',
        title: 'Обслуживание пресс-ножниц'
    },{
        link: '/waste-paper-press-service',
        title: 'Обслуживание пресса для макулатуры'
    },{
        link: '/hydraulic-oil-change',
        title: 'Замена гидравлического масла'
    },{
        link: '/purification-of-industrial-oils',
        title: 'Очистка промышленных масел'
    }]
}];
