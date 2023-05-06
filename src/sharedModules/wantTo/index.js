

import React, { useState,useEffect } from 'react';
import { Button, Form, Input, Row, Col, Radio, Space, Select } from "antd";
import { ContainerOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const WantTo = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  let navigate = useNavigate();
  const handleContainer= () => {
    navigate('/find-container')
  }
  return(
    <div className='fin-container parallel'>
      <div className='container-head'>
        <p>I want to:</p>
      </div>
      <Space className='container-type' size={14}>
        <Radio.Button value="a">Buy</Radio.Button>
        <Radio.Button value="b">Sell</Radio.Button>
        <Radio.Button value="c">Lease</Radio.Button>
      </Space>
      <div className='container-body'>
      <Form name="basic" layout="vertical"
        initialValues={{ remember: true }} autoComplete="off">
          {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}
        
        <Row type="flex" align="bottom" gutter={25}>
          <Col md={6}>
            <Form.Item  label="Container Type"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input prefix={<ContainerOutlined />} placeholder="20FT. Dry Container" style={{ height: 60 }} />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item>
            <label className='ant-form-item-label'>Pick-up</label>
            <Select style={{ height: 60 }}
              placeholder="Select a pick-up location" prefix={<EnvironmentOutlined />}
              options={provinceData.map((province) => ({ label: province, value: province }))}
            />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item>
            <label className='ant-form-item-label'>Drop-off</label>
            <Select style={{ height: 60 }}
              placeholder="Select a drop-off" prefix={<EnvironmentOutlined />}
              options={provinceData.map((province) => ({ label: province, value: province }))}
            />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item>
              <Button type="orange" onClick={handleContainer} htmlType="submit" block size="large">
                <EnvironmentOutlined /> Select Container
              </Button>
            </Form.Item>
          </Col>
        </Row>       
      </Form>
      </div>
    </div>
  )
}

export default WantTo;