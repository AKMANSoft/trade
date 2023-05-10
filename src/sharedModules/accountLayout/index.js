import React, {useEffect, useState} from "react";
import { Row, Col } from "antd";
import { useLocation } from "react-router-dom";

import Header from '../header'
import Footer from '../footer'
import AccountSidebar from '../accountSidebar'

const AccountLayout = (props) => {
  const location = useLocation();
  const [homePage, setHomePage] = useState(false)
  useEffect(() => {
    if(location.pathname === '/') {
      setHomePage(true)
    }
  })
  return (
    <div className={homePage ? 'gen-page' : 'gen-page theme-blue'}>
      <Header />
      <div className="nobanner-layout accounts-dashboard">
        <div className="container">
          <Row gutter={30}>
            <Col xl={5} lg={6} md={7}>
              <AccountSidebar />
            </Col>
            <Col xl={19} lg={18} md={17}>
              <main>
                {props.children}
              </main>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AccountLayout;