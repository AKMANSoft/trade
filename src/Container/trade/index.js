import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Dropdown, Space, Input,Form, Avatar, Tag, Timeline, Menu, Tabs } from "antd";
import { EyeFilled, EnvironmentOutlined, ContainerOutlined, UserOutlined } from '@ant-design/icons';
import "../../css/slick.min.css";
import Slider from "react-slick";

import { RightCircleOutlined, AimOutlined, DownOutlined, LeftCircleOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import company3 from '../../images/company3.png'
import company2 from '../../images/globalTrade.jpg'
import container1 from '../../images/container1.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    ><RightCircleOutlined /></button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <LeftCircleOutlined />
    </button>
  );
}

const Trade = ()=> {
  const { TabPane } = Tabs;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    asNavFor: nav2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  const settings2 = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  return(
    <Layout>
      <div className='nobanner-layout'> 
        <div className='container'>
          <div className='container-request-tabs'>
            <div className='container-box p-0 available-container-box'>
              <div className='container-content parallel'>
                <div className='container-desc'>
                  <div>
                    <div className='container-image-name'>
                      <Avatar src={container1}/>
                      <h3>Cargoship | Shipping</h3>
                      <span className='fw-600 color-gray d-md-flex d-none'>&nbsp; wants to supply</span>
                      <p className='company-status online'>
                        <span></span>
                        Online
                      </p>
                    </div>
                    <div>
                      <div className='container-name'>
                        <Space size={5} wrap>
                          <Tag bordered={false} color='#F49A26'>20x</Tag>
                          <h4 className='m-0'>20ft. Dry Container</h4>
                          <Tag bordered={false}>Cargo Worthy</Tag>
                        </Space>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className='req-section flex-auto'>
                  <div className='end-points'>
                    <Timeline>
                      <Timeline.Item key={1} dot={<AimOutlined style={{ fontSize: '20px', color: '#727272' }} />}>
                        <p className='m-0 fw-600 color-gray'>Pickups</p>
                        <Space size={0}>
                          <Tag bordered={false}>Dubai</Tag>
                        </Space>
                      </Timeline.Item>
                    </Timeline>
                  </div>
                  <div className='req-charges m-0'>
                    <Space size={25}>
                      <Button type='orange'><EyeFilled /> View Profile</Button>
                      <div className='sort-section'>
                        <div className='sort-single'>
                          <p className='m-0'>Current Status</p>
                          <Dropdown trigger={['click']} overlay={
                            <Menu>
                              <Menu.Item key="1" >
                                <Button type="link"  size="small">
                                  Upload large file
                                </Button>
                              </Menu.Item>
                            </Menu>
                          }>
                            <a onClick={(e) => e.preventDefault()} style={{color: '#000'}}>
                              <Space>
                                In Progress
                                <DownOutlined />
                              </Space>
                            </a>
                          </Dropdown>
                        </div>
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
            <div className='container-tabs'>
              <Tabs defaultActiveKey="cDetails">
                <TabPane tab="Container Details" key="cDetails">
                  <div className='tab-inner-content'>
                    <div className='desc-box'>
                      <div className='g-content'>
                        <h2>Description</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                        </p>
                        <h2 className='mt-50'>Terms Agreed</h2>
                        <Row type='flex' gutter={30} justify='space-between'>
                          <Col md={6} span={24}>
                            <div className='specs'>
                              <p>
                                Free Days
                                <strong>00</strong>
                              </p>
                              <p>
                                Equipment Count
                                <strong>00</strong>
                              </p>
                              <p>
                                Demurrage Charges
                                <strong>00</strong>
                              </p>
                              <p>
                                Charges Per Day
                                <strong>0000</strong>
                              </p>
                            </div>
                          </Col>
                          <Col md={6} span={24}>
                            <div className='specs'>
                              <p>
                                Free Days
                                <strong>00</strong>
                              </p>
                              <p>
                                Equipment Count
                                <strong>00</strong>
                              </p>
                              <p>
                                Demurrage Charges
                                <strong>0000</strong>
                              </p>
                              <p>
                                Charges Per Day
                                <strong>00</strong>
                              </p>
                            </div>
                          </Col>
                          <Col md={6} span={24}>
                            <div className='specs'>
                              <p>
                                Free Days
                                <strong>00</strong>
                              </p>
                              <p>
                                Equipment Count
                                <strong>00</strong>
                              </p>
                              <p>
                                Demurrage Charges
                                <strong>00</strong>
                              </p>
                              <p>
                                Charges Per Day
                                <strong>00</strong>
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <Row type='flex' gutter={40}>
                      <Col md={15} span={24}>
                        <div className='g-content'>
                          <h4>Media</h4>
                        </div>
                        <div className='async-slider arrows-slider'>
                          <div className='large-slider'>
                            <Slider {...settings} ref={(slider1) => setNav1(slider1)}>
                              <div className='large-child'><img src={company2}/></div>
                              <div className='large-child'><img src={container1}/></div>
                              <div className='large-child'><img src={company2}/></div>
                              <div className='large-child'><img src={container1}/></div>
                              <div className='large-child'><img src={company2}/></div>
                              <div className='large-child'><img src={container1}/></div>                            
                            </Slider>
                          </div>
                          <div className='child-slider'>
                            <Slider {...settings2} ref={(slider2) => setNav2(slider2)}>
                              <div className='child-img'><img src={company2}/></div>
                              <div className='child-img'><img src={container1}/></div>
                              <div className='child-img'><img src={company2}/></div>
                              <div className='child-img'><img src={container1}/></div>
                              <div className='child-img'><img src={company2}/></div>
                              <div className='child-img'><img src={container1}/></div>
                            </Slider>
                          </div>
                        </div>
                      </Col>
                      <Col md={9} span={24} className='mt-md-0 mt-20'>
                        <div className='g-content'>
                          <h4>Chat</h4>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="Documents" key="cDocuments">
                  csdcsd
                </TabPane>
                <TabPane tab="Track Activity" key="cTrack">
                  <Timeline mode='left' 
                    items={[
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Finished</h4>
                              <p>Lease was completed with demurrage and </p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Dropped off</h4>
                              <p>Equipment dropped off by SK shipping at Jabel Ali.</p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Picked up</h4>
                              <p>Equipment were picked up by SK shipping lines from Karachi Port.</p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Document Signed</h4>
                              <p>An agreement was signed by both parties.</p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Requested</h4>
                              <p>Request was initiated by SK Shipping Lines and accepted by cargoship shipping. </p>
                            </div>
                          </>
                        )
                      },
                    ]}
                  
                  />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Trade