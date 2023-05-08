import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

const Home = React.lazy(() => import ('../Container/home'));
const Pricing = React.lazy(() => import ('../Container/pricing'));
const FindContainer = React.lazy(() => import ('../Container/findContainer'));
const ProfileSetup = React.lazy(() => import ('../Container/profileSetup'));
const Dashboard = React.lazy(() => import ('../Container/dashboard'));
const RequirementForm = React.lazy(() => import ('../Container/requirementForm'));

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
      <Route path="/profile-setup" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <ProfileSetup />
        </React.Suspense>   
        } 
      />
      <Route path="/dashboard" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Dashboard />
        </React.Suspense>   
        } 
      />
      <Route path="/supplier-requirements" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <RequirementForm />
        </React.Suspense>   
        } 
      />
    </Routes>
  )
}

export default MyRoutes