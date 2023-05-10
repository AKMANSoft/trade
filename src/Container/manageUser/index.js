import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Form, Input, Space, Select } from "antd";

import { DeleteOutlined } from '@ant-design/icons';

import AccountLayout from '../../sharedModules/accountLayout'
import Pen from '../../images/pen-green.png'

const ManageUser = ()=> {
  
  return(
    <AccountLayout>
      <div className='acc-section-wrapper'>
        <div className='wrapper-header'>
          <Row gutter={30} justify='space-between' align='middle'>
            <Col>
              <div className='g-content'> 
                <h2 className='m-0'>Manage Users</h2>
              </div>
            </Col>
            <Col>
              <Space>
                <Button type='orange' style={{height: 46}}>Add User</Button>
              </Space>
            </Col>
          </Row>
        </div>
        <div className='wrapper-body'>
          <table className='table'>
            <thead>
              <tr>
                <th>User</th>
                <th>Access</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4 className='m-0'>Daniyal Ansari</h4>
                  <p className='m-0'>daniyal@gmail.com</p>
                </td>
                <td>Leasing, Trading</td>
                <td>Admin</td>
                <td>
                  <Space size={5}>
                    <Button type='green-light'><img src={Pen} /></Button>
                    <Button type='red-light'><DeleteOutlined /></Button>
                  </Space>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className='m-0'>Daniyal Ansari</h4>
                  <p className='m-0'>daniyal@gmail.com</p>
                </td>
                <td>Leasing, Trading</td>
                <td>Admin</td>
                <td>
                  <Space size={5}>
                    <Button type='green-light'><img src={Pen} /></Button>
                    <Button type='red-light'><DeleteOutlined /></Button>
                  </Space>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className='m-0'>Daniyal Ansari</h4>
                  <p className='m-0'>daniyal@gmail.com</p>
                </td>
                <td>Leasing, Trading</td>
                <td>Admin</td>
                <td>
                  <Space size={5}>
                    <Button type='green-light'><img src={Pen} /></Button>
                    <Button type='red-light'><DeleteOutlined /></Button>
                  </Space>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AccountLayout>
  )
}

export default ManageUser;