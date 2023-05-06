import React, {useEffect, useState} from "react";
import { Form, Button, Input, Modal, Menu, Checkbox, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import Logo from '../../images/logo.png'
import LoginIcon from '../../images/login-icon.png'
import Lock from '../../images/lock.png'

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  }
  const handleCancel = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <header>
      <div className="container">
        <div className="menu-navbar">
          <div className="navbar-brand">
            <Link to="/">
              <img src={Logo} preview="false"/>
            </Link>
          </div>
          <div className="menu-section">
            <Menu mode="horizontal" disabledOverflow="true">
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/">Our Services</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/pricing">Price</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/">About us</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/">Resources</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/">Contact us</Link></Menu.Item>
              
            </Menu>
            <div className="profile-menu">
              <Menu mode="horizontal" disabledOverflow="true">
                <Menu.Item key="1"><Link onClick={openLoginModal}><img src={LoginIcon} /> Login</Link></Menu.Item>
                <Menu.Item key="2">
                  <Button className="" type="gradient-primary">Create Account</Button>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
      </div>  
      <Modal title="" open={isLoginModalOpen} onCancel={handleCancel} footer="">
        <div className="login-body">
          <div className="login-head">
            <img src={Lock} />
            <h2>Login Required</h2>
            <p>You need to login to our system to view details about this container.</p>
          </div>
          <div className="login-content">
            <Form name="basic" layout="vertical"
              initialValues={{ remember: true }} autoComplete="off">
                {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}
              
              <Form.Item  label="Email Address"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input prefix={<MailOutlined />} placeholder="Email Address" style={{ height: 60 }} />
              </Form.Item>              
              
              <Form.Item  label="Password"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input.Password  prefix={<LockOutlined />} placeholder="*******" style={{ height: 60 }} />
              </Form.Item>

              <Row justify="space-between" align="middle" className="w-100">
                <Col>
                  <Form.Item name="remember" valuePropName="checked" className="m-0">
                    <Checkbox>Remember me</Checkbox>  
                  </Form.Item>
                </Col>  
                <Col>
                  <Link>Forgot Password?</Link>
                </Col>  
              </Row>             

              <Form.Item>
                <Button type="orange" htmlType="submit" block size="large">
                  Continue
                </Button>
              </Form.Item>
            </Form>
            <p className="new-account">
              Don’t have account? <Link>Create Account</Link>
            </p>
          </div>
        </div>
      </Modal>
    </header>
  )
}

export default Index;