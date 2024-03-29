import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

const Home = React.lazy(() => import ('../Container/home'));
const Pricing = React.lazy(() => import ('../Container/pricing'));
const FindContainer = React.lazy(() => import ('../Container/findContainer'));
const ProfileSetup = React.lazy(() => import ('../Container/profileSetup'));
const Dashboard = React.lazy(() => import ('../Container/dashboard'));
const Request = React.lazy(() => import ('../Container/request'));
const Selling = React.lazy(() => import ('../Container/selling'));
const Requirements = React.lazy(() => import ('../Container/requirements'));
const RequirementForm = React.lazy(() => import ('../Container/requirementForm'));
const MyAccount = React.lazy(() => import ('../Container/myAccount'));
const CompanyProfile = React.lazy(() => import ('../Container/companyProfile'));
const CompanyProfileEdit = React.lazy(() => import ('../Container/companyProfile/edit'));
const ManageUser = React.lazy(() => import ('../Container/manageUser'));
const Trade = React.lazy(() => import ('../Container/trade'));
const Track = React.lazy(() => import ('../Container/track'));
const TrackDetail = React.lazy(() => import ('../Container/track/trackDetail'));
const Notification = React.lazy(() => import ('../Container/notification'));
const Chat = React.lazy(() => import ('../Container/chat'));
const NewPassword = React.lazy(() => import ('../Container/newPassword'));

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
      <Route path="/requirements" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Requirements />
        </React.Suspense>   
        } 
      />
      <Route path="/request" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Request />
        </React.Suspense>   
        } 
      />
      <Route path="/request/selling" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Selling />
        </React.Suspense>   
        } 
      />
      <Route path="/supplier-requirements" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <RequirementForm />
        </React.Suspense>   
        } 
      />
      <Route path="/trade" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Trade />
        </React.Suspense>   
        } 
      />
      <Route path="/tracking" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Track />
        </React.Suspense>   
        } 
      />
      <Route path="/tracking/track-detail" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <TrackDetail />
        </React.Suspense>   
        } 
      />
      <Route path="/my-account" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <MyAccount />
        </React.Suspense>   
        } 
      />
      <Route path="/company-profile" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <CompanyProfile />
        </React.Suspense>   
        } 
      />
      <Route path="/company-profile/edit" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <CompanyProfileEdit />
        </React.Suspense>   
        } 
      />
      <Route path="/manage-user" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <ManageUser />
        </React.Suspense>   
        } 
      />
      <Route path="/notification" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Notification />
        </React.Suspense>   
        } 
      />
      <Route path="/chat" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Chat />
        </React.Suspense>   
        } 
      />
      <Route path="/new-password" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <NewPassword />
        </React.Suspense>   
        } 
      />
    </Routes>
  )
}

export default MyRoutes