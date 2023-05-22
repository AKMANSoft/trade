import React, {useEffect, useState} from "react";
import { Form, Button, Input, Space, Avatar, Row, Col, Popover } from "antd";
import Icon, { DownloadOutlined,  ExclamationCircleOutlined } from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';


import company1 from '../../images/company1.png'
import PaperPlane from '../../images/paperPlane.png'


const DocsPreview = () => {
  return (
    <div className="doc-preview">
      <div className="img-section">
        <img src={company1}/>
      </div>
      <div className="title-section">
        <Row justify='space-between' align='middle'>
          <Col>
            <p className="m-0">Agreement.pdf</p>
          </Col>
          <Col>
            <Button type="border-less" className="p-0"><DownloadOutlined /></Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default DocsPreview;