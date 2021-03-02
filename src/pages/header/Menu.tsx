import React, {useState} from 'react';
import { Menu, Tabs } from 'antd';
import {MontageDemontage} from "./MontageDemontage";
import {Repairs} from "./Repairs";
import {Service} from "./Service";
import {Others} from "./Others";
import './styles/menu.css';

const { SubMenu } = Menu;

const { TabPane } = Tabs;
export function HeaderMenu() {
    let [current, setCurrent] = useState('main');

  const handleClick = (e: any) => {
      console.log(e);
  };

    return (
      <Menu onClick={handleClick} mode="horizontal" triggerSubMenuAction='click' className='d-flex justify-content-between text-center mb-5'>
          <Menu.Item key="main" className='col first-element'>
              Главная
          </Menu.Item>
          <SubMenu key="services" title="Услуги" popupClassName='rounded-bottom' className='col-2'>
              <Tabs defaultActiveKey="montage/demontage" tabPosition='left'>
                  <TabPane tab='Монтаж/Демонтаж' key='montage/demontage'>
                      <MontageDemontage/>
                  </TabPane>
                  <TabPane tab='Ремонт' key='repairs'>
                      <Repairs/>
                  </TabPane>
                  <TabPane tab='Обслуживание' key='service'>
                      <Service/>
                  </TabPane>
                  <TabPane tab='Прочее' key='others'>
                      <Others/>
                  </TabPane>
              </Tabs>
          </SubMenu >
          <Menu.Item key="otrasli" className='col'>
              Отрасли
          </Menu.Item>
          <Menu.Item key="projects" className='col'>
              Проекты
          </Menu.Item>
          <Menu.Item key="tender" className='col'>
              У Вас тендер?
          </Menu.Item>
          <Menu.Item key="contacts" className='col'>
              Контакты
          </Menu.Item>
      </Menu>
  );
}
