import React from 'react';
import Login from '../pages/auth-pages/Login.js';
import Register from '../pages/auth-pages/Register.js';
import Forget from "../pages/auth-pages/Forget.js";
import Reset from "../pages/auth-pages/Reset.js";
import Verify from "../pages/auth-pages/Verify.js";
import LoginWithCode from "../pages/auth-pages/LoginWithCode.js";
import Home from '../pages/portfolio-pages/home/Home.jsx';
import Contact from '../pages/portfolio-pages/contact/Contact.jsx';
import Error from '../pages/portfolio-pages/Error.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard-pages/dashboard/index.jsx";
import UserList from "../pages/dashboard-pages/user-list/UserList.jsx";
import Layout from "../components/global-components/layout/Layout.jsx"
import EditProfile from "../components/global-components/profile/EditProfile.js";
import ChangePassword from '../components/global-components/changePassword/ChangePassword.js';
import PageMenu from "../components/global-components/page-menu/PageMenu.jsx";
import AddBlog from "../pages/dashboard-pages/addBlog/AddBlog.jsx";
import EditBlog from "../pages/dashboard-pages/editBlog/EditBlog.jsx";
import Blogs from '../pages/portfolio-pages/blogs/Blogs.jsx';
import Blog from '../pages/portfolio-pages/blogs/Blog.jsx';
import DashboardBlogs from '../pages/dashboard-pages/dashboardBlogs/DashboardBlogs.jsx';
import Videos from '../pages/portfolio-pages/videos/Videos.jsx';
import mainItems from "../components/global-components/global/navbar/mainItems";
import dashboardItems from "../components/global-components/global/navbar/dashboardItems";
import Learn from '../pages/portfolio-pages/learn/Learn.jsx';




const index = () => {

  return(
    <Routes>
      <Route path="/register" element={
        <PageMenu 
          firstLinkNav="/register" firstTitleNav="Signup"
          secondLinkNav="/login" secondTitleNav="Login"
          >
          <Register />
        </PageMenu>
        } 
      />
      <Route path="/login" element={
        <PageMenu 
          firstLinkNav="/register" firstTitleNav="Signup"
          secondLinkNav="/login" secondTitleNav="Login"
          >
          <Login />
        </PageMenu>
      } 
    />
      <Route path="/forget" element={<Forget />} />
      <Route path="/resetPassword/:resetToken" element={<Reset />} />
      <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
      <Route
        path="/verify/:verificationToken"
        element={
          <Verify />
        }
      />
      {/*Portfolio*/}
      <Route path='/' element={
        <Layout Content={mainItems}>
          <Home />
        </Layout>
      } />
      <Route path='/contact' element={
        <Layout Content={mainItems}>
          <Contact />
        </Layout>
      } />
      <Route
        path="/edit-profile"
        element={
            <PageMenu 
              firstLinkNav="/edit-profile" firstTitleNav="Edit Profile"
              secondLinkNav="/change-password" secondTitleNav="Change Password"
            >
              <EditProfile />
            </PageMenu>
            }
          />
      <Route
      path="/change-password"
      element={
          <PageMenu 
            firstLinkNav="/edit-profile" firstTitleNav="Edit Profile"
            secondLinkNav="/change-password" secondTitleNav="Change Password">
            <ChangePassword />
          </PageMenu>
          }
        />
      <Route path='/dashboard' element={
        <Layout Content={dashboardItems}>
          <Dashboard />
        </Layout>} />
        <Route path='/dashboard-blogs' element={
        <Layout Content={dashboardItems}>
          <DashboardBlogs />
        </Layout>} />
          <Route path='/users' element={
            <Layout Content={dashboardItems}>
              <UserList />
            </Layout>} />
            <Route path='/videos' element={
              <Layout Content={mainItems}>
                <Videos />
              </Layout>
              } />
              <Route path='/learn' element={
              <Layout Content={mainItems}>
                <Learn />
              </Layout>
              } />
              <Route
              path="/add-blog"
              element={
                <Layout Content={dashboardItems}>
              <AddBlog />
              </Layout>} />

              <Route
              path="/edit-blog/:id"
              element={
              <Layout Content={dashboardItems}>
              <EditBlog />
              </Layout>} />
              <Route path='/blogs' element={
              <Layout Content={mainItems}>
                <Blogs />
              </Layout>
              } />
              <Route path='/blog/:id' element={
              <Layout Content={mainItems}>
                <Blog />
              </Layout>
              } />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default index;
