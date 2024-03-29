import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Radio, Select, Form, Dropdown, Menu, Space, Pagination } from "antd";
import { ContainerOutlined, DownOutlined, PlusCircleOutlined, EnvironmentOutlined, AimOutlined } from '@ant-design/icons';

import Layout from '../../sharedModules/defaultLayout'
import company1 from '../../images/company1.png'
import SupplierList from '../../sharedModules/supplierList'

const Request = ()=> {
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const [requirement, setRequirement] = useState('supplying')
  let navigate = useNavigate();
  const setRequirements= () => {
    navigate('/supplier-requirements')
  }
  
  return(
    <Layout>
      <div className='nobanner-layout'>
        <div className='container'>
          <div className='lease-requirment'>
            <div className='lease-content'>
              <h3>Filter Requests</h3>
              <Radio.Group name='radioGroup' className='container-type' defaultValue={requirement} onChange={(e) => {setRequirement(e.target.value)}} value={requirement}>
                <Radio.Button value="supplying">Supplying</Radio.Button>
                <Radio.Button value="using">Using</Radio.Button>
              </Radio.Group>
              <div className="lease-filter">
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Container Type</label>
                    <div className='form-field'>
                      <i className="icon"><ContainerOutlined /></i>
                      <Select placeholder="Dry Containers" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Pick-up Location</label>
                    <div className='form-field'>
                      <i className="icon"><AimOutlined /></i>
                      <Select placeholder="All Locations" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Drop-off Location</label>
                    <div className='form-field'>
                      <i className="icon"><EnvironmentOutlined /></i>
                      <Select placeholder="All Locations" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Equipment Type</label>
                    <div className='form-field'>
                      {/* <i className="icon"><ContainerOutlined /></i> */}
                      <Select placeholder="Any Equipment" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Equipment Count </label>
                    <div className='form-field'>
                      {/* <i className="icon"><ContainerOutlined /></i> */}
                      <Select placeholder="20" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Company</label>
                    <div className='form-field'>
                      {/* <i className="icon"><ContainerOutlined /></i> */}
                      <Select placeholder="Any Company" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className="single-filter">
                  <Form.Item>
                    <label className='ant-form-item-label'>Size</label>
                    <div className='form-field'>
                      {/* <i className="icon"><ContainerOutlined /></i> */}
                      <Select placeholder="20ft" style={{height: 30}}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <Row type='flex' justify='space-between' align='middle' gutter={20}>
            <Col md={10} span={24}>
              <h2 className='m-0 text-capitalize'>Requests</h2>
            </Col>
            <Col md={14} span={24}>
              <div className='sort-section'>
                <div className='sort-single'>
                  <p className='m-0'>Sort By</p>
                  <Dropdown trigger={['click']} overlay={
                    <Menu>
                      <Menu.Item key="1" >
                        <Button type="link"  size="small">
                          Upload large file
                        </Button>
                      </Menu.Item>
                    </Menu>
                  }>
                    <a onClick={(e) => e.preventDefault()} style={{color: '#000'}}>
                      <Space>
                        Latest on top
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <Space size={8} className='w-100 scroll-x'>
                <Button type='gradient-primary'>All Requests</Button>
                <Button type='gray'>Pending</Button>
                <Button type='gray'>In Negotiation</Button>
                <Button type='gray'>Accepted</Button>
                <Button type='gray'>Declined</Button>
              </Space>
            </Col>
          </Row>

          <div className='supplier-list'>
            <Space direction='vertical' className='w-100' size={25}>
              <SupplierList requests='true' />
              <SupplierList requests='true' />
              <SupplierList requests='true'/>
              <SupplierList requests='true'/>
            </Space>
          </div>
          <Row type='flex' justify='space-between'>
            <Col>
              <p>Showing 3 of 500</p>
            </Col>
            <Col>
              <Pagination defaultCurrent={1} total={500} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Request;