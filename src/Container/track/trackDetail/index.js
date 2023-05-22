import React, { useState,useEffect } from 'react';
import { Button, Row, Col, Dropdown, Space, Empty, Form, Avatar, Tag, Timeline, Menu, Tabs, Steps } from "antd";
import { EyeFilled, EnvironmentOutlined, ContainerOutlined, UserOutlined } from '@ant-design/icons';
import "../../../css/slick.min.css";
import Slider from "react-slick";

import { RightCircleOutlined, AimOutlined, DownOutlined, LeftCircleOutlined } from '@ant-design/icons';

import Layout from '../../../sharedModules/defaultLayout'
import company3 from '../../../images/company3.png'
import company2 from '../../../images/globalTrade.jpg'
import container1 from '../../../images/container1.jpg'
import Chat from '../../../sharedModules/chat'
import DocsPreview from '../../../sharedModules/docPreview'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    ><RightCircleOutlined /></button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <LeftCircleOutlined />
    </button>
  );
}

const Trade = ()=> {
  const { TabPane } = Tabs;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [containerSelected, setContainerSelected] = useState(false);
  
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    asNavFor: nav2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  const settings2 = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    ]
  };

  const operations = <p className='m-0'>Charges till today: <strong>$000</strong> </p>;

  const getSelectedContainer = (index) => {
    console.log(index)
    setContainerSelected(true)
  }
  useEffect(() => {
    console.log(containerSelected)
  }, [containerSelected])
  return(
    <Layout>
      <div className='nobanner-layout'> 
        <div className='container'>
          <div className='container-request-tabs'>
          <div className='container-box p-0 available-container-box'>
              <div className='container-content parallel'>
                <div className='container-desc'>
                  <div>
                    <div className='container-image-name'>
                      <Avatar src={container1}/>
                      <h3>Cargoship | Shipping</h3>
                      <span className='fw-600 color-gray d-md-flex d-none'>&nbsp; wants to supply</span>
                      <p className='company-status online'>
                        <span></span>
                        Online
                      </p>
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
                </div> 
                <div className='req-section flex-auto'>
                  <div className='end-points'>
                    <Timeline>
                      <Timeline.Item key={1} dot={<AimOutlined style={{ fontSize: '20px', color: '#727272' }} />}>
                        <p className='m-0 fw-600 color-gray'>Pickups</p>
                        <Space size={0}>
                          <Tag bordered={false}>Dubai</Tag>
                        </Space>
                      </Timeline.Item>
                    </Timeline>
                  </div>
                  <div className='container-status'>
                    <Steps
                      labelPlacement='vertical'
                      responsive={false}
                      items={[
                        {
                          title: 'Negotiation',
                          status: 'finish',
                          icon: (
                            <>
                              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_434_1577)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.5803 10.4624L31.4236 18.8513C31.8501 19.5901 32.8005 19.8447 33.5392 19.4182L35.2205 18.4476C35.9643 18.0181 36.2206 17.0612 35.7912 16.3175L30.9584 7.9469C30.529 7.20311 29.5721 6.94676 28.8284 7.37619L27.1471 8.34687C26.4084 8.77342 26.1538 9.72366 26.5803 10.4624ZM9.13792 10.4624L4.29454 18.8513C3.86806 19.5901 2.91774 19.8447 2.17894 19.4182L0.497684 18.4476C-0.246109 18.0181 -0.50246 17.0612 -0.0730247 16.3175L4.75976 7.9469C5.18919 7.20311 6.14607 6.94676 6.88978 7.37619L8.57103 8.34687C9.30976 8.77342 9.56447 9.72366 9.13792 10.4624ZM23.3624 16.609C22.2513 16.3868 20.9633 15.7907 19.6823 14.4533C19.6383 14.4075 19.5854 14.3711 19.5269 14.3465C19.4683 14.3219 19.4053 14.3096 19.3418 14.3102L17.567 14.2567C17.5037 14.2549 17.4406 14.2661 17.3817 14.2896C17.3228 14.313 17.2694 14.3482 17.2246 14.3931L17.2235 14.392L15.9811 15.6344C15.5491 16.0664 15.0081 16.2106 14.5139 16.1862C14.021 16.1618 13.5859 15.9786 13.3563 15.7491C13.3194 15.7125 13.2901 15.669 13.2701 15.621C13.25 15.5731 13.2397 15.5216 13.2395 15.4697H13.2413C13.2413 15.3681 13.2797 15.2669 13.3563 15.1902L15.6234 12.9231C15.822 12.7246 16.0235 12.5663 16.2369 12.443L16.2383 12.4422L16.2387 12.443C16.4555 12.3178 16.6932 12.222 16.9606 12.1503L19.8499 11.3761C20.1885 11.2854 20.5146 11.2512 20.8344 11.2739C21.155 11.2965 21.4731 11.3764 21.7947 11.5136L22.5487 11.8339C23.0221 12.035 23.5 12.1416 23.9834 12.1536C24.4668 12.1657 24.9489 12.0833 25.4307 11.9065C25.6778 11.816 25.9212 11.7158 26.1605 11.6063L30.398 18.9459C30.279 19.1126 30.1575 19.2774 30.0335 19.4404C29.8615 19.6666 29.6832 19.8879 29.4988 20.1041C29.4634 20.0805 29.4272 20.0581 29.3904 20.0369L25.1865 17.6098C26.285 17.4928 26.988 17.1455 26.9929 17.1431C27.1037 17.0894 27.1887 16.994 27.2294 16.8778C27.2701 16.7615 27.2631 16.6339 27.2099 16.5228C27.1568 16.4118 27.0619 16.3262 26.9459 16.2849C26.8299 16.2436 26.7022 16.25 26.5909 16.3025C26.5846 16.3054 25.2686 16.9566 23.4601 16.6273C23.4282 16.6177 23.3955 16.6116 23.3624 16.609ZM23.5736 21.3413L26.3497 22.9441C26.3574 22.9492 26.3654 22.9542 26.3735 22.9589C26.6316 23.108 26.8054 23.3496 26.8775 23.619C26.9479 23.882 26.9221 24.1698 26.7838 24.4225L26.7717 24.4423C26.6227 24.7004 26.3809 24.8743 26.1116 24.9464C25.8486 25.0169 25.5607 24.991 25.3081 24.8528L25.2883 24.8407L22.4867 23.2232C22.4337 23.1925 22.3751 23.1725 22.3144 23.1644C22.2536 23.1563 22.1919 23.1603 22.1327 23.1761C22.0131 23.208 21.911 23.286 21.849 23.3932C21.7869 23.5003 21.77 23.6276 21.8019 23.7472C21.8338 23.8668 21.9118 23.9689 22.0189 24.0309L23.8242 25.0732C24.0823 25.2222 24.2562 25.464 24.3283 25.7333C24.3978 25.9925 24.3735 26.2759 24.2403 26.526C24.2283 26.5436 24.2175 26.5619 24.2079 26.5809C24.058 26.8257 23.8231 26.9909 23.5623 27.0607C23.3006 27.1308 23.0142 27.1052 22.7624 26.968C22.7423 26.9548 22.7213 26.9432 22.6995 26.9332L21.794 26.4104C21.7771 26.4 21.76 26.3898 21.7428 26.3798C21.7343 26.3749 21.7256 26.3702 21.7168 26.3658L20.9321 25.9128C20.8251 25.8523 20.6985 25.8366 20.5799 25.8691C20.4613 25.9016 20.3604 25.9796 20.2992 26.0862C20.2379 26.1928 20.2213 26.3193 20.2529 26.4381C20.2845 26.5569 20.3618 26.6584 20.468 26.7204L21.2512 27.1726C21.2589 27.1778 21.2669 27.1827 21.2751 27.1874C21.5331 27.3365 21.707 27.5782 21.7791 27.8476C21.8486 28.107 21.8243 28.3907 21.6909 28.6409L21.6879 28.6453L21.6854 28.651L21.6732 28.6709C21.5243 28.929 21.2825 29.1028 21.0132 29.175C20.7537 29.2445 20.4701 29.2202 20.22 29.0868L20.2156 29.0839L20.2099 29.0814L20.19 29.0692L18.0673 27.8436L19.2514 25.7925C19.2572 25.7826 19.2625 25.7725 19.2675 25.7623C19.5316 25.2874 19.5831 24.7489 19.4521 24.2603C19.3182 23.7608 18.9944 23.3117 18.5131 23.0337L18.5092 23.0316C18.1535 22.8267 17.7435 22.7357 17.3345 22.7709C17.43 22.4242 17.4312 22.0583 17.3379 21.711C17.207 21.2224 16.8942 20.782 16.4301 20.5029C16.4062 20.4865 16.3809 20.4723 16.3545 20.4606C15.883 20.2032 15.3504 20.1539 14.8665 20.2836C14.6734 20.3353 14.489 20.4151 14.3192 20.5206C14.1613 20.0607 13.8424 19.6736 13.4212 19.4306L13.4217 19.4298C12.9395 19.1515 12.3885 19.0953 11.8894 19.229C11.6963 19.2808 11.5119 19.3608 11.3422 19.4665C11.1894 19.0219 10.8821 18.6279 10.4446 18.3753C9.96257 18.0971 9.41135 18.0408 8.91229 18.1745C8.65622 18.2428 8.41613 18.361 8.20579 18.5222C7.99545 18.6834 7.81899 18.8846 7.68651 19.1141L7.68573 19.1136L6.76683 20.7052C6.49374 20.4241 6.23356 20.1308 5.98709 19.8261C5.76208 19.5487 5.54199 19.2571 5.32002 18.9463L9.55761 11.6065C10.8374 12.1929 12.0372 12.4138 13.174 12.6228C13.5796 12.6974 13.9768 12.7705 14.3645 12.8591L12.6947 14.5288C12.5711 14.6523 12.4731 14.799 12.4063 14.9605C12.3395 15.1219 12.3053 15.295 12.3056 15.4697H12.3075C12.3075 15.8115 12.4366 16.1525 12.6948 16.4106C13.0692 16.785 13.7395 17.0821 14.4699 17.1182C15.199 17.1542 15.9992 16.9392 16.6425 16.2959L17.7435 15.1948L19.144 15.237C20.5295 16.6329 21.9319 17.272 23.1605 17.518L28.9224 20.8446C29.1806 20.9937 29.3544 21.2354 29.4266 21.5047C29.4961 21.764 29.4718 22.0475 29.3387 22.2975C29.3248 22.3177 29.3126 22.3389 29.302 22.361C29.1527 22.6006 28.9197 22.7628 28.6606 22.8322C28.4014 22.9017 28.1179 22.8775 27.8679 22.7443C27.8457 22.7291 27.8222 22.7158 27.7978 22.7046L26.8924 22.182C26.8755 22.1715 26.8583 22.1612 26.841 22.1512C26.8325 22.1463 26.8238 22.1417 26.815 22.1373L24.0376 20.5337C23.9305 20.4732 23.8039 20.4575 23.6853 20.49C23.5668 20.5225 23.4659 20.6005 23.4046 20.7071C23.3433 20.8137 23.3267 20.9402 23.3583 21.059C23.39 21.1778 23.4674 21.2793 23.5736 21.3413ZM8.8305 23.3437L10.3742 20.6698L10.3749 20.6687L10.3761 20.6667L10.3753 20.6662C10.5239 20.4089 10.5533 20.1127 10.481 19.8431C10.4088 19.5737 10.2351 19.332 9.97691 19.1829C9.71947 19.0343 9.42327 19.0049 9.15359 19.0771C8.88352 19.1494 8.64167 19.3227 8.49354 19.5795L8.49275 19.5808L8.49354 19.5813L7.28117 21.6812C7.27717 21.6886 7.27296 21.6959 7.26854 21.703L6.95114 22.2528C6.94225 22.2711 6.93215 22.2888 6.92089 22.3058C6.78367 22.5578 6.7581 22.8442 6.82811 23.1059C6.89797 23.3666 7.06318 23.6014 7.30783 23.7513C7.32436 23.7596 7.34027 23.7689 7.35563 23.7789C7.60745 23.9161 7.89406 23.9417 8.15563 23.8716C8.42492 23.7994 8.6667 23.6256 8.81569 23.3675C8.82037 23.3594 8.82543 23.3514 8.8305 23.3437ZM9.63752 23.809C9.6331 23.8179 9.62839 23.8267 9.62341 23.8353C9.61343 23.8526 9.60314 23.8697 9.59277 23.8866L9.35763 24.2939C9.3476 24.3157 9.33595 24.3367 9.32278 24.3568C9.18556 24.6087 9.15991 24.8952 9.23 25.1568C9.29986 25.4175 9.46514 25.6524 9.7098 25.8024C9.7289 25.812 9.74722 25.8228 9.76469 25.8348C10.0148 25.968 10.2982 25.9921 10.5574 25.9227C10.8184 25.8527 11.0535 25.6874 11.2033 25.4424C11.2139 25.4214 11.226 25.4013 11.2396 25.3821L13.3531 21.7213L13.3524 21.7209C13.501 21.4635 13.5304 21.1673 13.4581 20.8976C13.3857 20.6276 13.2124 20.3857 12.9557 20.2376L12.9544 20.2368L12.954 20.2376C12.6965 20.089 12.4004 20.0595 12.1306 20.1318C11.8606 20.2041 11.6187 20.3774 11.4705 20.6342L11.2117 21.0823C11.2024 21.0996 11.1928 21.1169 11.1829 21.1341L11.1821 21.1336L9.63752 23.809ZM12.0244 25.8859L12.0252 25.8863C12.0196 25.8961 12.0138 25.9058 12.0081 25.9154C11.8742 26.1658 11.8498 26.4499 11.9194 26.7096C11.9916 26.979 12.1655 27.2206 12.4236 27.3696L12.4435 27.3818C12.6961 27.52 12.984 27.5458 13.2469 27.4754C13.517 27.403 13.7589 27.2297 13.9071 26.973L13.9079 26.9717L13.9071 26.9712L15.7522 23.7753L15.7543 23.7718L15.7555 23.7697L16.3124 22.8051C16.3226 22.7841 16.3344 22.764 16.3475 22.7449C16.4807 22.4948 16.5048 22.2114 16.4354 21.9521C16.3655 21.6913 16.2003 21.4564 15.9556 21.3066C15.9366 21.297 15.9182 21.2862 15.9007 21.2741C15.6506 21.141 15.3671 21.1168 15.1079 21.1863C14.8385 21.2584 14.5968 21.4323 14.4479 21.6905C14.4431 21.6986 14.4382 21.7066 14.433 21.7145L14.1892 22.1368C14.1797 22.1542 14.1701 22.1715 14.1602 22.1887L14.1595 22.1883L12.0251 25.885L12.0244 25.8859ZM14.9812 26.9775C14.8509 27.2261 14.8276 27.507 14.8965 27.7641C14.9687 28.0334 15.1426 28.2752 15.4008 28.4243L15.4205 28.4364C15.6732 28.5746 15.961 28.6005 16.224 28.53C16.4933 28.4578 16.7351 28.2839 16.8841 28.0259L17.0252 27.7815L17.0259 27.7804L17.0264 27.7794L18.4265 25.3545C18.4367 25.3334 18.4485 25.3133 18.4616 25.2942C18.5948 25.0442 18.6189 24.7607 18.5495 24.5014C18.4796 24.2407 18.3144 24.0058 18.0698 23.8559C18.0534 23.8476 18.0374 23.8384 18.022 23.8283C17.7701 23.6911 17.4836 23.6654 17.222 23.7355C16.9534 23.8075 16.7121 23.9808 16.5631 24.2378L14.9812 26.9775Z" fill="#9D9D9D"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_434_1577">
                                <rect width="36" height="36" fill="white"/>
                                </clipPath>
                                </defs>
                              </svg>

                            </>
                          ),
                        },
                        {
                          title: 'Accepted',
                          status: 'finish',
                          icon: (
                            <>
                              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 1.125C25.4425 1.125 23.9199 1.58686 22.6249 2.45218C21.3298 3.31749 20.3205 4.5474 19.7244 5.98637C19.1284 7.42534 18.9725 9.00874 19.2763 10.5363C19.5802 12.0639 20.3302 13.4671 21.4315 14.5685C22.5329 15.6698 23.9361 16.4198 25.4637 16.7237C26.9913 17.0275 28.5747 16.8716 30.0136 16.2756C31.4526 15.6795 32.6825 14.6702 33.5478 13.3751C34.4131 12.0801 34.875 10.5575 34.875 9C34.875 6.91142 34.0453 4.90838 32.5685 3.43153C31.0916 1.95469 29.0886 1.125 27 1.125ZM30.555 8.15625L26.6625 11.5312C26.4603 11.7096 26.2008 11.8094 25.9312 11.8125C25.6578 11.8121 25.3938 11.7121 25.1887 11.5312L23.445 10.0238C23.2197 9.82683 23.0819 9.54848 23.0619 9.24995C23.0418 8.95141 23.1412 8.65714 23.3381 8.43187C23.535 8.20661 23.8134 8.06879 24.1119 8.04875C24.4105 8.02871 24.7047 8.12808 24.93 8.325L25.9312 9.19125L29.07 6.46875C29.1795 6.36355 29.3092 6.28161 29.4513 6.22788C29.5933 6.17415 29.7448 6.14973 29.8965 6.15609C30.0482 6.16246 30.1971 6.19948 30.3341 6.26493C30.4712 6.33038 30.5935 6.42289 30.6939 6.5369C30.7942 6.65091 30.8704 6.78405 30.9179 6.92829C30.9654 7.07254 30.9832 7.22491 30.9702 7.37622C30.9572 7.52754 30.9137 7.67465 30.8424 7.80871C30.771 7.94277 30.6733 8.06099 30.555 8.15625ZM1.125 20.25V33.75C1.125 34.0484 1.24353 34.3345 1.4545 34.5455C1.66548 34.7565 1.95163 34.875 2.25 34.875H4.5V19.125H2.25C1.95163 19.125 1.66548 19.2435 1.4545 19.4545C1.24353 19.6655 1.125 19.9516 1.125 20.25ZM26.595 22.8263C26.6937 22.5401 26.7469 22.2402 26.7525 21.9375C26.7525 21.1916 26.4562 20.4762 25.9287 19.9488C25.4013 19.4213 24.6859 19.125 23.94 19.125H19.125V15.75C19.116 14.8549 18.7519 14 18.1126 13.3734C17.4734 12.7468 16.6114 12.3998 15.7163 12.4087C14.8211 12.4177 13.9663 12.7819 13.3397 13.4211C12.713 14.0604 12.366 14.9224 12.375 15.8175C12.377 17.7928 11.955 19.7455 11.1375 21.5437L10.6538 22.5H9V20.25C9 19.9516 8.88147 19.6655 8.6705 19.4545C8.45952 19.2435 8.17337 19.125 7.875 19.125H6.75V34.875H7.875C8.17337 34.875 8.45952 34.7565 8.6705 34.5455C8.88147 34.3345 9 34.0484 9 33.75V32.2425H9.43875C9.66405 32.7914 10.0474 33.261 10.5402 33.5915C11.033 33.922 11.6129 34.0986 12.2063 34.0988H16.3912C16.9076 34.5971 17.5974 34.8755 18.315 34.875H23.94C24.6859 34.875 25.4013 34.5787 25.9287 34.0512C26.4562 33.5238 26.7525 32.8084 26.7525 32.0625C26.7513 31.611 26.6393 31.1668 26.4263 30.7688C26.7181 30.5059 26.9519 30.185 27.1126 29.8266C27.2734 29.4682 27.3577 29.0803 27.36 28.6875C27.3534 28.2708 27.2575 27.8603 27.0788 27.4837C27.4438 27.1932 27.7297 26.8155 27.9103 26.3854C28.0909 25.9552 28.1603 25.4866 28.1121 25.0225C28.064 24.5585 27.8997 24.1141 27.6346 23.7303C27.3694 23.3465 27.0119 23.0356 26.595 22.8263Z" fill="#9D9D9D"/>
                              </svg>
                            </>
                          ),
                        },
                        {
                          title: 'CRO Issued',
                          status: 'process',
                          icon: (
                            <>
                              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_434_1589)">
                                <path d="M27.3876 6.14686C27.3876 5.30227 27.058 4.50717 26.4607 3.9098L23.4779 0.927C22.8888 0.337852 22.0525 0 21.2203 0H21.0391V6.32812H27.3877L27.3876 6.14686Z" fill="#9D9D9D"/>
                                <path d="M19.2612 21.7643C19.4631 21.1515 19.8153 20.5809 20.2747 20.1184L27.4158 13.0061V8.4375H20.0048C19.4219 8.4375 18.9844 7.96577 18.9844 7.38281V0H3.16406C1.41933 0 0 1.41933 0 3.16406V32.8359C0 34.5807 1.41933 36 3.16406 36H24.2236C25.9683 36 27.4158 34.5807 27.4158 32.8359V24.9644L26.2567 26.0953C25.7871 26.5608 25.2371 26.8997 24.617 27.1067L21.2635 28.2263L20.7526 28.2542C19.908 28.2542 19.1088 27.8432 18.6124 27.1552C18.12 26.4703 17.9861 25.5824 18.2539 24.7801L19.2612 21.7643ZM5.27344 18.9844H15.7861C16.369 18.9844 16.8408 19.4561 16.8408 20.0391C16.8408 20.622 16.369 21.0938 15.7861 21.0938H5.27344C4.69048 21.0938 4.21875 20.622 4.21875 20.0391C4.21875 19.4561 4.69048 18.9844 5.27344 18.9844ZM4.21875 15.8203C4.21875 15.2374 4.69048 14.7656 5.27344 14.7656H15.7861C16.369 14.7656 16.8408 15.2374 16.8408 15.8203C16.8408 16.4033 16.369 16.875 15.7861 16.875H5.27344C4.69048 16.875 4.21875 16.4033 4.21875 15.8203ZM4.21875 24.2578C4.21875 23.6749 4.69048 23.2031 5.27344 23.2031H15.7861C16.369 23.2031 16.8408 23.6749 16.8408 24.2578C16.8408 24.8408 16.369 25.3125 15.7861 25.3125H5.27344C4.69048 25.3125 4.21875 24.8408 4.21875 24.2578ZM20.0048 29.5312C20.5878 29.5312 21.0595 30.003 21.0595 30.5859C21.0595 31.1689 20.5879 31.6406 20.0048 31.6406H13.6767C13.0937 31.6406 12.622 31.1689 12.622 30.5859C12.622 30.003 13.0937 29.5312 13.6767 29.5312H20.0048ZM5.27344 12.6562C4.69048 12.6562 4.21875 12.1845 4.21875 11.6016C4.21875 11.0186 4.69048 10.5469 5.27344 10.5469H20.0048C20.5878 10.5469 21.0595 11.0186 21.0595 11.6016C21.0595 12.1845 20.5878 12.6562 20.0048 12.6562H5.27344Z" fill="#9D9D9D"/>
                                <path d="M21.1721 22.6971L20.2546 25.4499C20.117 25.8623 20.5094 26.2546 20.9218 26.1168L23.673 25.198L21.1721 22.6971ZM29.3634 14.0135L22.4173 20.9596L25.413 23.9552C26.9829 22.385 30.0376 19.3299 32.3587 17.0088L29.3634 14.0135ZM35.3805 10.9884C35.0097 10.6155 34.4638 10.4023 33.8849 10.4023C33.306 10.4023 32.7602 10.6155 32.3873 10.9895L30.8547 12.5221L33.8499 15.5172L35.3827 13.9845C36.2065 13.1594 36.2064 11.8154 35.3805 10.9884Z" fill="#9D9D9D"/>
                                <path d="M35.3828 13.9856L35.383 13.9854L35.389 13.9794C35.387 13.9815 35.3849 13.9835 35.3828 13.9856ZM35.3984 13.97C35.4052 13.9632 35.4053 13.9631 35.3984 13.97V13.97Z" fill="#9D9D9D"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_434_1589">
                                <rect width="36" height="36" fill="white"/>
                                </clipPath>
                                </defs>
                              </svg>
                            </>
                          ),
                        },
                        {
                          title: 'Payment',
                          status: 'wait',
                          icon: (
                            <>
                              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 11.25V9H2.25C1.01025 9 0 10.0103 0 11.25V15.75H16.2248C15.912 14.3753 15.75 12.8948 15.75 11.25ZM35.9077 20.25C34.3732 22.6147 32.0332 24.6262 28.6807 26.5522C28.1655 26.847 27.585 27 27 27C26.415 27 25.8345 26.847 25.326 26.5567C21.9735 24.6262 19.6335 22.6125 18.0968 20.25H0V31.5C0 32.742 1.01025 33.75 2.25 33.75H33.75C34.992 33.75 36 32.742 36 31.5V20.25H35.9077ZM10.125 27H5.625C5.004 27 4.5 26.496 4.5 25.875C4.5 25.254 5.004 24.75 5.625 24.75H10.125C10.746 24.75 11.25 25.254 11.25 25.875C11.25 26.496 10.746 27 10.125 27Z" fill="#9D9D9D"/>
                                <path d="M35.3182 5.7171L27.4432 2.3421C27.3028 2.28198 27.1516 2.25098 26.9989 2.25098C26.8461 2.25098 26.6949 2.28198 26.5545 2.3421L18.6795 5.7171C18.2678 5.8926 18 6.29985 18 6.74985V11.2499C18 17.4396 20.2883 21.0576 26.4398 24.6014C26.613 24.7004 26.8065 24.7499 27 24.7499C27.1935 24.7499 27.387 24.7004 27.5602 24.6014C33.7117 21.0666 36 17.4486 36 11.2499V6.74985C36 6.29985 35.7322 5.8926 35.3182 5.7171ZM31.2547 10.8291L26.7547 16.4541C26.5387 16.7196 26.2148 16.8749 25.875 16.8749H25.8278C25.6508 16.8671 25.4782 16.8179 25.3238 16.7311C25.1694 16.6444 25.0376 16.5225 24.939 16.3754L22.689 13.0004C22.3447 12.4829 22.4842 11.7854 23.0017 11.4411C23.5147 11.0991 24.2145 11.2341 24.561 11.7539L25.9582 13.8486L29.4953 9.4251C29.8845 8.94135 30.5933 8.86485 31.077 9.2496C31.563 9.63435 31.6395 10.3431 31.2547 10.8291Z" fill="#9D9D9D"/>
                              </svg>
                            </>
                          ),
                        },
                      ]}
                    />
                  </div>
                  <div className='d-md-none d-block p-12'>
                  {operations}
                  </div>
                </div>
              </div>
            </div>
            <div className='container-tabs'>
              <Tabs defaultActiveKey="cDetails" tabBarExtraContent={operations}>
                <TabPane tab="Container Details" key="cDetails" >
                  <div className='tab-inner-content'>
                    <div className='desc-box'>
                      <div className='g-content'>
                        <h2>Description</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Aliquam sed sapien ac ipsum in. Laoreet sed enim in ultrices. Tellus lectus urna netus pulvinar interdum. Magnis dui risus vel cursus. Mattis porttitor volutpat mi elit aliquet pharetra.
                        </p>
                        <h2 className='mt-50'>Terms Agreed</h2>
                        <Row type='flex' gutter={30} justify='space-between'>
                          <Col md={6} span={24}>
                            <div className='specs'>
                              <p>
                                Free Days
                                <strong>00</strong>
                              </p>
                              <p>
                                Equipment Count
                                <strong>00</strong>
                              </p>
                              <p>
                                Demurrage Charges
                                <strong>00</strong>
                              </p>
                              <p>
                                Charges Per Day
                                <strong>0000</strong>
                              </p>
                            </div>
                          </Col>
                          <Col md={6} span={24}>
                            <div className='specs'>
                              <p>
                                Free Days
                                <strong>00</strong>
                              </p>
                              <p>
                                Equipment Count
                                <strong>00</strong>
                              </p>
                              <p>
                                Demurrage Charges
                                <strong>0000</strong>
                              </p>
                              <p>
                                Charges Per Day
                                <strong>00</strong>
                              </p>
                            </div>
                          </Col>
                          <Col md={6} span={24}>
                            <div className='specs'>
                              <p>
                                Free Days
                                <strong>00</strong>
                              </p>
                              <p>
                                Equipment Count
                                <strong>00</strong>
                              </p>
                              <p>
                                Demurrage Charges
                                <strong>00</strong>
                              </p>
                              <p>
                                Charges Per Day
                                <strong>00</strong>
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <Row type='flex' gutter={40}>
                      <Col md={15}>
                        <div className='g-content'>
                          <h4>Media</h4>
                        </div>
                        <div className='async-slider arrows-slider'>
                          <div className='large-slider'>
                            <Slider {...settings} ref={(slider1) => setNav1(slider1)}>
                              <div className='large-child'><img src={company2}/></div>
                              <div className='large-child'><img src={container1}/></div>
                              <div className='large-child'><img src={company2}/></div>
                              <div className='large-child'><img src={container1}/></div>
                              <div className='large-child'><img src={company2}/></div>
                              <div className='large-child'><img src={container1}/></div>                            
                            </Slider>
                          </div>
                          <div className='child-slider'>
                            <Slider {...settings2} ref={(slider2) => setNav2(slider2)}>
                              <div className='child-img'><img src={company2}/></div>
                              <div className='child-img'><img src={container1}/></div>
                              <div className='child-img'><img src={company2}/></div>
                              <div className='child-img'><img src={container1}/></div>
                              <div className='child-img'><img src={company2}/></div>
                              <div className='child-img'><img src={container1}/></div>
                            </Slider>
                          </div>
                        </div>
                      </Col>
                      <Col md={9}>
                        <div className='g-content'>
                          <h4>Chat</h4>
                        </div>
                        <Chat />
                      </Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="Documents" key="cDocuments">
                  <Space wrap size={40}>
                    <DocsPreview />
                    <DocsPreview />
                    <DocsPreview />
                    <DocsPreview />
                  </Space>
                </TabPane>
                <TabPane key="cActivity" tab={
                  <div className='with-count'>
                    Activity
                    <span className='count'>+1</span>
                  </div>
                  }>
                  csdcsd
                </TabPane>
                <TabPane tab="Track Activity" key="cTrack">
                  <Timeline mode='left' 
                    items={[
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Finished</h4>
                              <p>Lease was completed with demurrage and </p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Dropped off</h4>
                              <p>Equipment dropped off by SK shipping at Jabel Ali.</p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Picked up</h4>
                              <p>Equipment were picked up by SK shipping lines from Karachi Port.</p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Document Signed</h4>
                              <p>An agreement was signed by both parties.</p>
                            </div>
                          </>
                        )
                      },
                      {
                        label: '12:00 - 22 Feb, 2022',
                        children: (
                          <>
                            <div className='track-rec'>
                              <h4>Requested</h4>
                              <p>Request was initiated by SK Shipping Lines and accepted by cargoship shipping. </p>
                            </div>
                          </>
                        )
                      },
                    ]}
                  
                  />
                </TabPane>
                <TabPane tab="Track Container" key="cTrackCont">
                  <div className='tab-inner-content'>
                    <Row gutter={40} className="track-tab">
                      <Col xl={8} lg={9} md={10} span={24} className='order-md-0 order-1 mt-20 mt-md-0'>
                        <div className='desc-box containers-track m-0'>
                          <div className='g-content'>
                            <h2 className='m-0'>Container</h2>
                          </div>
                          <div className='container-boxes'>
                            <div className='box-sec'>
                              {[...Array(20)].map((x, i) =>
                                <div className='box-no' onClick={() => getSelectedContainer(i)}>
                                  <h4 className='m-0'>Container no# 000{i}</h4>
                                  <p className='m-0'>Empty Returned</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xl={16} lg={15} md={14} span={24}>
                        {
                          !containerSelected ? 
                            <div className='desc-box m-0 track-sheet'>
                              <Empty
                                description={
                                <div className='g-content'>
                                  <h6 className='m-0'>No Container Selected</h6>
                                  <p className='m-0 small'>Please select a container to track activity</p>
                                </div>
                                }
                              >
                              </Empty>
                            </div>
                          : 
                          <div className='desc-box m-0 containers-track track-sheet'>
                            <div className='g-content'>
                              <Row type='flex' justify='space-between'>
                                <Col md={10} span={24}>
                                  <h2 className='m-0'>Activity Timeline</h2>
                                </Col>
                                <Col md={14} span={24}>
                                  <div className='sort-section'>
                                    <div className='sort-single'>
                                      <p className='m-0'>Current Status</p>
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
                                            Empty Picked Up
                                            <DownOutlined />
                                          </Space>
                                        </a>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className='container-boxes'>
                              <Timeline mode='left' 
                                items={[
                                  {
                                    label: '12:00 - 22 Feb, 2022',
                                    children: (
                                      <>
                                        <div className='track-rec'>
                                          <h4>Finished</h4>
                                          <p>Lease was completed with demurrage and </p>
                                        </div>
                                      </>
                                    )
                                  },
                                  {
                                    label: '12:00 - 22 Feb, 2022',
                                    children: (
                                      <>
                                        <div className='track-rec'>
                                          <h4>Dropped off</h4>
                                          <p>Equipment dropped off by SK shipping at Jabel Ali.</p>
                                        </div>
                                      </>
                                    )
                                  },
                                  {
                                    label: '12:00 - 22 Feb, 2022',
                                    children: (
                                      <>
                                        <div className='track-rec'>
                                          <h4>Picked up</h4>
                                          <p>Equipment were picked up by SK shipping lines from Karachi Port.</p>
                                        </div>
                                      </>
                                    )
                                  },
                                  {
                                    label: '12:00 - 22 Feb, 2022',
                                    children: (
                                      <>
                                        <div className='track-rec'>
                                          <h4>Document Signed</h4>
                                          <p>An agreement was signed by both parties.</p>
                                        </div>
                                      </>
                                    )
                                  },
                                  {
                                    label: '12:00 - 22 Feb, 2022',
                                    children: (
                                      <>
                                        <div className='track-rec'>
                                          <h4>Requested</h4>
                                          <p>Request was initiated by SK Shipping Lines and accepted by cargoship shipping. </p>
                                        </div>
                                      </>
                                    )
                                  },
                                ]}
                              
                              />
                            </div>
                          </div>
                        }
                      </Col>
                    </Row>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Trade