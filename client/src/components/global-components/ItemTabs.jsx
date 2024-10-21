import React from 'react';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


export const ItemTabs = ({itemClass,itemClick, itemTitle}) => {
     // Theme Colors Mode
     const theme = useTheme()
     const colors = tokens(theme.palette.mode);
  return (
        <li 
        style={{
          color: colors.grey[500],
        }} 
            className={itemClass}
            onClick={itemClick}>
            {itemTitle}
        </li>
  )
}

