

import React, { useState,useEffect } from 'react';
import { Button, Form, Input, Dropdown, Radio, Space, Select } from "antd";
import { ContainerOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const FindContainer = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  let navigate = useNavigate();
  const handleContainer= () => {
    navigate('/find-container')
  }
  return(
    <div className='fin-container'>
      <div className='container-head'>
        <h3>Find a Container</h3>
        <p>Kindly provide your container requirements.</p>
      </div>
      <Radio.Group name='radioGroup' className='container-type' size={14}>
        <Radio.Button value="a">Buy</Radio.Button>
        <Radio.Button value="b">Sell</Radio.Button>
        <Radio.Button value="c">Lease</Radio.Button>
      </Radio.Group>
      <div className='container-body'>
      <Form name="basic" layout="vertical"
        initialValues={{ remember: true }} autoComplete="off">
          {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}
        
        <Form.Item  label="Container Type"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input prefix={<ContainerOutlined />} placeholder="20FT. Dry Container" style={{ height: 60 }} />
        </Form.Item>

        <Form.Item>
          <Select style={{ height: 60 }}
            placeholder="Select a pick-up location" prefix={<EnvironmentOutlined />}
            options={provinceData.map((province) => ({ label: province, value: province }))}
          />
        </Form.Item>
        
        <Form.Item>
          <Select style={{ height: 60 }}
            placeholder="Select a drop-off" prefix={<EnvironmentOutlined />}
            options={provinceData.map((province) => ({ label: province, value: province }))}
          />
        </Form.Item>

        

        <Form.Item>
          <Button type="gradient-primary" onClick={handleContainer} htmlType="submit" block size="large">
            <SearchOutlined /> Search Container
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  )
}

export default FindContainer;