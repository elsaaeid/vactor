import React, { useState, useEffect, useContext } from 'react';
import Header from "../header/Header";
import Footer from "../../portfolio-components/footer/Footer";
import Navbar from "../global/navbar/Navbar";
import BackToTopButton from "../../portfolio-components/goToTopButton/BackToTopButton";
import {Box} from '@mui/material';
import Loader from "../Loader";
import {ChatBotContainer} from "../chat/ChatBotContainer";
import { Context } from '../../../context/Context';


const Layout = ({children, Content}) => {
    // loading State
    const [loading, setLoading] = useState(true);
    // App Context
    const { backToTop } = useContext(Context);

    // Loading Handlling Side Effect
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

  return (
    <>
    {loading ? (
      <Loader />
    ) 
    : 
    (
      <Box className='app-container'>
        <Header />
        <Navbar items={Content} />
            {children}
        <BackToTopButton backToTop={backToTop} />
        <ChatBotContainer />   
        <Footer />
      </Box>
      )
    }
    </>
  )
}

export default Layout;