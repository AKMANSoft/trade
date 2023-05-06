import React, {useEffect, useState} from "react";
import { Layout, Button, Row, Col, Input, Menu } from "antd";
import { MailOutlined } from '@ant-design/icons';

const Index = () => {
  return (
    <div className="container news-section">
      <div className="newsletter-box">
        <Row type='flex' gutter={30} justify="center">
          <Col span={24}>
            <Row type='flex' gutter={30} align="middle">
              <Col span={12}>
                <div className="multi-heading">
                  <h6 className="text-theme">Stay Up-to-Date</h6>
                  <h2>
                    Subscribe to our <strong>NEWSLETTER.</strong>
                  </h2>
                </div>
              </Col>
              <Col span={12}>
                <div className="newletter-input">
                  <Input placeholder="someone@email.com" size="large"
                    prefix={<MailOutlined className="site-form-item-icon" />}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Index;