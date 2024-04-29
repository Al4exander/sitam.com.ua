import image from '../../images/pages/repair-of-pressing-equipment/image.jpg';
import {PageTemplates} from "../../pages/standartPages/enum";

export const repairOfPressingEquipment = {
    url: '/repair-of-pressing-equipment',
    title: 'Ремонт та монтаж обладнання олійноекстракційного заводу',
    image,
    alsoSeeIndex: 4,
    keywords: 'реконструкція олійноекстракційного заводу,ремонт заводу,ремонт конвеєра',
    type: PageTemplates.OneImageOneTextType,
    buttons: [{
        text: 'Ремонт гідравлічного пресу',
        url: '/hydraulic-press'
    },{
        text: 'Ремонт прес-ножиць',
        url: '/press-shears'
    },{
        text: 'Ремонт пакувального пресу для металобрухту',
        url: '/repair-of-a-baler-for-scrap-metal'
    },{
        text: 'Ремонт пресу для макулатури та вторинної сировини',
        url: '/waste-paper-press'
    },{
        text: 'Ремонт гільотинних ножиць',
        url: '/guillotine-press-shears'
    },{
        text: 'Ремонт прес-компактора',
        url: '/press-compactor'
    }],
    description: 'Виконаємо ремонт та обслуговування пресового обладнання підприємств з металообробки та переробки металобрухту та вторинної сировини. Діагностика пресу. Монтаж пресу. Технічне обслуговування пресу',
    text: `Наша компанія виконає ремонт та обслуговування пресового обладнання підприємств з металообробки та переробки металобрухту та вторинної сировини.

До переліку послуг можуть входити:

Діагностика пресу;

Поточний ремонт;

Капітальний ремонт пресу;

Монтаж пресу;

Технічне обслуговування пресу;

Модернізація пресу;

Пусконалагодження.`,
};
