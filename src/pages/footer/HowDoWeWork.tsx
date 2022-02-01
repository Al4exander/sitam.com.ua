import React, {useContext, useEffect} from 'react';
import { Steps } from 'antd';
import '../footer/styles/HowDoWeWork.css';
import circleIcon from '../../images/common/Circle.svg';
import $ from 'jquery';
import {SizeContext} from "../../lib/sizeContext";

const { Step } = Steps;

export function HowDoWeWork() {
    const [rerender, setRerender] = React.useState(0);

    const stepsData = [{
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
          <p className='d-flex justify-content-center how-do-we-work-text'>Как мы работаем</p>
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
