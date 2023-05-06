

import React, { useState,useEffect } from 'react';
import { Timeline, Tag, Row, Col, Radio, Space, Select } from "antd";
import { AimOutlined, EnvironmentOutlined, StarFilled } from '@ant-design/icons';

import container1 from '../../images/container1.jpg'
import company3 from '../../images/company3.png'

const AvailableContainer = ()=> {
  return(
    <div className='container-box'>
      <div className='container-content parallel'>
        <div className='container-image'>
          <img src={container1}/>
        </div>
        <div className='container-desc'>
          <div>
            <div className='container-name'>
              <h4 className='m-0'>20ft. Dry Container</h4>
              <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
            </div>
            <p className='shippment-off'>
              <i className='shipment-icon'><img src={company3}/></i>
              SK Shipping Lines
            </p>
          </div>
          <div className='availibility'>
            <p className='m-0'>Available for:</p>
            <Space size={[5,'large']}>
              <Tag bordered={false}>Tag 1</Tag>
              <Tag bordered={false}>Tag 1</Tag>
            </Space>
          </div>
        </div> 
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
      </div>
    </div>
  )
}

export default AvailableContainer;