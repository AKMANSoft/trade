import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Steps, Space, Input,Form, Select, Upload, Avatar } from "antd";

import { LockOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'


const NewPassword = ()=> {
  
  return(
    <Layout>
      <div className='nobanner-layout'> 
        <div className='container'>
          <div className="login-body on-container">
            <div className="login-head text-center">
              <h2>Create New Password</h2>
              <p>
                Your email has been verified now you can create your new password.
              </p>
            </div>
            <div className="login-content">
              <Form name="basic" layout="vertical"
                initialValues={{ remember: true }} autoComplete="off">
                  {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}             

                <Form.Item label="New Password" name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="*******" style={{ height: 60 }}  />
                </Form.Item>
                
                <Form.Item label="Confirm New Password" name="c_password"
                  rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="*******" style={{ height: 60 }} />
                </Form.Item>

                <Form.Item>
                  <Button type="orange" htmlType="submit" block size="large">
                    Create Password
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewPassword