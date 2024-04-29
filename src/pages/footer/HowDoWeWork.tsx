import React, {useContext, useEffect} from 'react';
import {Steps} from 'antd';
import '../footer/styles/HowDoWeWork.css';
import circleIcon from '../../images/common/Circle.svg';
import $ from 'jquery';
import {LanguageContext} from "../../lib/languageContext";

const { Step } = Steps;

export function HowDoWeWork() {
    const [rerender, setRerender] = React.useState(0);
    const [language] = useContext(LanguageContext);
    const title = language === 'ua' ? 'Як ми працюємо' : 'Как мы работаем';

    const stepsData = language === 'ua' ? [{
        stepTitle: 'Крок 1',
        imgTitle: 'Перший крок',
        subTitle: 'Консультація менеджера',
        description: 'Наш менеджер проконсультує вас і відповість на всі ваші питання, уточнить всі можливі деталі, пов\'язані з вашим проектом, і затвердить подальше співробітництво.',
    },{
        stepTitle: 'Крок 2',
        imgTitle: 'Другий крок',
        subTitle: 'Діагностика обладнання',
        description: 'Наші технічні спеціалісти приїдуть до вас на об\'єкт для уточнення умов роботи або попередньої діагностики вашого обладнання і складуть технологічну карту можливих робіт.',
    },{
        stepTitle: 'Крок 3',
        imgTitle: 'Третій крок',
        subTitle: 'Комерційна пропозиція',
        description: 'Ми складемо для вас індивідуальну комерційну пропозицію з урахуванням всіх ваших вимог і побажань до виконуваних робіт.',
    },{
        stepTitle: 'Крок 4',
        imgTitle: 'Четвертий крок',
        subTitle: 'Укладання договору',
        description: 'Найближчим часом підпишемо всі необхідні документи для укладання договору і відправимо поштою.',
    },{
        stepTitle: 'Крок 5',
        imgTitle: 'П\'ятий крок',
        subTitle: 'Виконання робіт',
        description: 'Підготуємо все необхідне і розпочнемо виконання робіт у точно визначений строк без затримок.',
    }] : [{
        stepTitle: 'Шаг 1',
        imgTitle: 'First step',
        subTitle: 'Консультация менеджера',
        description: 'Наш менеджер проконсультирует и ответит на все ваши вопросы, уточнит все возможные детали связанные с вашим проектом и согласует дальнейшее сотрудничество.',
    },{
        stepTitle: 'Шаг 2',
        imgTitle: 'Second step',
        subTitle: 'Диагностика оборудования',
        description: 'Наши технические специалисты приедут к вам на объект для уточнения условий работы или предварительной диагностики вашего оборудования и составят технологическую карту возможных работ.',
    },{
        stepTitle: 'Шаг 3',
        imgTitle: 'Third step',
        subTitle: 'Коммерческое предложение',
        description: 'Мы составим для вас индивидуальное коммерческое предложение с учетом всех ваши требований и пожеланий к выполняемой работе.',
    },{
        stepTitle: 'Шаг 4',
        imgTitle: 'Fourth step',
        subTitle: 'Заключение договора',
        description: 'В кратчайшее время подпишем все необходимые документы для заключения договора и вышлем по почте.',
    },{
        stepTitle: 'Шаг 5',
        imgTitle: 'Fifth step',
        subTitle: 'Выполнение работ',
        description: 'Подготовим все необходимое и приступим к выполнению работ в точно оговоренный срок без задержек.',
    }];
    useEffect(() => {
        const handleResize = () => {
            const element = ($ as any)('.ant-steps');
            if(window.innerWidth < 1300) {
                element.addClass('ant-steps-vertical');
                element.removeClass('ant-steps-horizontal');
                element.removeClass('ant-steps-label-vertical');
            } else {
                element.removeClass('ant-steps-vertical');
                element.addClass('ant-steps-horizontal');
                element.addClass('ant-steps-label-vertical');
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        if(!rerender) {
            setRerender(1);
            if(window.innerWidth < 1300) {
                const element = ($ as any)('.ant-steps');
                element.addClass('ant-steps-vertical');
                element.removeClass('ant-steps-horizontal');
                element.removeClass('ant-steps-label-vertical');
            }
        }

    }, [rerender]);

    return (
        <div>
          <p className='d-flex justify-content-center how-do-we-work-text'>{title}</p>
          <div className='d-flex justify-content-center col-11 mx-auto'>
              <Steps current={6} labelPlacement='vertical' direction={'horizontal'}>
                  {stepsData.map(step => (<Step title={step.stepTitle}
                                                icon={<img
                                                    src={circleIcon}
                                                    title={step.imgTitle}
                                                    alt={step.imgTitle}
                                                    loading='lazy'/>}
                                                subTitle={step.subTitle}
                                                description={step.description} />))}
              </Steps>
          </div>
        </div>
  );
}
