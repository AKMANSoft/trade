

import React, { useState,useEffect } from 'react';
import { Timeline, Tag, Row, Col, Button, Space, Avatar, Modal, Form, Table, Input } from "antd";
import { AimOutlined, EnvironmentOutlined, DeleteOutlined, EyeFilled, CloseOutlined, CheckOutlined, StarFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

import container1 from '../../images/container1.jpg'
import PaperPlane from '../../images/paperPlane.png'
import Pen from '../../images/pen.png'
import Company from '../../images/company1.png'
import Edit from '../../images/edit.png'

const SupplierList = ()=> {
  const [isRequestOpen, setIsRequestOpen] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [editMode, setEditMode] = useState('')
  const isEditing = (record) => record.key === editMode;
  const [form] = Form.useForm()

  useEffect(() => {
    const data = []
    for(let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        freeday: `freeday-${index}`,
        value: `${index}`,
      })
    }
    setDataSource(data)
  }, [])

  const openModal = (type) => {
    if(type === 'request') {
      setIsRequestOpen(true) 
    }
  }
  const handleCancelModal = () => {
    setIsRequestOpen(false)
  }
 
  const setEdit = (val) => {
    setEditMode(val.key)
  }
  const saveRecord = (val) => {
    setEditMode('')
  }

  const columns = [
    {
      title: '',
      dataIndex: 'freeday'
    },
    {
      title: '',
      dataIndex: 'value',
      render: (text, record) => {
        if(editMode === record.key) {
          return <Form.Item name='value'
            rules={[{ required: true, message: 'Please input your username!' }]} className='m-0
            '>
            <Input placeholder="5654" style={{ height: 40 }} />
          </Form.Item>
        } else {
          return  <p className='m-0'>{text}</p>
        }
      }
    },
    {
      title: '',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? 
          <Button type='borderless-green' className='p-0 m-0' onClick={()=> {saveRecord(record)}}><CheckOutlined />Confirm</Button>
        : 
          <Button type='border-less' className='p-0 m-0' disabled={editMode !== ''} onClick={() => {
            setEdit(record);
            form.setFieldsValue({
              value: record.value
            })
          }}><img src={Edit} /> Edit</Button>        
      }
    }
  ]
  return(
    <div className='container-box p-0 available-container-box'>
      <div className='container-content parallel'>
        <div className='container-desc'>
          <div>
            <div className='container-image-name'>
              <Avatar src={container1}/>
              <h3>Cargoship | Shipping</h3>
              <span className='fw-600 color-gray'>&nbsp; wants to supply</span>
              {/* <p className='company-status online'>
                <span></span>
                Online
              </p> */}
            </div>
            <div>
              <div className='container-name'>
                <Space size={5} wrap>
                  <Tag bordered={false} color='#F49A26'>20x</Tag>
                  <h4 className='m-0'>20ft. Dry Container</h4>
                  <Tag bordered={false}>Cargo Worthy</Tag>
                </Space>
              </div>
            </div>
          </div>
          <div className='availibility'>
            <Row type='flex' justify='space-between' align='middle' gutter={20}>
              <Col>
                <Space size={[5,10]} wrap>
                  <Tag bordered={false}>Valid Forever</Tag>
                  <Tag bordered={false} color='#1DB9B5'>Match Found (1)</Tag>
                  <span className='fw-600 color-gray'>2 hours ago </span>
                </Space>
              </Col>
              <Col className='terms'>
                <h3 className='m-0'>Terms</h3>
                <p className='m-0'>20 Freedays / Per Diem: $00 / Pick-up Charge: $00 <span className='color-gray'>paid by user</span> </p>
              </Col>
            </Row>
          </div>
        </div> 
        <div className='req-section'>
          <div className='end-points'>
            <Timeline>
              <Timeline.Item key={1} dot={<AimOutlined style={{ fontSize: '20px', color: '#727272' }} />}>
                <p className='m-0 fw-600 color-gray'>Pickups</p>
                <Space size={0}>
                  <Tag bordered={false}>Karachi</Tag>
                  <Tag bordered={false}>Dubai</Tag>
                  <Tag bordered={false}>+9 More</Tag>
                </Space>
              </Timeline.Item>
              <Timeline.Item key={1} dot={<EnvironmentOutlined style={{ fontSize: '20px', color: '#727272' }} />}>
                <p className='m-0 fw-600 color-gray'>Dropoffs</p>
                <Space size={[5]}>
                  <Tag bordered={false}>Karachi</Tag>
                  <Tag bordered={false}>Dubai</Tag>
                  <Tag bordered={false}>+9 More</Tag>
                </Space>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className='req-charges'>
            <Space size={15}>
              <div>
                <p className='m-0 fw-600 color-gray'>Total Charges</p>
                <h3 className='m-0'>$33,000</h3>
                <p className='m-0 color-gray'>24 Requests</p>
              </div>
              {/* <div className='text-center progress-counter'>
                <Progress type="circle" size={45} percent={75} format={(percent) => `${percent} /20`} 
                  strokeColor={{ '0%': '#F49A26', '100%': '#F49A26' }} />
                <p className='m-0'>Returned</p>
              </div> */}
            </Space>
            {/* <Link to="#" className='color-theme'>View Offers (24)</Link>   */}
            <Space className='req-btns' size={10}>
              <Button type='gray' className='icon-only'><EyeFilled /></Button>
              <Button type='orange' onClick={() => openModal('request')}><img src={PaperPlane} className='anticon'/>Send Request</Button>
              {/* <Button type='orange' className='icon-only'><img src={Pen} className='anticon'/></Button> */}
              {/* <Button type='red' className='icon-only'><DeleteOutlined /></Button> */}
              {/* <Button type='red'><CloseOutlined />Decline</Button> */}
              {/* <Button type='green'><CheckOutlined />Accept</Button> */}
            </Space>
          </div>
        </div>
      </div>
      <Modal title="" open={isRequestOpen} onCancel={() => handleCancelModal('request')} footer="" width={1000}>
        <div className="login-body offer-sec">
          <div className="login-head">
            <h2>Send Offer</h2>
          </div>
          <div className="login-content">
            <div className='desc-box mt-20'>
              <Row type='flex' justify='space-between' gutter={30}>
                <Col>
                  <div className='reviews'>
                    <Avatar src={Company} size={50}/>
                    <div className='review-desc'>
                      <div className='review-by'>
                        <Space size={10}>
                          <h2 className='m-0'>Cargoship | Shipping </h2>
                          <p className='company-status online'>
                            <span></span>
                            Online
                          </p>
                        </Space>
                        <p className='m-0'>User</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p className='rating'><StarFilled /> 4.7 <small>23 Ratings</small></p>
                </Col>
              </Row>
            </div>
            <Form name="basic" initialValues={{ remember: true }} autoComplete="off" form={form}>
                {/* onFinish={onFinish} onFinishFailed={onFinishFailed} */}                       

              <Table 
                columns={columns} dataSource= {dataSource} pagination={false}
              ></Table>
              <Row type='flex' gutter={15} justify='end' align='middle'>
                <Col>
                  <Button type='black' size='large'>Cancel</Button>
                </Col>
                <Col>
                  <Button type='orange' size='large'>Confirm & Send Offer</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SupplierList;