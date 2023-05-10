

import React, { useState,useEffect } from 'react';
import { Timeline, Tag, Row, Col, Button, Space, Avatar, Progress } from "antd";
import { AimOutlined, EnvironmentOutlined, DeleteOutlined, EyeFilled, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import container1 from '../../images/container1.jpg'
import PaperPlane from '../../images/paperPlane.png'
import Pen from '../../images/pen.png'

const SupplierList = ()=> {
  return(
    <div className='container-box p-0 available-container-box'>
      <div className='container-content parallel'>
        <div className='container-desc'>
          <div>
            <div className='container-image-name'>
              <Avatar src={container1}/>
              <h3>Cargoship | Shipping</h3>
              <span className='fw-600 color-gray'>&nbsp; wants to supply</span>
              <p className='company-status online'>
                <span></span>
                Online
              </p>
            </div>
            <div>
              <div className='container-name'>
                <Space size={5}>
                  <Tag bordered={false} color='#F49A26'>20x</Tag>
                  <h4 className='m-0'>20ft. Dry Container</h4>
                  <Tag bordered={false}>Cargo Worthy</Tag>
                </Space>
              </div>
            </div>
          </div>
          <div className='availibility'>
            <Row type='flex' justify='space-between' align='middle' gutter={20}>
              <Col>
                <Space size={[5,'large']}>
                  <Tag bordered={false}>Valid Forever</Tag>
                  <Tag bordered={false} color='#1DB9B5'>Match Found (1)</Tag>
                  <span className='fw-600 color-gray'>2 hours ago </span>
                </Space>
              </Col>
              <Col>
                <h3 className='m-0'>Terms</h3>
                <p className='m-0'>20 Freedays / Per Diem: $00 / Pick-up Charge: $00 <span className='color-gray'>paid by user</span> </p>
              </Col>
            </Row>
          </div>
        </div> 
        <div className='req-section'>
          <div className='end-points'>
            <Timeline>
              <Timeline.Item key={1} dot={<AimOutlined style={{ fontSize: '20px', color: '#727272' }} />}>
                <p className='m-0 fw-600 color-gray'>Pickups</p>
                <Space size={0}>
                  <Tag bordered={false}>Karachi</Tag>
                  <Tag bordered={false}>Dubai</Tag>
                  <Tag bordered={false}>+9 More</Tag>
                </Space>
              </Timeline.Item>
              <Timeline.Item key={1} dot={<EnvironmentOutlined style={{ fontSize: '20px', color: '#727272' }} />}>
                <p className='m-0 fw-600 color-gray'>Dropoffs</p>
                <Space size={[5]}>
                  <Tag bordered={false}>Karachi</Tag>
                  <Tag bordered={false}>Dubai</Tag>
                  <Tag bordered={false}>+9 More</Tag>
                </Space>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className='req-charges'>
            <Space size={15}>
              <div>
                <p className='m-0 fw-600 color-gray'>Total Charges</p>
                <h3 className='m-0'>$33,000</h3>
                <p className='m-0 color-gray'>24 Requests</p>
              </div>
              {/* <div className='text-center progress-counter'>
                <Progress type="circle" size={45} percent={75} format={(percent) => `${percent} /20`} 
                  strokeColor={{ '0%': '#F49A26', '100%': '#F49A26' }} />
                <p className='m-0'>Returned</p>
              </div> */}
            </Space>
            {/* <Link to="#" className='color-theme'>View Offers (24)</Link>   */}
            <Space className='req-btns' size={10}>
              <Button type='gray' className='icon-only'><EyeFilled /></Button>
              <Button type='orange'><img src={PaperPlane} className='anticon'/>Send Request</Button>
              {/* <Button type='orange' className='icon-only'><img src={Pen} className='anticon'/></Button> */}
              {/* <Button type='red' className='icon-only'><DeleteOutlined /></Button> */}
              {/* <Button type='red'><CloseOutlined />Decline</Button> */}
              {/* <Button type='green'><CheckOutlined />Accept</Button> */}
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierList;