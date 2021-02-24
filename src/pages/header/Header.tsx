import React, {useState} from 'react';
import { Menu, Tabs } from 'antd';
import {MontageDemontage} from "./MontageDemontage";
import {Repairs} from "./Repairs";
import {Service} from "./Service";
import {Others} from "./Others";

const { SubMenu } = Menu;

const { TabPane } = Tabs;
export function Header() {
    let [current, setCurrent] = useState('main');

  const handleClick = (e: any) => {
      console.log(e);
  };

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" triggerSubMenuAction='click'>
          <Menu.Item key="main">
              Главная
          </Menu.Item>
          <SubMenu key="services" title="Услуги">
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
      </Menu>
  );
}
