import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Form, Input, Space, Select, Upload } from "antd";

import { LockFilled, LoadingOutlined, FileImageOutlined, EnvironmentOutlined, ContainerOutlined } from '@ant-design/icons';

import AccountLayout from '../../sharedModules/accountLayout'
import Pen from '../../images/pen.png'

const CompanyProfile = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  let navigate = useNavigate();
  const editProfile = () => {
    navigate('/company-profile/edit')
  }

  const uploadButton = (
    <div className='uploader'>
      {loading ? <LoadingOutlined /> : <FileImageOutlined />}
      <div style={{ marginTop: 2 }}>Company Logo</div>
      <div className='editIcon'><img src={Pen}/></div>
    </div>
  );
  
  return(
    <AccountLayout>
      <div className='acc-section-wrapper'>
        <div className='wrapper-header'>
          <Row gutter={30} justify='space-between' align='middle'>
            <Col>
              <div className='g-content'> 
                <h2 className='m-0'>Company Profile</h2>
              </div>
            </Col>
            <Col>
              <Space className='d-md-flex d-none'>
                <Button type='green' style={{height: 46}} onClick={editProfile}><img src={Pen} className='anticon'/>Edit Profile</Button>
                <Button type='orange' style={{height: 46}}><LockFilled />Change Password</Button>
              </Space>
            </Col>
          </Row>
        </div>
        <div className='wrapper-body'>
          <Form name="basic" layout="vertical"
            initialValues={{ remember: true }} autoComplete="off">
              <div className='image-upload'>
                  <Upload name="avatar" listType="picture-circle" className="avatar-uploader"
                    showUploadList={false}>
                    {/*  
                    action=""
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    */}
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                </div>
              <Row type='flex' gutter={15}>
                <Col span={24}>
                  <Form.Item  label="Company Name"
                    rules={[{ required: true, message: 'Company Name Required' }]}>
                    <Input prefix={<ContainerOutlined />} placeholder="Company Name" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <label className='ant-form-item-label'>Containers Available</label>
                    <Select style={{ height: 60 }}
                      placeholder="10-50"
                      options={provinceData.map((province) => ({ label: province, value: province }))}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <label className='ant-form-item-label'>Country</label>
                    <Select style={{ height: 60 }}
                      placeholder="Country"
                      options={provinceData.map((province) => ({ label: province, value: province }))}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <label className='ant-form-item-label'>City</label>
                    <Select style={{ height: 60 }}
                      placeholder="City"
                      options={provinceData.map((province) => ({ label: province, value: province }))}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item  label="Address"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input prefix={<EnvironmentOutlined />} placeholder="Address" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col span={24}>
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
                  <Form.Item  label="Company Email Address"
                    rules={[{ required: true, message: 'Company Name Required' }]}>
                    <Input prefix={<ContainerOutlined />} placeholder="Company Name" style={{ height: 60 }} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <div className='d-md-none d-block'>
                    <Space direction='vertical' size={15} className='w-100'>
                      <Button type='orange' style={{height: 46}} block><LockFilled />Change Password</Button>
                      <Button type='green' style={{height: 46}} block onClick={editProfile}><img src={Pen} className='anticon'/>Edit Profile</Button>
                    </Space>
                  </div>
                </Col>
              </Row>
          </Form>
          <div className='subscription-box'>
            <Row justify='space-between' gutter={30} type='flex'>
              <Col>
                <div className='subs-upgrage'>
                  <div className='g-content'>
                    <h4 className='m-0'>Subscription</h4>
                  </div>
                  <p className='m-0'>
                    Upgrade
                  </p>
                </div>
              </Col>
              <Col>
                <div className='package-type'>
                  <h2>
                    <span className='color-theme'>$19</span>
                    <small>/month</small>
                  </h2>
                  <h3>Startup</h3>
                </div>
              </Col>
            </Row>
          </div>

          <div className='upload-docs'>
            <div className='g-content'>
              <h4 className='m-0'>Uploaded Documents</h4>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  )
}

export default CompanyProfile;