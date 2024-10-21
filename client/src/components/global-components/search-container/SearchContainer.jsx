import React, {  useRef, useEffect } from 'react';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import {Box} from '@mui/material';
import { IoCloseSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";


export const SearchContainer = ({
  SearchChange, 
  SearchValue, 
  searchCloseHandle,
  openSearch,
  searchIcon,
  searchContent,
  position,
  width,
}) => {
  // Theme Colors Mode
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  // Current Input Reference
  const inputRef = useRef(null);
 
useEffect(() => {
  inputRef.current.focus();
}, []);

  return (
    <Box className='flex width-full justify-center search-input'>
        <Box width={width} className={searchContent}>
          <input
            style={{
              position: {position},
              color: colors.grey[500],
              background: colors.grey[900],
              width: "100%",
              height: "100%",
            }}
            id="search-input"
            placeholder=''
            onChange={SearchChange}
            value={SearchValue}
            type="search" 
            ref={inputRef}
            />
            <span
             style={{
              color: colors.grey[500],
             }}
            >
            {
              openSearch ? 
              <GoSearch id={searchIcon} />
               : 
              <IoCloseSharp id={searchIcon} onClick={searchCloseHandle} />
            }
            </span>
        </Box>
    </Box>
  )
}
