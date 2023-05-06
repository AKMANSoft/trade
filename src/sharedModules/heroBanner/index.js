import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Dropdown, Menu, Space } from "antd";

import Herobanner from '../../images/hero-banner.jpg'
import Logo1 from '../../images/logo1.jpg'
import Logo2 from '../../images/logo2.jpg'
import Logo3 from '../../images/logo3.jpg'
import Logo4 from '../../images/logo4.jpg'
import Logo5 from '../../images/logo5.jpg'
import FindContainer from '../findContainer'

const HeroBanner = ()=> {
  return(
    <div className='hero-banner'>
      <div className='banner-bg'>
        <img src={Herobanner} alt="Herobanner"/>
      </div>
      <div className='container'>
        <Row type="flex" justify="space-between">
          <Col span={9}>
            <div className='g-content text-white'>
              <div className="multi-heading text-white">
                <h2>
                  BUY, SELL, OR LEASE A  <strong>Container</strong>
                </h2>
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu ipsum augue. Nullam felis nunc, luctus quis gravida a, mollis sit amet tellus. Etiam et nibh mi.
              </p>
            </div>
            <Space size={22}>
              <Button className="" type="gradient-primary">Create Account</Button>
              <Button className="" type="white">See Pricing</Button>
            </Space>
          </Col>
          <Col span={10}>
            <FindContainer />
          </Col>
        </Row>
      </div>
      <div className='trustedBy'>
        <div className='container'>
          <Row>
            <Col span={10}>
              <div className='g-content'>
                <p className='m-0'>Trusted By:</p>
                <Space className='c-logos' size={44}>
                  <div className='s-logo'><img src={Logo1}/></div>
                  <div className='s-logo'><img src={Logo2}/></div>
                  <div className='s-logo'><img src={Logo3}/></div>
                  <div className='s-logo'><img src={Logo4}/></div>
                  <div className='s-logo'><img src={Logo5}/></div>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;