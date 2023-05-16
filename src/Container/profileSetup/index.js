import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Steps, Space, Input,Form, Select, Upload, Avatar } from "antd";

import { MailOutlined, EnvironmentOutlined, ContainerOutlined, UserOutlined } from '@ant-design/icons';

import { PaperClipOutlined, LoadingOutlined, FileImageOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import PageBanner from '../../sharedModules/pageBanner'
import Pen from '../../images/pen.png'
import Edit from '../../images/edit.png'
import company3 from '../../images/company3.png'


const ProfileSetup = ()=> {
  const { Step } = Steps;
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const [currentStep, setcurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleClickNext = (stepIs) => {
    if(stepIs === 'previous') {
      setcurrentStep(currentStep - 1);
    } else {
      setcurrentStep(currentStep + 1);
    }
  };
  
  const uploadButton = (
    <div className='uploader'>
      {loading ? <LoadingOutlined /> : <FileImageOutlined />}
      <div style={{ marginTop: 2 }}>Company Logo</div>
      <div className='editIcon'><img src={Pen}/></div>
    </div>
  );
  return(
    <Layout>
      <div className='nobanner-layout'> 
        <div className='container'>
          <Row type='flex' justify='center'>
            <Col md={15}>
              <div className='profile-setup'>
                <div className='g-content text-center'>
                  <h2>Setup Company Profile</h2>
                  <p className='mt-0'>Fill out following information to create your company account.</p>
                </div>
                <div className='profile-wizard'>
                  <Steps current={currentStep} labelPlacement="vertical" progressDot responsive={false}>
                    <Step key={0} title="Company Profile" />
                    <Step key={1} title="Documents Submission" />
                    <Step key={2} title="Finish" />
                  </Steps>
                  <div className='step-content'>
                    <Form name="basic" layout="vertical"
                      initialValues={{ remember: true }} autoComplete="off">
                        {currentStep === 0 ? 
                          <Space direction='vertical' className='w-100'>
                            <div className='image-upload'>
                              <Upload
                                name="avatar"
                                listType="picture-circle"
                                className="avatar-uploader"
                                showUploadList={false}
                                
                              >
                                {/*  
                                action=""
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                                */}
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                              </Upload>
                            </div>
                            <Form.Item  label="Company Name"
                              rules={[{ required: true, message: 'Please input your username!' }]}>
                              <Input prefix={<ContainerOutlined />} placeholder="SK Shipping Lines" style={{ height: 60 }} />
                            </Form.Item>
                            
                            <Form.Item>
                              <label className='ant-form-item-label'>Containers Available</label>
                              <Select style={{ height: 60 }}
                                placeholder="10-50"
                                options={provinceData.map((province) => ({ label: province, value: province }))}
                              />
                            </Form.Item>
                            
                            <Form.Item>
                              <label className='ant-form-item-label'>Country</label>
                              <Select style={{ height: 60 }}
                                placeholder="Country"
                                options={provinceData.map((province) => ({ label: province, value: province }))}
                              />
                            </Form.Item>
                            
                            <Form.Item>
                              <label className='ant-form-item-label'>City</label>
                              <Select style={{ height: 60 }}
                                placeholder="City"
                                options={provinceData.map((province) => ({ label: province, value: province }))}
                              />
                            </Form.Item>

                            <Form.Item  label="Address"
                              rules={[{ required: true, message: 'Please input your username!' }]}>
                              <Input prefix={<EnvironmentOutlined />} placeholder="Address" style={{ height: 60 }} />
                            </Form.Item>

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
                            
                            <Form.Item  label="Company Email Address"
                              rules={[{ required: true, type: "email", message: 'Please input your username!' }]}>
                              <Input prefix={<MailOutlined />} placeholder="Company Email Address" style={{ height: 60 }} />
                            </Form.Item>

                            <Row type="flex" justify='space-between'>
                              <Col md={12} span={24}></Col>
                              <Col md={12} span={24}>
                                <Button className="ml-auto" type="orange" size='large' onClick={() => handleClickNext('next')}>Next: Documents Submission</Button>
                              </Col>
                            </Row>
                          </Space>
                         : currentStep === 1 ? 
                            <Space direction='vertical' className='w-100'>
                              <Form.Item  label="Company Registration Certificate">
                                <div className='single-upload'>
                                  <Upload>
                                    <Button icon={<PaperClipOutlined />}>Click to Upload</Button>
                                  </Upload>
                                </div>
                              </Form.Item>
                              
                              <Form.Item  label="Tax Registration Certificate">
                                <div className='single-upload'>
                                  <Upload>
                                    <Button icon={<PaperClipOutlined />}>Click to Upload</Button>
                                  </Upload>
                                </div>
                              </Form.Item>
                              
                              <Form.Item  label="Bank Account Maintenance Certificate">
                                <div className='single-upload'>
                                  <Upload>
                                    <Button icon={<PaperClipOutlined />}>Click to Upload</Button>
                                  </Upload>
                                </div>
                              </Form.Item>
                              
                              <Form.Item  label="Membership Certificate">
                                <div className='single-upload'>
                                  <Upload>
                                    <Button icon={<PaperClipOutlined />}>Click to Upload</Button>
                                  </Upload>
                                </div>
                              </Form.Item>

                              <Row type="flex" justify='space-between'>
                                <Col md={12} span={24}>
                                  <Button className="" type="gradient-primary" size='large' onClick={() => handleClickNext('previous')}>Previous: Company Profile</Button>
                                </Col>
                                <Col md={12} span={24}>
                                  <Button className="mt-md-0 mt-20 ml-auto" type="orange" size='large' onClick={() => handleClickNext('next')}>Next: Confirm</Button>
                                </Col>
                              </Row>
                              
                            </Space>
                         : currentStep === 2 ? 
                          <Space direction='vertical' className='w-100'>
                            <div className='sections-detail'>
                              <Row type='flex' gutter={30} align='bottom'>
                                <Col md={12}>
                                  <h4 className='m-0'>Company Profile</h4>
                                  <p className='m-0'><img src={Edit} className='mr-3' />Edit Details</p>
                                  <div className='profile-name'>
                                    <Avatar src={company3} size={80}></Avatar>
                                    <div>
                                      <h4 className='m-0'>SK Shipping Lines</h4>
                                      <p className='m-0'>Karachi, Pakistan</p>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={12}>
                                  <div className='profile-detail'>
                                    <p>
                                      <span>Containers Available</span>
                                      <strong>10-50</strong>
                                    </p>
                                    <p>
                                      <span>Address</span>
                                      <strong>1D 5 Sector D Korangi.</strong>
                                    </p>
                                    <p>
                                      <span>Contact No.</span>
                                      <strong>+9221XXXXXXXX</strong>
                                    </p>
                                    <p>
                                      <span>Company Email</span>
                                      <strong>somneone@email.com</strong>
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className='sections-detail'>
                              <Row type='flex' gutter={30} align='bottom'>
                                <Col md={24}>
                                  <h4 className='m-0'>Documents</h4>
                                  <p className='m-0'><img src={Edit} className='mr-3' /> Change</p>
                                </Col>
                              </Row>
                            </div>
                            <Row type="flex" justify='space-between'>
                              <Col md={12} span={24}>
                                <Button className="" type="gradient-primary" size='large' onClick={() => handleClickNext('previous')}>Previous: Documents Submission</Button>
                              </Col>
                              <Col md={12} span={24}>
                                <Button className="mt-md-0 mt-20 ml-auto" type="orange" size='large'>Create Account</Button>
                              </Col>
                            </Row>                                                        
                          </Space>
                         : ''}
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default ProfileSetup