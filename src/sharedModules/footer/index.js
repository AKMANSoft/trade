import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Button, Row, Col, Dropdown, Menu } from "antd";
import { MailOutlined, PhoneOutlined, FacebookOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import Newsletter from '../newsletter'


import Google from '../../images/google.png'
import Ios from '../../images/ios.png'

const Index = () => {
  return (
    <div className="foot-section">
      <Newsletter />
        <footer className="footer-overlay">
          <div className="footer-menu-section">
            <div className="container">
              <Row type='flex' gutter={30}>
                <Col span={6}>
                  <div className="menu-section">
                    <div className="menu-header">
                      <h4>About us</h4>
                    </div>
                    <div className="menu-content">
                      <p className="mt-0">
                        TYC is an online marketplace for companies to trade/ containers in single marketplace.
                      </p>
                      <div className="cta-link">
                        <MailOutlined /><a href="mailto:talk@tyc.com">talk@tyc.com</a>
                      </div>
                      <div className="cta-link">
                      <PhoneOutlined /><a href="mailto:talk@tyc.com">talk@tyc.com</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="menu-section">
                    <div className="menu-header">
                      <h4>Quick Links</h4>
                    </div>
                    <div className="menu-content">
                      <ul className="menu-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Blogs</Link></li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="menu-section">
                    <div className="menu-header">
                      <h4>Marketplace</h4>
                    </div>
                    <div className="menu-content">
                      <ul className="menu-links">
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/">Create Account</Link></li>
                        <li><Link to="/">Companies</Link></li>
                        <li><Link to="/">Browse Containers</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="menu-section">
                    <div className="menu-header">
                      <h4>Download Our App</h4>
                    </div>
                    <div className="menu-content">
                      <p>Get our app on your mobile app.</p>
                      <Row>
                        <Col span={12}>
                          <img src={Google} alt="google play"/>
                        </Col>
                        <Col span={12}>
                          <img src={Ios} alt="apple play"/>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="cpr">
            <div className="container">
              <Row type='flex' gutter={30} align="middle">
                <Col span={12}>
                  <p className="m-0">2023 Copyrights Reserved @ <strong className="text-theme">TYC</strong></p>
                </Col>
                <Col span={12}>
                  <div className="social-icons">
                    <p className="m-0">Our Social Media:</p>
                    <ul>
                      <li><a href="#" target='_blank'><FacebookOutlined /></a></li>
                      <li><a href="#" target='_blank'><LinkedinOutlined /></a></li>
                      <li><a href="#" target='_blank'><TwitterOutlined /></a></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </footer>
    </div>    
  )
}

export default Index;