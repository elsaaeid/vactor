import React, { useContext } from 'react';
import './main.css';
import CTA from './CTA';
import {Box} from '@mui/material';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";


function Main() {

  // App Theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
        return (
      <main 
      className="w-full flex justify-between items-center flex-row">
        <Box className='main__container flex justify-center items-center flex-row'>
          <Box
            style={{
              background: colors.grey[900],
            }}
            className="intro flex items-center">
            <Box className='intro-para h-full w-2/4 flex justify-center items-center'>
              <CTA />
            </Box>
            <Box id="greay-box-content" className="greay-box-content overlay flex justify-center flex-col items-center">
              <Box className="overlay">
              </Box>
            </Box>         
          </Box>
        </Box>
      </main> 
            )
        }
export default Main;