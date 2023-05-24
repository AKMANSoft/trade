import React, {useEffect, useState} from "react";
import { Form, Button, Input, Modal, Menu, Checkbox, Row, Col, Dropdown, Space, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MailOutlined, LockOutlined, ContainerOutlined, UserOutlined, MessageOutlined, BellOutlined, DownOutlined, FieldTimeOutlined, CloseCircleOutlined } from '@ant-design/icons';

import Logo from '../../images/logo.svg'
import LoginIcon from '../../images/login-icon.png'
import Lock from '../../images/lock.png'
import company1 from '../../images/company1.png'

const Index = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(1);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const [isloggedIn, setIsloggedIn] = useState(false);
 
  const openHandleModal = (type) => {
    // console.log(type)
    if(type === 'create') {
      setIsSignupModalOpen(true);
      setIsLoginModalOpen(false);
      setIsForgotModalOpen(false);
      setIsCheckModalOpen(false);
    }
    if(type === 'login') {
      setIsLoginModalOpen(true);
      setIsSignupModalOpen(false);
      setIsForgotModalOpen(false);
      setIsCheckModalOpen(false);
    }
    if(type === 'forgot') {
      setIsForgotModalOpen(true);
      setIsSignupModalOpen(false);
      setIsLoginModalOpen(false);
      setIsCheckModalOpen(false);
    }
    if(type === 'check') {
      setIsCheckModalOpen(true);
      setIsSignupModalOpen(false);
      setIsLoginModalOpen(false);
      setIsForgotModalOpen(false);
    }
    if(type === 'profile') {
      navigate('/profile-setup')
      activeNavbar()
    }
    if(type === 'reset') {
      navigate('/new-password')
    }
  }
  const handleCancelModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    setIsForgotModalOpen(false);
    setIsCheckModalOpen(false);
  };

  const activeNavbar =() => {
    if(burgerActive) {
      setBurgerActive(false)
      document.body.classList.remove('nav-open')
    } else {
      setBurgerActive(true)
      document.body.classList.add('nav-open')
    }
  }

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  useEffect(() => {
    if(location.pathname !== '/') {
      setIsloggedIn(true)
    }
    document.body.classList.remove('nav-open')
  },[isloggedIn, location])
  return (
    <header>
      <div className="container">
        {!isloggedIn ? 
          <div className="menu-navbar">
            <div className="menu-seprator">
              <div className="navbar-brand">
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </div>
              <div className={burgerActive ? 'burger-container nav-active' : 'burger-container'}>
                <Button className="burger" onClick={activeNavbar}>
                  <span className="bar topBar"></span>
                  <span className="bar btmBar"></span>
                </Button>
              </div>
            </div>
            <div className={burgerActive ? 'menu-section active' : 'menu-section'}>
              <Button type='transparent' className="menu-close" onClick={activeNavbar}>
                <CloseCircleOutlined />
              </Button>
              <Menu mode="horizontal" disabledOverflow="true" onClick={onClick} selectedKeys={[current]}>
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/">Our Services</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/pricing">Pricing</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/">About us</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/">Resources</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/">Contact us</Link></Menu.Item>
                <Menu.Item key="7"><Link onClick={() => openHandleModal('login')}><img src={LoginIcon} className='mr-3'/> Login</Link></Menu.Item>
                <Menu.Item key="8">
                  <Button className="" type="gradient-primary" onClick={() => openHandleModal('create')}>Create Account</Button>
                </Menu.Item>
              </Menu>
            </div>
          </div>
          : ''
        }
        {isloggedIn ? 
          <div className="menu-navbar user-loogedin">
            <div className="menu-seprator">
              <div className="navbar-brand">
                <Link to="/">
                  <img src={Logo} preview="false"/>
                </Link>
                <div className="d-md-block d-none">
                  <Dropdown trigger={['click']} overlay={
                    <Menu>
                      <Menu.Item key="1" >
                        <Link to='/trade'>Trading</Link>
                      </Menu.Item>
                    </Menu>
                  }>
                    <a onClick={(e) => e.preventDefault()} style={{color: '#000'}}>
                      <Space>
                        <FieldTimeOutlined />
                        <p className="m-0">
                          Leasing
                        </p>
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
              <div className="d-md-none d-flex align-items-center">
                <div className="mobile-icons">
                  <Menu mode="horizontal" disabledOverflow="true">
                    <Menu.Item key="1"><Link to='/chat'><MessageOutlined /> </Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/notification'><BellOutlined /></Link></Menu.Item>
                  </Menu>
                </div>
                <div className={burgerActive ? 'burger-container nav-active' : 'burger-container'}>
                  <Button className="burger" onClick={activeNavbar}>
                    <span className="bar topBar"></span>
                    <span className="bar btmBar"></span>
                  </Button>
                </div>
              </div>
            </div>
            <div className={burgerActive ? 'menu-section active' : 'menu-section'}>
              <Button type='transparent' className="menu-close" onClick={activeNavbar}>
                <CloseCircleOutlined />
              </Button>
              <Menu mode="horizontal" disabledOverflow="true" onClick={onClick} selectedKeys={[current]}>
                <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
                <Menu.Item key="2">
                  <Dropdown overlay={
                    <Menu>
                      <Menu.Item key="2_1" ><Link to="/request">All Requests</Link></Menu.Item>
                      <Menu.Item key="2_2" ><Link to="/request/selling">Requests - Selling</Link></Menu.Item>
                    </Menu>
                  }>
                    <a onClick={(e) => e.preventDefault()} style={{color: '#000'}}>
                      <Space>
                        Request
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item key="3"><Link to="/tracking">Tracking</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/requirements">Requirements</Link></Menu.Item>
                
              </Menu>
              <div className="profile-menu">
                <Menu mode="horizontal" disabledOverflow="true">
                  <Menu.Item key="1"><Link to='/chat'><MessageOutlined /> </Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/notification'><BellOutlined /></Link></Menu.Item>
                  <Menu.Item key="3">
                    <Dropdown trigger={['click']} overlay={
                      <Menu>
                        <Menu.Item key="1" ><Link to="/my-account">Settings</Link></Menu.Item>
                      </Menu>
                    }>
                      <a onClick={(e) => e.preventDefault()} style={{color: '#000'}}>
                        <Space>
                          <Avatar src={company1} />
                          <p className="m-0">
                            Daniyal Ansari
                            <span className="color-gray block small">SK Shipping lines</span>
                          </p>
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          </div>
          : ''
        }
      </div>  
      <Modal title="" open={isLoginModalOpen} onCancel={() => handleCancelModal('login')} footer="">
        <div className="login-body">
          <div className="login-head text-center">
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
                  <Link onClick={() => openHandleModal('forgot')}>Forgot Password?</Link>
                </Col>  
              </Row>             

              <Form.Item>
                <Button type="orange" htmlType="submit" onClick={() => openHandleModal('profile')} block size="large">
                  Continue
                </Button>
              </Form.Item>
            </Form>
            <p className="new-account">
              Don’t have account? <Link onClick={() => openHandleModal('create')}>Create Account</Link>
            </p>
          </div>
        </div>
      </Modal>

      <Modal title="" open={isSignupModalOpen} onCancel={() => handleCancelModal('signup')} footer="">
        <div className="login-body">
          <div className="login-head">
            <h2>Create Account</h2>
            <p>Fill out following information to create your company account.</p>
          </div>
          <div className="login-content">
            <Form name="basic" layout="vertical"
              initialValues={{ remember: true }} autoComplete="off">
                {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}
              
              <Form.Item  label="Company Name"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input prefix={<ContainerOutlined />} placeholder="SK Shipping Lines" style={{ height: 60 }} />
              </Form.Item>              
              
              <Form.Item  label="Your Full Name"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Daniyal Ansari" style={{ height: 60 }} />
              </Form.Item>              
              
              <Form.Item  label="Email Address"
                rules={[{ required: true, message: 'Please input your username!',type: "email", }]}>
                <Input prefix={<MailOutlined />} placeholder="Email Address" style={{ height: 60 }} />
              </Form.Item>              
              
              <Form.Item  label="Password"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input.Password  prefix={<LockOutlined />} placeholder="*******" style={{ height: 60 }} />
              </Form.Item>           

              <Form.Item>
                <Button type="orange" htmlType="submit" onClick={() => openHandleModal('profile')} block size="large">
                  Create Account
                </Button>
              </Form.Item>
            </Form>
            <p className="new-account">
            Already have an account? <Link onClick={() => openHandleModal('login')}>Login</Link>
            </p>
          </div>
        </div>
      </Modal>

      <Modal title="" open={isForgotModalOpen} onCancel={() => handleCancelModal('forgot')} footer="">
        <div className="login-body">
          <div className="login-head">
            <h2>Forgot Password</h2>
            <p>Please enter email address associated to your account.</p>
          </div>
          <div className="login-content">
            <Form name="basic" layout="vertical"
              initialValues={{ remember: true }} autoComplete="off">
                {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}           
              
              <Form.Item  label="Email Address"
                rules={[{ required: true, message: 'Please input your username!',type: "email", }]}>
                <Input prefix={<MailOutlined />} placeholder="Email Address" style={{ height: 60 }} />
              </Form.Item>              

              <Form.Item>
                <Button type="orange" htmlType="submit" onClick={() => openHandleModal('check')} block size="large">
                  Confirm
                </Button>
              </Form.Item>
            </Form>
            <p className="new-account">
              Back to <Link onClick={() => openHandleModal('login')}>Login</Link>
            </p>
          </div>
        </div>
      </Modal>
      
      <Modal title="" open={isCheckModalOpen} onCancel={() => handleCancelModal('check')} footer="">
        <div className="login-body">
          <div className="login-head">
            <h2>Forgot Password</h2>
            <p>
              We have sent you a password reset link on your email address: <a href="mailto:sarangmemon8@gmail.com">sarangmemon8@gmail.com</a>
            </p>
          </div>
          <div className="login-content">
            <Form name="basic" layout="vertical"
              initialValues={{ remember: true }} autoComplete="off">
                {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}                       

              <Form.Item>
                <Button type="orange" htmlType="submit" onClick={() => openHandleModal('reset')} block size="large">
                  Open Email
                </Button>
              </Form.Item>
            </Form>
            <p className="new-account">
              Didn’t Receive? <Link onClick={() => openHandleModal('login')}>RESEND</Link>
            </p>
          </div>
        </div>
      </Modal>
    </header>
  )
}

export default Index;