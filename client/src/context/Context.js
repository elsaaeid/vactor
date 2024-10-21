import React, { createContext, useState, useLayoutEffect, useEffect } from 'react';
import { useSelector } from "react-redux";
import {
  selectUser,
} from "../redux/features/auth/authSlice";
import userImg from "../assets/userImg.png"

// Create a context
export const Context = createContext();


// ThemeProvider component to manage the theme state
export const ContextProvider = ({ children }) => {
  // user Select
  const user = useSelector(selectUser);
  // Initial State
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    photo: user?.photo || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };
// Button State
const [btnState, setBtnState] = useState();
// active Nav Item State
const [activeNav, setActiveNav] = useState('/');
// Order State 
const [orderState, setOrderState] = useState("");
// Join State
const [joinState, setJoinState] = useState(true);
// profile State
const [profile, setProfile] = useState(initialState);
// profile Image State
const [profileImage, setProfileImage] = useState(null);
// profile imagePreview State
const [imagePreview, setImagePreview] = useState(userImg);
// Selected Services State
const [backToTop, setBackToTop] = useState(false);
  // Scroll Handlling Side Effect
  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 80) {
        }
        if(window.scrollY > 100) {
        setBackToTop(true)
        }
        else {
        setBackToTop(false)
        }
    })
    }, []);


// Button Handling Function
const btnHandling = (state)=>{
  setBtnState(state);
};
// toggleTab Function
const toggleTab = (order) => {
  setOrderState(order);
};

useLayoutEffect(() => {
  if (user) {
    setProfile({
      ...profile,
      name: user.name,
      email: user.email,
      phone: user.phone,
      photo: user.photo,
      bio: user.bio,
      role: user.role,
      isVerified: user.isVerified,
    });
  }
}, [user]);

  // Auth State select
  const { isLoggedIn, isSuccess } =
      useSelector((state) => state.auth);

// Join title changing on Condition
useEffect(() => {
  if (isSuccess && isLoggedIn) {
    // join-title state
    setJoinState(false);
  }
  else {
    setJoinState(true);
  }
}, [isLoggedIn, isSuccess, setJoinState]);

  return (
    <Context.Provider 
      value={{
          backToTop,
          btnState, 
          btnHandling, 
          activeNav,
          setActiveNav, 
          orderState,
          toggleTab, 
          joinState,
          setJoinState, 
          profile, 
          setProfile, 
          profileImage, 
          setProfileImage, 
          imagePreview, 
          setImagePreview,
      }}
      >
      {children}
    </Context.Provider>
  );
};