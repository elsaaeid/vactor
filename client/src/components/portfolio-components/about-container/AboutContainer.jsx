import { Box } from "@mui/material";
import React from "react";
import CarouselContainer from "./CarouselContainer";
import './About.css';
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";



const AboutContainer = ()=>{
    // useTranslation
    const { t } = useTranslation();
    // App Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box className="AboutContainer mb-3">
            <Box className="AboutOverlay"></Box>
            <Box className="h-full flex flex-col items-center">
                <Box 
                    style={{
                        background: colors.grey[900],
                      }} 
                    className="AboutContainerTop flex justify-center items-center">
                    <h2>{t("About")}</h2>
                </Box>
                <Box className="carouselContent flex justify-center items-center">
                    <CarouselContainer />
                </Box>
            </Box>
        </Box>
    )
}
export default AboutContainer;