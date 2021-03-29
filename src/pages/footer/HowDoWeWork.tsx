import React, {useEffect, useState} from 'react';
import { Steps } from 'antd';
import '../footer/styles/HowDoWeWork.css';
import circleIcon from '../../images/common/Circle.svg';

const { Step } = Steps;

export function HowDoWeWork() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 1300);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 1300) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
    };

    return (
        <div>
          <p className='d-flex justify-content-center how-do-we-work-text'>Как мы работаем</p>
          <div className='d-flex justify-content-center col-11 mx-auto'>
              <Steps current={6} labelPlacement='vertical' direction={smallSize ? 'vertical' : 'horizontal'}>
                  <Step title="Шаг 1" icon={<img src={circleIcon}/>} subTitle='Консультация менеджера' description="Наш менеджер проконсультирует и ответит на все ваши вопросы, уточнит все возможные детали связанные с вашим проектом и согласует дальнейшее сотрудничество." />
                  <Step title="Шаг 2" icon={<img src={circleIcon}/>} subTitle='Диагностика оборудования' description="Наши технические специлисты приедут к вам на объект для уточнения условий работы или предварительной диагностики вашего оборудования и составят технологическую карту возможных работ." />
                  <Step title="Шаг 3" icon={<img src={circleIcon}/>} subTitle='Коммерческое предложение' description="Мы состави для вас индивидуальное коммерческое предложение с учетом всех ваши требований и пожеланий к выполняемой работе." />
                  <Step title="Шаг 4" icon={<img src={circleIcon}/>} subTitle='Заключение договора' description="В кратчайшее время подпишем все необходимые документы для заключения договора и вышлем по почте." />
                  <Step title="Шаг 5" icon={<img src={circleIcon}/>} subTitle='Выполнение работ' description="Подготовим все необходимое и приступим к выполнению работ в точно оговоренный срок без задержек." />
              </Steps>
          </div>
        </div>
  );
}
