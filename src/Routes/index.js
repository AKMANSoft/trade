import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

const Home = React.lazy(() => import ('../Container/home'));
const Pricing = React.lazy(() => import ('../Container/pricing'));
const FindContainer = React.lazy(() => import ('../Container/findContainer'));

const MyRoutes = () => {
  useEffect(() => {
  //  console.log('knlk', Home) 
  }, []);
  return(
    <Routes>
      <Route path="/" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Home />
        </React.Suspense>   
        } 
      />
      <Route path="/pricing" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Pricing />
        </React.Suspense>   
        } 
      />
      <Route path="/find-container" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <FindContainer />
        </React.Suspense>   
        } 
      />
    </Routes>
  )
}

export default MyRoutes