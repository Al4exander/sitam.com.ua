import knowledge from '../images/common/knowledge.svg';
import timeKnowledge from '../images/common/time_knowledge.svg';
import backPackKnowledge from '../images/common/back_pack_knowledge.svg';
import techKnowledge from '../images/common/tech_knowledge.svg';
import dateKnowledge from '../images/common/date_knowledge.svg';
import handsKnowledge from '../images/common/hands_knowledge.svg';

export interface IAdvantagesData {
    image: string;
    text: string;
}

export const ourAdvantagesData: IAdvantagesData[] = [{
    image: knowledge,
    text: 'У нас есть необходимые знания и опыт, а также высококвалифицированные сотрудники.'
}, {
    image: timeKnowledge,
    text: 'Гарантия на выполненные работы до 5 лет.'
}, {
    image: backPackKnowledge,
    text: 'Имеются все необходимые разрешения, в соответствии с законодательством.'
},{
    image: techKnowledge,
    text: 'Мы обладаем экономическим и техническим потенциалом для выполнения работ любой сложности.'
}, {
    image: dateKnowledge,
    text: 'Работы выполняются качественно и в срок с соблюдением всех условий заказчика.'
}, {
    image: handsKnowledge,
    text: 'Мы сотрудничаем с крупнейшим предприятиям в своих отрослях.'
}];