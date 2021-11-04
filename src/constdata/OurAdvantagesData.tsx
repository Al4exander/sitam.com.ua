import knowledge from '../images/common/knowledge.svg';
import timeKnowledge from '../images/common/time_knowledge.svg';
import backPackKnowledge from '../images/common/back_pack_knowledge.svg';
import techKnowledge from '../images/common/tech_knowledge.svg';
import dateKnowledge from '../images/common/date_knowledge.png';
import handsKnowledge from '../images/common/hands_knowledge.png';

export interface IAdvantagesData {
    image: string;
    text: string;
    imageTitle: string;
}

export const ourAdvantagesData: IAdvantagesData[] = [{
    image: knowledge,
    imageTitle: 'Knowledge',
    text: 'У нас есть необходимые знания и опыт, а также высококвалифицированные сотрудники.'
}, {
    image: timeKnowledge,
    imageTitle: 'Time knowledge',
    text: 'Гарантия на выполненные работы до 5 лет.'
}, {
    image: backPackKnowledge,
    imageTitle: 'Backpack knowledge',
    text: 'Имеются все необходимые разрешения, в соответствии с законодательством.'
},{
    image: techKnowledge,
    imageTitle: 'Tech knowledge',
    text: 'Мы обладаем экономическим и техническим потенциалом для выполнения работ любой сложности.'
}, {
    image: dateKnowledge,
    imageTitle: 'Date knowledge',
    text: 'Работы выполняются качественно и в срок с соблюдением всех условий заказчика.'
}, {
    image: handsKnowledge,
    imageTitle: 'Hands knowledge',
    text: 'Мы сотрудничаем с крупнейшим предприятиям в своих отрослях.'
}];
