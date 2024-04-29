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
    imageTitle: 'Знання',
    text: 'У нас є необхідні знання і досвід, а також висококваліфіковані співробітники.'
}, {
    image: timeKnowledge,
    imageTitle: 'Часові знання',
    text: 'Гарантія на виконані роботи до 5 років.'
}, {
    image: backPackKnowledge,
    imageTitle: 'Знання рюкзака',
    text: 'Є всі необхідні дозволи відповідно до законодавства.'
},{
    image: techKnowledge,
    imageTitle: 'Технічні знання',
    text: 'Ми маємо економічний та технічний потенціал для виконання робіт будь-якої складності.'
}, {
    image: dateKnowledge,
    imageTitle: 'Знання про терміни',
    text: 'Роботи виконуються якісно і вчасно з дотриманням всіх умов замовника.'
}, {
    image: handsKnowledge,
    imageTitle: 'Знання рук',
    text: 'Ми співпрацюємо з найбільшими підприємствами у своїх галузях.'
}];
