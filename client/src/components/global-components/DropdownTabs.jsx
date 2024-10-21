import { IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import {Box} from '@mui/material';
import {ItemTabs} from "./ItemTabs";
import { useTranslation } from "react-i18next";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

 const DropdownTabs = ({blogs, orderState, toggleTab, value, results})=> {

   // Theme Colors Mode
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(true);
  const [rotate, setRotate] = useState();
  	// Translation
	const { t } = useTranslation();

    const parentRef = useRef();
    useEffect(() => {
        if (parentRef.current) {
          autoAnimate(parentRef.current);
        }
      }, [parentRef]);
   
  const showMore = () => {
    setOpen(!open);
    setRotate(!rotate);
  };
              
    return (
        <Box ref={parentRef} className='block-tabs w-full flex flex-col justify-evenly items-center'>
            <Box 
              style={{
                color: colors.grey[500],
              }} 
              className="flex justify-evenly items-center"  
              variant="success" 
              id="dropdown-basic" 
              onClick={showMore}>
                {t(`dropdown.${value}`)} <IoIosArrowUp className= {rotate ? "arrowExplore" : "arrowExplore toggled"} />
            </Box>         
            <ul 
              style={{
                background: colors.grey[900],
              }} 
              className= {open ? "dropdown-menus w-full flex flex-col justify-center items-center" : "dropdown-menus  w-full flex flex-col justify-center items-center dropdown-toggled"}>       
            <ItemTabs 
              itemClass={orderState ==  "All" ? "dropdown-tabs dropdown-active-tabs" : "dropdown-tabs"}
              itemClick={() =>toggleTab("All", blogs.length ,  "All", blogs)}
              itemTitle="All"
              />
              {results}
            </ul>
        </Box>
    )
}
export default DropdownTabs;

