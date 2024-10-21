import React, {useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import "./Sidebar.css"
import { useTranslation } from "react-i18next";
import items from "./items";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material"; 
import SideIcon from './SideIcon';
import { useLocation } from 'react-router-dom';
import LogoContent from "../LogoContent";
import { Context } from '../../../context/Context';


const Sidebar = () => {

  //App Theme
const {activeNav, setActiveNav} = useContext(Context);
     // Translation
const { i18n } = useTranslation();
const theme = useTheme();
const colors = tokens(theme.palette.mode);

const navItem = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      title: item.title_ar,
      href: item.href,
      icon: item.icon,
    })
  }
  return item;
});

const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location, setActiveNav]);

  return (
      <Box 
        style={{
                background: colors.grey[900],
          }}
      className="sidebar-container">
        <LogoContent />
        <Box className="sidelinks-container mt-3">
          {navItem
            .map((item) => (
                <SideIcon
                    style={{
                        borderColor: colors.grey[500],
                    }}
                    titleIcon={item.title}
                    hrefIcon={item.href}
                    clickIcon={() => setActiveNav(item.href)}
                    classIcon={activeNav === item.href ? 'active icon-item' : 'icon-item'}
                    icon={item.icon}
                />
            ))}
        </Box>
      </Box>
  )
}

export default Sidebar