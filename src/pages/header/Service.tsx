import React from 'react';
import { Divider, Card, Col, Row, Space } from 'antd';
import { Link } from "react-router-dom";
import {Children, HeaderLinks} from "./Interfaces";
import {serviceLinks} from "./constdata/ServiceData";

export function Service() {
  return (
      <div className="site-card-wrapper">
          <Row gutter={16}>
              {serviceLinks.map((link: HeaderLinks, index, array) => {
                  return <>
                      <Col span={link.Col}>
                          <Card title={<span style={{whiteSpace: 'unset', overflow: 'unset'}}>{link.Type}</span>} bordered={false} key='montage/demontage_key'>
                              <Space direction="vertical" align="start">
                                  {link.children.map((child: Children) => {
                                      return <Link to={child.link}>{child.title}</Link>
                                  })}
                              </Space>
                          </Card>
                      </Col>
                      {array.length - 1 !== index && <Divider type="vertical" />}
                  </>
              })}
          </Row>
      </div>
  );
}
