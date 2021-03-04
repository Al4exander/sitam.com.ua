import knowledge from '../images/knowledge.svg';
import timeKnowledge from '../images/time_knowledge.svg';
import backPackKnowledge from '../images/back_pack_knowledge.svg';
import techKnowledge from '../images/tech_knowledge.svg';
import dateKnowledge from '../images/date_knowledge.svg';
import handsKnowledge from '../images/hands_knowledge.svg';

export interface IAdvantagesData {
    image: string;
    text: string;
}

export const ourAdvantagesFirstRowData: IAdvantagesData[] = [{
    image: knowledge,
    text: 'У нас есть необходимые знания и опыт, а также высококвалифицированные сотрудники.'
}, {
    image: timeKnowledge,
    text: 'Гарантия на выполненные работы до 5 лет.'
}, {
    image: backPackKnowledge,
    text: 'Имеются все необходимые разрешения, в соответствии с законодательством.'
}];
export const ourAdvantagesSecondRowData: IAdvantagesData[] = [{
    image: techKnowledge,
    text: 'Мы обладаем экономическим и техническим потенциалом для выполнения работ любой сложности.'
}, {
    image: dateKnowledge,
    text: 'Работы выполняются качественно и в срок с соблюдением всех условий заказчика.'
}, {
    image: handsKnowledge,
    text: 'Мы сотрудничаем с крупнейшим предприятиям в своих отрослях.'
}];
