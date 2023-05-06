import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Avatar, Tag, Space,Timeline } from "antd";
import "../../css/slick.min.css";
import Slider from "react-slick";
import { StarFilled, LeftCircleOutlined, RightCircleOutlined,EnvironmentOutlined, AimOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import HeroBanner from '../../sharedModules/heroBanner'
import company1 from '../../images/company1.png'
import company2 from '../../images/company2.png'
import company3 from '../../images/company3.png'
import company4 from '../../images/company4.png'
import container1 from '../../images/container1.jpg'
import globalTrade from '../../images/globalTrade.jpg'

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

const Home = ()=> {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <HeroBanner />
      <section className='g-section top-comapnies'>
        <div className='container'>
          <Space size={47} direction="vertical">
            <div className='multi-heading'>
              <h2>Top Rated Companies</h2>
            </div>
            <div className='companies arrows-slider'>
              <Slider {...settings}>
                <div className='company-box'>
                  <div className='company-sec'>
                    <div className='company-brand'>
                      <div className='brand-logo'>
                        <img src={company1}/>
                      </div>
                      <h4>Cargoship | Shipping</h4>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </div>
                    <div className='company-desc'>
                      <p>45 <small>On Lease</small></p>
                      <p>45 <small>Sold</small></p>
                      <p>45 <small>Purchased</small></p>
                    </div>
                  </div>
                </div>
                <div className='company-box'>
                  <div className='company-sec'>
                    <div className='company-brand'>
                      <div className='brand-logo'>
                        <img src={company1}/>
                      </div>
                      <h4>Cargoship | Shipping</h4>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </div>
                    <div className='company-desc'>
                      <p>45 <small>On Lease</small></p>
                      <p>45 <small>Sold</small></p>
                      <p>45 <small>Purchased</small></p>
                    </div>
                  </div>
                </div>
                <div className='company-box'>
                  <div className='company-sec'>
                    <div className='company-brand'>
                      <div className='brand-logo'>
                        <img src={company2}/>
                      </div>
                      <h4>Cargoship | Shipping</h4>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </div>
                    <div className='company-desc'>
                      <p>45 <small>On Lease</small></p>
                      <p>45 <small>Sold</small></p>
                      <p>45 <small>Purchased</small></p>
                    </div>
                  </div>
                </div>
                <div className='company-box'>
                  <div className='company-sec'>
                    <div className='company-brand'>
                      <div className='brand-logo'>
                        <img src={company3}/>
                      </div>
                      <h4>Cargoship | Shipping</h4>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </div>
                    <div className='company-desc'>
                      <p>45 <small>On Lease</small></p>
                      <p>45 <small>Sold</small></p>
                      <p>45 <small>Purchased</small></p>
                    </div>
                  </div>
                </div>
                <div className='company-box'>
                  <div className='company-sec'>
                    <div className='company-brand'>
                      <div className='brand-logo'>
                        <img src={company4}/>
                      </div>
                      <h4>Cargoship | Shipping</h4>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </div>
                    <div className='company-desc'>
                      <p>45 <small>On Lease</small></p>
                      <p>45 <small>Sold</small></p>
                      <p>45 <small>Purchased</small></p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Space>
        </div>
      </section>

      <section className='g-section top-comapnies'>
        <div className='container'>
          <Space size={47} direction="vertical">
            <div className='multi-heading'>
              <h2>Containers Available In “<span>Karachi</span>”</h2>
            </div>
            <div className='companies arrows-slider'>
              <Slider {...settings}>
                <div className='container-box'>
                  <div className='container-content'>
                    <div className='container-image'>
                      <img src={container1}/>
                    </div>
                    <div className='container-desc'>
                      <div className='container-name'>
                        <h4 className='m-0'>20ft. Dry Container</h4>
                        <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                      </div>
                      <p className='shippment-off'>
                        <i className='shipment-icon'><img src={company3}/></i>
                        SK Shipping Lines
                      </p>
                      <div className='end-points'>
                        <Timeline 
                          items={[
                          {
                            dot: <AimOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          {
                            dot: <EnvironmentOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          ]}>
                        </Timeline>
                      </div>
                      <div className='availibility'>
                        <p className='m-0'>Available for:</p>
                        <Space size={[5,'large']}>
                          <Tag bordered={false}>Tag 1</Tag>
                          <Tag bordered={false}>Tag 1</Tag>
                        </Space>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className='container-box'>
                  <div className='container-content'>
                    <div className='container-image'>
                      <img src={container1}/>
                    </div>
                    <div className='container-desc'>
                      <div className='container-name'>
                        <h4 className='m-0'>20ft. Dry Container</h4>
                        <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                      </div>
                      <p className='shippment-off'>
                        <i className='shipment-icon'><img src={company3}/></i>
                        SK Shipping Lines
                      </p>
                      <div className='end-points'>
                        <Timeline 
                          items={[
                          {
                            dot: <AimOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          {
                            dot: <EnvironmentOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          ]}>
                        </Timeline>
                      </div>
                      <div className='availibility'>
                        <p className='m-0'>Available for:</p>
                        <Space size={[5,'large']}>
                          <Tag bordered={false}>Tag 1</Tag>
                          <Tag bordered={false}>Tag 1</Tag>
                        </Space>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className='container-box'>
                  <div className='container-content'>
                    <div className='container-image'>
                      <img src={container1}/>
                    </div>
                    <div className='container-desc'>
                      <div className='container-name'>
                        <h4 className='m-0'>20ft. Dry Container</h4>
                        <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                      </div>
                      <p className='shippment-off'>
                        <i className='shipment-icon'><img src={company3}/></i>
                        SK Shipping Lines
                      </p>
                      <div className='end-points'>
                        <Timeline 
                          items={[
                          {
                            dot: <AimOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          {
                            dot: <EnvironmentOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          ]}>
                        </Timeline>
                      </div>
                      <div className='availibility'>
                        <p className='m-0'>Available for:</p>
                        <Space size={[5,'large']}>
                          <Tag bordered={false}>Tag 1</Tag>
                          <Tag bordered={false}>Tag 1</Tag>
                        </Space>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className='container-box'>
                  <div className='container-content'>
                    <div className='container-image'>
                      <img src={container1}/>
                    </div>
                    <div className='container-desc'>
                      <div className='container-name'>
                        <h4 className='m-0'>20ft. Dry Container</h4>
                        <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                      </div>
                      <p className='shippment-off'>
                        <i className='shipment-icon'><img src={company3}/></i>
                        SK Shipping Lines
                      </p>
                      <div className='end-points'>
                        <Timeline 
                          items={[
                          {
                            dot: <AimOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          {
                            dot: <EnvironmentOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          ]}>
                        </Timeline>
                      </div>
                      <div className='availibility'>
                        <p className='m-0'>Available for:</p>
                        <Space size={[5,'large']}>
                          <Tag bordered={false}>Tag 1</Tag>
                          <Tag bordered={false}>Tag 1</Tag>
                        </Space>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className='container-box'>
                  <div className='container-content'>
                    <div className='container-image'>
                      <img src={container1}/>
                    </div>
                    <div className='container-desc'>
                      <div className='container-name'>
                        <h4 className='m-0'>20ft. Dry Container</h4>
                        <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                      </div>
                      <p className='shippment-off'>
                        <i className='shipment-icon'><img src={company3}/></i>
                        SK Shipping Lines
                      </p>
                      <div className='end-points'>
                        <Timeline 
                          items={[
                          {
                            dot: <AimOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          {
                            dot: <EnvironmentOutlined style={{ fontSize: '16px' }} />,
                            color: '#727272',
                            children: 'Jabel Ali',
                          },
                          ]}>
                        </Timeline>
                      </div>
                      <div className='availibility'>
                        <p className='m-0'>Available for:</p>
                        <Space size={[5,'large']}>
                          <Tag bordered={false}>Tag 1</Tag>
                          <Tag bordered={false}>Tag 1</Tag>
                        </Space>
                      </div>
                    </div> 
                  </div>
                </div>
              </Slider>
            </div>
          </Space>
        </div>
      </section>

      <section className='g-section'>
        <div className='container'>
          <Row type="flex" gutter={30} justify="space-between" align="middle">
            <Col md={13}>
              <div className='image-content-box'>
                <div className='image-box'>
                  <img src={globalTrade}/>
                </div>
                <div className='content-box'>
                  <div className='g-content'>
                    <h4>500+ Shipping Companies</h4>
                    <p>
                      Trade containers with top rated shipment companies. That collectively have 3,000+ containers in their inventory.
                    </p>
                  </div>
                  <div className='companies-list'>
                    <Avatar src={company1} />
                    <Avatar src={company2} />
                    <Avatar src={company3} />
                    <Avatar src={company1} />
                    <p className='m-0'>500+ Shipping Companies</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={10}>
              <Space size={47} direction="vertical">
                <div className='g-content'>
                  <div className="multi-heading">
                    <h6 className="text-theme">About TYC</h6>
                    <h2>
                    Trade your container <strong>around the globe.</strong>
                    </h2>
                  </div>
                  <p className='m-0'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                  </p>
                </div>
                <Button type="gradient-primary" size="large">
                  Learn More
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </section>
      
      <section className='g-section'>
        <div className='container'>
          <Row type="flex" gutter={30} justify="space-between" align="middle">
            <Col md={10}>
              <Space size={47} direction="vertical">
                <div className='g-content'>
                  <div className="multi-heading">
                    <h6 className="text-theme">About TYC</h6>
                    <h2>
                    Trade your container <strong>around the globe.</strong>
                    </h2>
                  </div>
                  <p className='m-0'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                  </p>
                </div>
                <Button type="gradient-primary" size="large">
                  Learn More
                </Button>
              </Space>
            </Col>
            <Col md={13}>
              <div className='image-content-box'>
                <div className='image-box'>
                  <img src={globalTrade}/>
                </div>
                <div className='content-box'>
                  <div className='g-content'>
                    <h4>500+ Shipping Companies</h4>
                    <p>
                      Trade containers with top rated shipment companies. That collectively have 3,000+ containers in their inventory.
                    </p>
                  </div>
                  <div className='companies-list'>
                    <Avatar src={company1} />
                    <Avatar src={company2} />
                    <Avatar src={company3} />
                    <Avatar src={company1} />
                    <p className='m-0'>500+ Shipping Companies</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className='container-facts'>
        <div className='container'>
          <Row type="flex" justify="center">
            <Col md={18}>
              <div className="multi-heading text-center">
                <h6 className="text-theme">Let’s Talk Numbers!</h6>
                <h2>
                Providing Most Sophisticated  <strong>Container Trading Services.</strong>
                </h2>
              </div>
              <Space size={70}>
                <div className='single-fact text-center'>
                  <div className='fact-fig'>
                    <div className="multi-heading">
                      <h2><strong>123</strong></h2>
                    </div>
                  </div>
                  <h6 className='m-0'>Companies Onboarded</h6>
                </div>
                <div className='single-fact text-center'>
                  <div className='fact-fig'>
                    <div className="multi-heading">
                      <h2><strong>123</strong></h2>
                    </div>
                  </div>
                  <h6 className='m-0'>Containers Available</h6>
                </div>
                <div className='single-fact text-center'>
                  <div className='fact-fig'>
                    <div className="multi-heading">
                      <h2><strong>123</strong></h2>
                    </div>
                  </div>
                  <h6 className='m-0'>Containers Sold</h6>
                </div>
                <div className='single-fact text-center'>
                  <div className='fact-fig'>
                    <div className="multi-heading">
                      <h2><strong>123</strong></h2>
                    </div>
                  </div>
                  <h6 className='m-0'>Containers Leased</h6>
                </div>
                <div className='single-fact text-center'>
                  <div className='fact-fig'>
                    <div className="multi-heading">
                      <h2><strong>123</strong></h2>
                    </div>
                  </div>
                  <h6 className='m-0'>Successful Trade</h6>
                </div>
              </Space>
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  )
}

export default Home;