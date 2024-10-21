import React, { useContext } from 'react';
import {Box} from '@mui/material';
import {NavLink} from "react-router-dom";
import { Context } from '../../../context/Context';
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";




const CTA = ()=>{
  // App Theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


      // Translation
  const { t } = useTranslation();
  // App Context
  const { btnState, btnHandling } = useContext(Context);
    return (
        <Box className='cta h-auto flex flex-col items-center w-full'>
            <article className="introduction w-full flex flex-col justify-center items-center">
                <p 
                style={{
                    color: colors.grey[500],
                  }}
                >{t("homeContainer.introDesc")}</p>
            </article>
            <Box className="intro-btns w-full flex">    
                <NavLink 
                    style={{
                        color: colors.grey[500],
                    }}
                    to="/register" 
                    underline="none"
                    className={btnState === "thertlyActive" ? "btnX active" : "btnX"}
                    onClick={() =>btnHandling("thertlyActive")}
                    >{t("homeContainer.btnLeft")}</NavLink>
                    <NavLink 
                        style={{
                            color: colors.grey[500],
                        }}
                        to="/contact" 
                        underline="none"
                        className={btnState === "thertlyActive" ? "btn active" : "btn"}
                        onClick={() =>btnHandling("thertlyActive")}
                        >{t("homeContainer.btnRight")}</NavLink>
            </Box>
        </Box>
    )
};
export default CTA;

