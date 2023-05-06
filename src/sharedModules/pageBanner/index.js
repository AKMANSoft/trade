

import React, { useState,useEffect } from 'react';

import pageBanner from '../../images/pageBanner.jpg'

const PageBanner = ()=> {
  return(
    <div className='gen-banner'>
      <img src={pageBanner}/>
    </div>
  )
}

export default PageBanner;