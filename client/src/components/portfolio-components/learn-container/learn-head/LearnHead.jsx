import React, { useState } from 'react';
import SearchContent from './SearchContent';
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import "./LearnHead.css";

const LearnHead = ()=> {
  // useTranslation
    const { t } = useTranslation();
        // open Header Search state
        const [openHeaderSearch, setOpenHeaderSearch] = useState(true);
        // search Value State
        const [searchVal, setSearchVal] = useState("");
    
        // close Search Function
        const closeSearch = ()=> {
            setSearchVal("");
            setOpenHeaderSearch(true);
        }
  return (
        <Box class="learn-head w-full flex flex-col justify-center items-center">
            <h2 class="font-bold font-caption captionTextColor">{t("learn.learnCode")}</h2>
            <SearchContent 
                    searchVal={searchVal} 
                    setSearchVal={setSearchVal} 
                    closeSearch={closeSearch}  
                    openHeaderSearch={openHeaderSearch}
                    setOpenHeaderSearch={setOpenHeaderSearch}
                />
        </Box>            
  );
}
export default LearnHead;