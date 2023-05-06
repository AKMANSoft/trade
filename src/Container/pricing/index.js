import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Avatar, Tag, Space,Timeline } from "antd";

import { CheckOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import PageBanner from '../../sharedModules/pageBanner'

const Pricing = ()=> {
  return(
    <Layout>
      <PageBanner/>
      <div className='inner-layout'> 
        <div className='container'>
          <div className='paring-section'>
            <Row>
              <Col md={10}>
                <div className='g-content'>
                  <div className='multi-heading'>
                    <h2>Plans & Pricing</h2>
                  </div>
                  <p>Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
                </div>
              </Col>
            </Row>
            <Row type="flex" gutter={30}>
              <Col md={8}>
                <div className='price-plan'>
                  <div className='plan-section'>
                    <div className='plan-head'>
                      <h2>$19 <small>/month</small></h2>
                    </div>
                    <div className='plan-content'>
                      <h3>Startup</h3>
                      <p>For companies with 5-10 containers.</p>
                      <ul>
                        <li><i><CheckOutlined /></i>7-days free trial</li>
                        <li><i><CheckOutlined /></i>Buy, Sell, & Lease</li>
                        <li><i><CheckOutlined /></i>3 Premium Apps</li>
                        <li><i><CheckOutlined /></i>2 Users team</li>
                      </ul>
                      <Button className="" type="gradient-primary" block size='large'>Choose plan</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className='price-plan'>
                  <div className='plan-section'>
                    <div className='plan-head'>
                      <h2>$54 <small>/month</small></h2>
                    </div>
                    <div className='plan-content'>
                      <h3>Business</h3>
                      <p>For companies with 11-50 containers.</p>
                      <ul>
                        <li><i><CheckOutlined /></i>7-days free trial</li>
                        <li><i><CheckOutlined /></i>Multi-step Zaps</li>
                        <li><i><CheckOutlined /></i>Unlimited Premium Apps</li>
                        <li><i><CheckOutlined /></i>50 Users team</li>
                        <li><i><CheckOutlined /></i>Shared Workspace</li>
                      </ul>
                      <Button className="" type="gradient-primary" block size='large'>Choose plan</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className='price-plan popular'>
                  <div className='plan-section'>
                    <Tag bordered={false} color="#232628">MOST POPULAR</Tag>
                    <div className='plan-head'>
                      <h2>$89 <small>/month</small></h2>
                    </div>
                    <div className='plan-content'>
                      <h3>Enterprise</h3>
                      <p>For companies with 50+ containers.</p>
                      <ul>
                        <li><i><CheckOutlined /></i>7-days free trial</li>
                        <li><i><CheckOutlined /></i>Multi-step Zaps</li>
                        <li><i><CheckOutlined /></i>Unlimited Premium Apps</li>
                        <li><i><CheckOutlined /></i>Unlimited Users team</li>
                        <li><i><CheckOutlined /></i>Advanced Admin</li>
                        <li><i><CheckOutlined /></i>Custom Data Retention</li>
                      </ul>
                      <Button className="" type="orange" block size='large'>Choose plan</Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pricing;