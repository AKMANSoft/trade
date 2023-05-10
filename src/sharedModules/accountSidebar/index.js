import React, {useEffect, useState} from "react";
import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LogoutOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';

import Logo from '../../images/logo.svg'
import LoginIcon from '../../images/login-icon.png'
import Lock from '../../images/lock.png'

const Index = () => {
  return (
   <sidebar className='acc-sidebar'>
    <div className="sidebar-header">
      <Row gutter={15} justify='space-between' align='middle'>
        <Col>
          <h3><UserOutlined /> Account Settings</h3>
        </Col>
        <Col>
          <RightOutlined />
        </Col>
      </Row>
    </div>
    <div className="sidebar-body">
      <Menu mode="inline" selectedKeys='1'>
        <Menu.Item key="1"><Link to='/my-account'> My Account</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/company-profile'> Company Profile</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/manage-user'> Manage Users</Link></Menu.Item>
      </Menu>
    </div>
    <div className="sidebar-footer">
      <Link t0='/'><LogoutOutlined />Logout</Link>
    </div>
   </sidebar>
  )
}

export default Index;