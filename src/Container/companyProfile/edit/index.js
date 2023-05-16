import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Rate, Input, Space, Typography, Upload, Avatar } from "antd";

import { FileTextOutlined, CheckCircleFilled, StarFilled, CopyOutlined, CopyFilled, PlusOutlined } from '@ant-design/icons';

import Layout from '../../../sharedModules/defaultLayout'
import Badge from '../../../images/badge.png'
import Company from '../../../images/company1.png'
import Fb from '../../../images/fb.png'
import Ins from '../../../images/ins.png'
import Tw from '../../../images/tw.png'
import Lk from '../../../images/lk.png'
import Edit from '../../../images/edit.png'

const { Paragraph } = Typography;
const CompanyProfileEdit = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  
  
  return(
    <Layout>
      <div className='nobanner-layout'>
        <div className='container'>
          <div className='desc-box'>
            <Row type='flex' justify='space-between' gutter={30}>
              <Col>
                <div className='reviews'>
                  <Avatar src={Company} className='size-100'/>
                  <div className='review-desc'>
                    <div className='review-by'>
                      <Space size={10}>
                        <h2 className='m-0'>Cargoship | Shipping </h2>
                        <p className='company-status online'>
                          <span></span>
                          Online
                        </p>
                      </Space>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='text-right'>
                  <h4 className='m-0'>Share us</h4>
                  <Space size={10} className='mb-20'>
                    <Button type='border-less p-0'><img src={Edit} className='anticon' /> Edit</Button>
                    <img src={Fb}/>
                    <img src={Ins}/>
                    <img src={Tw}/>
                    <img src={Lk}/>
                  </Space>
                  <div className='url-clipboard'>
                    <Paragraph  copyable={{icon:[<CopyOutlined key='copy-icon' />, <CopyFilled key='copied-icon' />], text: 'https//:www.tradeyourcontainer.com/cargoship' }}>URL: https//:www.tradeyourcontainer.com/cargoship</Paragraph>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row type='flex' gutter={16}>
            <Col xl={17} lg={16} md={15}>
              <div className='desc-box containers-track'>
                <div className='g-content'>
                  <Row type='flex' justify='space-between'>
                    <Col>
                      <h2 className='m-0'>About Company</h2>
                    </Col>
                    <Col>
                      <Button type='border-less'><img src={Edit} className='anticon' />Edit</Button>
                    </Col>
                  </Row>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                  </p>
                </div>
              </div>
              <div className='g-content'>
                <Space>
                  <h2>Reviews & Ratings</h2>
                  <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                </Space>
              </div>
              <Space direction='vertical' size={40} className='w-100 mt-50'>
                {[...Array(3)].map((x, i) =>
                  <div className='reviews'>
                    <Avatar src={Company} size={50}/>
                    <div className='review-desc'>
                      <div className='review-by'>
                        <Space size={10} wrap>
                          <h3 className='m-0'>Cargoship | Shipping </h3>
                          <Rate disabled allowHalf defaultValue={2.5} style={{color:  '#F49A26'}}/>
                        </Space>
                        <p className='m-0 color-gray'>12:30 PM - 12/12/2023</p>                      
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                      </p>
                    </div>
                  </div>
                )}
              </Space>
            </Col>
            <Col xl={7} lg={8} md={9} className='mt-md-0 mt-20'>
              <Space direction='vertical' size={34} className='w-100'>
                <div className='desc-box containers-track m-0'>
                  <div className='g-content'>
                    <Row type='flex' justify='space-between' align='middle'>
                      <Col>
                        <h2 className='m-0'>Details</h2>
                      </Col>
                      <Col>
                        <Button type='border-less' className='p-0'><img src={Edit} className='anticon' />Edit</Button>
                      </Col>
                    </Row>
                    <div className='specs'>
                      <p>
                        Founded in
                        <strong>1994</strong>
                      </p>
                      <p>
                        Email
                        <strong>info@cargoship.com</strong>
                      </p>
                      <p>
                        Telephone
                        <strong>(+1) 742 7348 3</strong>
                      </p>
                      <p>
                        Headquarters
                        <strong>Karachi. Pakistan</strong>
                      </p>
                      <p>
                        Address
                        <strong>32 2nd street</strong>
                      </p>
                      <p>
                        Member Since
                        <strong>-</strong>
                      </p>
                      <p>
                        Website
                        <strong>cargoship</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='desc-box containers-track m-0'>
                  <div className='g-content'>
                    <Row type='flex' justify='space-between' align='middle'>
                      <Col>
                        <h2 className='m-0'>Badges</h2>
                      </Col>
                      <Col>
                        <Button type='border-less' className='p-0'><PlusOutlined />Add New</Button>
                      </Col>
                    </Row>
                    <Space direction='vertical' size={7} className='w-100 mt-20'>
                      {[...Array(3)].map((x, i) =>
                        <div className='badge-box'>
                          <div className='badge-info'>
                            <div className='badge-icon'>
                              <Avatar src={Badge} />
                            </div>
                            <div className='badge-desc'>
                              <h5 className='m-0'>GLA Verified <CheckCircleFilled className='text-green'/></h5>
                              <p className='m-0 color-gray small'>Uploaded on: 20/05/2023</p>
                            </div>
                          </div>
                          <Button type='border-less' className='p-0'><img src={Edit} className='anticon' />Edit</Button>
                        </div>
                      )}
                    </Space>
                  </div>
                </div>
                
                <div className='desc-box containers-track m-0'>
                  <div className='g-content'>
                    <Row type='flex' justify='space-between' align='middle'>
                      <Col>
                        <h2 className='m-0'>Documents</h2>
                      </Col>
                      <Col>
                        <Button type='border-less' className='p-0'><PlusOutlined />Add New</Button>
                      </Col>
                    </Row>
                    <Space direction='vertical' size={7} className='w-100 mt-20'>
                      {[...Array(3)].map((x, i) =>
                        <div className='badge-box'>
                          <div className='badge-info'>
                            <div className='badge-icon'>
                              <Avatar icon={<FileTextOutlined />} />
                            </div>
                            <div className='badge-desc'>
                              <h5 className='m-0'>Company Registration Certificate.pdf <CheckCircleFilled className='text-green'/></h5>
                              <p className='m-0 color-gray small'>Uploaded on: 20/05/2023</p>
                            </div>
                          </div>
                          <Button type='border-less' className='p-0'><img src={Edit} className='anticon' />Edit</Button>
                        </div>
                      )}
                    </Space>
                  </div>
                </div>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default CompanyProfileEdit;