import React, {useEffect} from 'react';
import { Steps } from 'antd';
import '../footer/styles/HowDoWeWork.css';
import circleIcon from '../../images/common/Circle.svg';
import $ from "jquery";

const { Step } = Steps;

export function HowDoWeWork() {
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

    if(window.innerWidth < 1300) {
        const element = ($ as any)('.ant-steps');

        element.addClass('ant-steps-vertical');
        element.removeClass('ant-steps-horizontal');
        element.removeClass('ant-steps-label-vertical');
    }

    return (
        <div>
          <p className='d-flex justify-content-center how-do-we-work-text'>Как мы работаем</p>
          <div className='d-flex justify-content-center col-11 mx-auto'>
              <Steps current={6} labelPlacement='vertical' direction={'horizontal'}>
                  <Step title="Шаг 1" icon={<img src={circleIcon} title={'First step'} alt={'First step icon'}/>} subTitle='Консультация менеджера' description="Наш менеджер проконсультирует и ответит на все ваши вопросы, уточнит все возможные детали связанные с вашим проектом и согласует дальнейшее сотрудничество." />
                  <Step title="Шаг 2" icon={<img src={circleIcon} title={'Second step'} alt={'Second step icon'}/>} subTitle='Диагностика оборудования' description="Наши технические специлисты приедут к вам на объект для уточнения условий работы или предварительной диагностики вашего оборудования и составят технологическую карту возможных работ." />
                  <Step title="Шаг 3" icon={<img src={circleIcon} title={'Third step'} alt={'Third step icon'}/>} subTitle='Коммерческое предложение' description="Мы составим для вас индивидуальное коммерческое предложение с учетом всех ваши требований и пожеланий к выполняемой работе." />
                  <Step title="Шаг 4" icon={<img src={circleIcon} title={'Fourth step'} alt={'Fourth step icon'}/>} subTitle='Заключение договора' description="В кратчайшее время подпишем все необходимые документы для заключения договора и вышлем по почте." />
                  <Step title="Шаг 5" icon={<img src={circleIcon} title={'Fifth step'} alt={'Fifth step icon'}/>} subTitle='Выполнение работ' description="Подготовим все необходимое и приступим к выполнению работ в точно оговоренный срок без задержек." />
              </Steps>
          </div>
        </div>
  );
}
