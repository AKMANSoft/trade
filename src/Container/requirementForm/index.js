import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Input, Select, Form, Switch, Space, Modal } from "antd";
import { LeftOutlined, DollarOutlined, PercentageOutlined, EnvironmentOutlined, AimOutlined, CheckOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'

const RequirementForm = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const { TextArea } = Input;
  const [isRequirmentForm, setIsRequirmentForm] = useState(false);

  const openHandleModal = (type) => {
    if(type === 'added') {
      setIsRequirmentForm(true)
    }

  }
  const handleCancelModal = () => {
    setIsRequirmentForm(false)
  }


  return(
    <Layout>
      <div className='nobanner-layout'>
        <div className='container'>
          <div className='g-content'>
            <Space align="start">
              <h4 className='mt-10'><LeftOutlined /></h4>
              <div>
                <h2>New Supplying Requirements</h2>
                <p className='m-0 color-gray'>Fill out following details to list your container on TYC</p>
              </div>
            </Space>
          </div>
          <Row type='flex' justify='center' gutter={36} className="form-details">
            <Col span={22}>
              <div className='g-content'>
                <h4>Basic Details</h4>
              </div>
            </Col>
            <Col span={22}>
              <Form className='w-100' name="basic" layout="vertical"
                initialValues={{ remember: true }} autoComplete="off">
                <Row type='flex' gutter={36}>
                  <Col md={12} span={24}>
                    <Form.Item>
                      <label className='ant-form-item-label'>Container Type</label>
                      <Select style={{ height: 60 }}
                        placeholder="2 ft. dry container"
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item>
                      <label className='ant-form-item-label'>Container Condition</label>
                      <Select style={{ height: 60 }}
                        placeholder="Cargo Worthy"
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item>
                      <label className='ant-form-item-label'>Pick-ups</label>
                      <Select style={{ height: 60 }}
                        placeholder="2 ft. dry container" mode="multiple"
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item>
                      <label className='ant-form-item-label'>Drop-offs</label>
                      <Select style={{ height: 60 }}
                        placeholder="2 ft. dry container"
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={24} span={24}>
                    <Form.Item>
                      <label className='ant-form-item-label'>Description</label>
                      <TextArea rows={4} 
                        placeholder='Container t o be off-hired within 60 days from the pickup or DRV to be applied.'
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <div className='g-content'>
                      <h4>Terms for leasing</h4>
                    </div>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Free Days"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input placeholder="29" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Equipment Count"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input placeholder="3" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Demurrage Charges"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} placeholder="29" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Charges per day"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} placeholder="3" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Storage fee per container"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} placeholder="993" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Detention Charges"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} placeholder="993" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Repairing & Cleaning Included (DPP)"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} placeholder="993" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Discounted Residual Value (New Build Price)"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} placeholder="993" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Discounted Residual Value (Deprecation per year)"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} suffix={<PercentageOutlined />} placeholder="993" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12} span={24}>
                    <Form.Item  label="Discounted Residual Value (Min. Replacement)"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                      <Input prefix={<DollarOutlined />} suffix={<PercentageOutlined />} placeholder="993" style={{ height: 60 }} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Space size={25}>
                      <Space>
                        <Switch defaultChecked /> 
                        <p className='m-0'>Insurance By TYC</p>
                      </Space>
                      <Space>
                        <Switch /> 
                        <p className='m-0'>Payment Handling by TYC</p>
                      </Space>
                    </Space>
                  </Col>
                </Row>
                <div className='offer-btns mt-20 justify-content-start'>
                  <Button type='orange' size='large' onClick={() => openHandleModal('added')}>Submit</Button>
                  <Button type='gray' size='large' className='mt-md-0 mt-20'>Discard</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <Modal title="" open={isRequirmentForm} onCancel={() => handleCancelModal('check')} footer="">
          <div className="login-body text-center">
            <div className="login-head">
              <div className='icon-circle success'>
                <CheckOutlined />
              </div>
              <h2>Requirements Added!</h2>
              <p>
                <strong>Supplying Requirements</strong> have been added successfully for <strong>3x Dry containers</strong> and <strong>20 free days!</strong>
              </p>
            </div>
            <div className="login-content">
              <Button type="orange" htmlType="submit" onClick={() => handleCancelModal('check')} block size="large">
                Okay
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  )
}

export default RequirementForm;