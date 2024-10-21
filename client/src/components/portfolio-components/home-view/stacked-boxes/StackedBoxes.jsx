import React from 'react';
import './StackedBoxes.css'; // Import the CSS file for styling
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import BoxItem from './BoxItem';
import items from "./items";


const StackedBoxes = () => {
  const handleBoxHover = (e) => {
    // Increase z-index on hover
    e.target.style.zIndex = 4;
  };

  const handleBoxLeave = (e) => {
    // Reset z-index on leave
    e.target.style.zIndex = e.target.getAttribute('data-zIndex');
  };
    // Translation
    const { i18n } = useTranslation();
    const boxItems = items.map(item => {
      if(i18n.language == 'ar') {
        return({
          id: item.id,
          title: item.title_ar,
          path: item.path,
          box: item.box,
          indexNum: item.indexNum,
        })
      }
      return item;
    });
  return (
    <Box className="stacked-boxes-container flex justify-center items-center w-full">
      {boxItems.map((item, index) => (
            <BoxItem 
              key={index}
              path={item.path}
              indexNum={item.indexNum}
              handleBoxHover={handleBoxHover}
              handleBoxLeave={handleBoxLeave}
              box={item.box}
              title={item.title}
            />
          )
        )}
    </Box>
  );
};

export default StackedBoxes;
