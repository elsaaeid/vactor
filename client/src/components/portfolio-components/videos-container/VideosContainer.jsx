import React from 'react';
import { Box } from "@mui/material";
import "./VideosContainer.css"
import { useTranslation } from "react-i18next";
import VideoList from './VideoList';

 const VideosContainer = () => {

    //Translation
		const { t } = useTranslation();

    
  return (
     <Box className="search-videos mt-5 flex flex-col justify-center items-center">
         <div style={{ textAlign: 'center' }}>
        <h1>{t("video.videoTitle")}</h1>
        <VideoList />
      </div>
    </Box>
  )
}
export default VideosContainer
