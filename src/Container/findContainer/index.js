import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Avatar, Tag, Space,Timeline } from "antd";

// import { StarFilled, LeftCircleOutlined, RightCircleOutlined,EnvironmentOutlined, AimOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import PageBanner from '../../sharedModules/pageBanner'
import BannerContent from '../../sharedModules/bannerContent'
import WantTo from '../../sharedModules/wantTo'
import AvailableContainer from '../../sharedModules/availableContainer'

const FindContainer = ()=> {
  return(
    <Layout>
      <PageBanner/>
      <div className='inner-layout'> 
        <BannerContent />
        <div className='container'>
          <WantTo />
        </div>
        <section className='g-section pb-0'>
          <div className='container'>
            <Space direction="vertical" size={35} className="w-100">
              <AvailableContainer />
              <AvailableContainer />
              <AvailableContainer />
              <AvailableContainer />
            </Space>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default FindContainer;