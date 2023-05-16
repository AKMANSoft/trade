import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Steps, Space, Input,Form, Select, Upload, Avatar } from "antd";

import { StarFilled } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import Company from '../../images/company3.png'


const Notification = ()=> {
  
  return(
    <Layout>
      <div className='nobanner-layout'> 
       <div className='container'>
        <div className='g-content'>
          <h2 className='m-0'>Notifications</h2>
          <p className='m-0'>Manage your activities via notifications.</p>
        </div>
        <div className='notify-box'>
          <div className='notify-body'>
            <div className='notify-single'>
              <div className='reviews'>
                <Avatar src={Company} size={50}/>
                <div className='review-desc'>
                  <div className='review-by'>
                    <Space size={10} wrap>
                      <h2 className='m-0'>Cargoship | Shipping </h2>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </Space>
                    <p className='m-0 color-gray'>Sent a CRO to your request.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='notify-single unread'>
              <div className='reviews'>
                <Avatar src={Company} size={50}/>
                <div className='review-desc'>
                  <div className='review-by'>
                    <Space size={10} wrap>
                      <h2 className='m-0'>Cargoship | Shipping </h2>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </Space>
                    <p className='m-0 color-gray'>Sent a CRO to your request.</p>
                  </div>
                  <div className='badge-box'>
                    <p className='m-0'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='notify-single unread'>
              <div className='reviews'>
                <Avatar src={Company} size={50}/>
                <div className='review-desc'>
                  <div className='review-by'>
                    <Space size={10} wrap>
                      <h2 className='m-0'>Cargoship | Shipping </h2>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </Space>
                    <p className='m-0 color-gray'>Sent a CRO to your request.</p>
                  </div>
                  <div className='badge-box'>
                    <p className='m-0'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='notify-single'>
              <div className='reviews'>
                <Avatar src={Company} size={50}/>
                <div className='review-desc'>
                  <div className='review-by'>
                    <Space size={10} wrap>
                      <h2 className='m-0'>Cargoship | Shipping </h2>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </Space>
                    <p className='m-0 color-gray'>Sent a CRO to your request.</p>
                  </div>
                  <div className='badge-box'>
                    <p className='m-0'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='notify-single unread'>
              <div className='reviews'>
                <Avatar src={Company} size={50}/>
                <div className='review-desc'>
                  <div className='review-by'>
                    <Space size={10} wrap>
                      <h2 className='m-0'>Cargoship | Shipping </h2>
                      <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                    </Space>
                    <p className='m-0 color-gray'>Sent a CRO to your request.</p>
                  </div>
                  <div className='badge-box'>
                    <p className='m-0'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='notify-footer'>
            <Button type='borderless-green' block size='large'>See More Notifications</Button>
          </div>
        </div>
       </div>
      </div>
    </Layout>
  )
}

export default Notification