import React, {useEffect, useState} from "react";
import { Button, Row, Col, Dropdown, Menu } from "antd";
import { useLocation } from "react-router-dom";

import Header from '../header'
import Footer from '../footer'

const Layout = (props) => {
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
      <div className="main-section">
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;