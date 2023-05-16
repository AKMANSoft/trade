import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Form, Input, Space, Select } from "antd";

import { LockFilled } from '@ant-design/icons';

import AccountLayout from '../../sharedModules/accountLayout'
import Pen from '../../images/pen.png'

const MyAccount = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  
  return(
    <AccountLayout>
      <div className='acc-section-wrapper'>
        <div className='wrapper-header'>
          <Row gutter={30} justify='space-between' align='middle'>
            <Col>
              <div className='g-content'> 
                <h2 className='m-0'>My Account</h2>
              </div>
            </Col>
            <Col>
            <Space className='d-md-flex d-none'>
                <Button type='green' style={{height: 46}}><img src={Pen} className='anticon'/>Edit Profile</Button>
                <Button type='orange' style={{height: 46}}><LockFilled />Change Password</Button>
              </Space>
            </Col>
          </Row>
        </div>
        <div className='wrapper-body'>
          <Form name="basic" layout="vertical"
            initialValues={{ remember: true }} autoComplete="off">
              <Row type='flex' gutter={15}>
                <Col md={12} span={24}>
                  <Form.Item  label="First Name"
                    rules={[{ required: true, message: 'First Name' }]}>
                    <Input placeholder="First Name" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col md={12} span={24}>
                  <Form.Item  label="Last Name"
                    rules={[{ required: true, message: 'Last Name' }]}>
                    <Input placeholder="Last Name" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col md={24} span={24}>
                  <Form.Item label="Official Email Address"
                    rules={[{ required: true,type:'email', message: 'Official Email Address Required' }]}>
                    <Input placeholder="Official Email Address" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col md={24} span={24}>
                  <Form.Item label="Personal Email Address"
                    rules={[{ required: true,type:'email', message: 'Personal Email Address Required' }]}>
                    <Input placeholder="Personal Email Address" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col md={24} span={24}>
                  <Form.Item label="Contact No." style={{ marginBottom: 0 }}>
                    <Form.Item rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(15% - 8px)' }}>
                      <Select style={{ height: 60 }}
                        placeholder="City"
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </Form.Item>
                    <Form.Item  rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(85% - 8px)', margin: '0 8px' }}>
                      <Input placeholder="21-21324353" style={{ height: 60 }}/>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <div className='d-md-none d-block'>
                    <Space direction='vertical' size={15} className='w-100'>
                      <Button type='orange' style={{height: 46}} block><LockFilled />Change Password</Button>
                      <Button type='green' style={{height: 46}} block><img src={Pen} className='anticon'/>Edit Profile</Button>
                    </Space>
                  </div>
                </Col>
              </Row>

          </Form>
        </div>
      </div>
    </AccountLayout>
  )
}

export default MyAccount;