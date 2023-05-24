import React, {useEffect, useState} from "react";
import { Form, Button, Input, Space, Avatar, Row, Col, Popover } from "antd";
import Icon, { PaperClipOutlined,  ExclamationCircleOutlined } from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';


import company1 from '../../images/company1.png'
import PaperPlane from '../../images/paperPlane.png'

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const doubleTick = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.75 10.25L4.25 12.75M7.75 8.75L10.25 6.25M5.75 10.25L8.25 12.75L14.25 6.25" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoubleTickIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={doubleTick} {...props} />
);

const Chat = () => {
  return (
    <div className="chat-section">
      <div className="chat-header">
        <Space size={10}>
          <Avatar src={company1} />
          <div className="title">
            <Space size={5}>
              <h6 className="m-0">Cargoship | Shipping</h6>
              <p className='company-status online'>
                <span></span>
                Online
              </p>
            </Space>
            <p className="m-0 color-gray">Last Seen: 12:33 PM - 20/12/2023</p>
          </div>
        </Space>
      </div>
      <div className="chat-body">
        <div className="message-section">
          <div className="message-body">
            <p className="m-0">
              Hello, I want to BUY a 20ft dry container for 20 free days. Can you let me know the availability as per following details?

              Pick-up
              Location: Karachi
              Date: 12/12/2023
              Time: 01:00 PM
              Drop-off
              Location: Dubai
              Date: 05/01/2024
              Time: 12:00 AM
            </p>
          </div>
          <Row justify='space-between' align='center'>
            <Col>
              <p className="m-0 color-gray">03:30 PM</p>
            </Col>
            <Col>
              <Popover placement="top" title={text} content={content}>
                <p className="m-0 color-gray"><ExclamationCircleOutlined /> <span className="text-underline">Report Dispute</span></p>
              </Popover>
            </Col>
          </Row>
        </div>
        <div className="message-section sender">
          <div className="message-body">
            <p className="m-0">
              Yes, It’s available
            </p>
          </div>
          <Row justify='space-between' align='center'>
            <Col>
              <p className="m-0 color-gray">03:30 PM</p>
            </Col>
            <Col>
              <p className="m-0 color-gray seen"><DoubleTickIcon /> Seen</p>
            </Col>
          </Row>
        </div>
        <div className="message-section">
          <div className="message-body">
            <p className="m-0">
              Hello, I want to BUY a 20ft dry container for 20 free days. Can you let me know the availability as per following details?

              Pick-up
              Location: Karachi
              Date: 12/12/2023
              Time: 01:00 PM
              Drop-off
              Location: Dubai
              Date: 05/01/2024
              Time: 12:00 AM
            </p>
          </div>
          <Row justify='space-between' align='center'>
            <Col>
              <p className="m-0 color-gray">03:30 PM</p>
            </Col>
            <Col>
              <Popover placement="top" title={text} content={content}>
                <p className="m-0 color-gray"><ExclamationCircleOutlined /> <span className="text-underline">Report Dispute</span></p>
              </Popover>
            </Col>
          </Row>
        </div>
        <div className="message-section sender">
          <div className="message-body">
            <p className="m-0">
              Yes, It’s available
            </p>
          </div>
          <Row justify='space-between' align='center'>
            <Col>
              <p className="m-0 color-gray">03:30 PM</p>
            </Col>
            <Col>
              <p className="m-0 color-gray seen"><DoubleTickIcon /> Seen</p>
            </Col>
          </Row>
        </div>
        <div className="message-section">
          <div className="message-body">
            <p className="m-0">
              Hello, I want to BUY a 20ft dry container for 20 free days. Can you let me know the availability as per following details?

              Pick-up
              Location: Karachi
              Date: 12/12/2023
              Time: 01:00 PM
              Drop-off
              Location: Dubai
              Date: 05/01/2024
              Time: 12:00 AM
            </p>
          </div>
          <Row justify='space-between' align='center'>
            <Col>
              <p className="m-0 color-gray">03:30 PM</p>
            </Col>
            <Col>
              <Popover placement="top" title={text} content={content}>
                <p className="m-0 color-gray"><ExclamationCircleOutlined /> <span className="text-underline">Report Dispute</span></p>
              </Popover>
            </Col>
          </Row>
        </div>
        <div className="message-section sender">
          <div className="message-body">
            <p className="m-0">
              Yes, It’s available
            </p>
          </div>
          <Row justify='space-between' align='center'>
            <Col>
              <p className="m-0 color-gray">03:30 PM</p>
            </Col>
            <Col>
              <p className="m-0 color-gray seen"><DoubleTickIcon /> Seen</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="chat-footer">
        <Form>
          <div className="typo">
            <Form.Item 
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Type your message here..." style={{ height: 50 }} />
            </Form.Item>
            <Button type='orange' className="icon-only"><PaperClipOutlined /></Button>
            <Button type='gradient-primary'><img src={PaperPlane} className='anticon'/>Send</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Chat;