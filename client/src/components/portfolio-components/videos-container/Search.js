import React, { useState, useEffect } from "react";
import {SearchContainer} from "../../global-components/search-container/SearchContainer";
import {Tooltip} from '@mui/material';
import {IconComponent} from '../../global-components/IconComponent';
import {RiSearchEyeLine} from "react-icons/ri";
import {VscSearch} from "react-icons/vsc";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";





const Search = ({handleSearch, searchQuery, setSearchQuery}) => {
    // App Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
        // open blog Search
    const [openBlogSearch, setOpenBlogSearch] = useState(true);
  
    // direction of web page
    const [searchIconDir, setSearchIconDir] = useState(true);
  
    // open search
    const [searchOpen, setSearchOpen] = useState(true);
    
    useEffect(()=>{
      if(searchQuery == "") {
        setOpenBlogSearch(true);
      }
      else {
        setOpenBlogSearch(false);
      }
    }, [searchQuery]);
    
    
    // direction of web page
    useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, [])
    
    // Handel Close Search
    const searchCloseHandle = ()=> {
      setSearchQuery("");
        setOpenBlogSearch(true);
      };
    
    const openSearch = ()=> {
        setSearchOpen(false)
        }
        const closeSearch = ()=> {
            setSearchOpen(true);
            setSearchQuery("");
            setOpenBlogSearch(true);
        };
  return (
    <div className={searchOpen ? "search-video-container absolute flex flex-row items-center justify-center" : 
    "search-video-container absolute flex flex-row items-center justify-center active"}>
    <div className={searchOpen ? "search-video" : "search-video active"}>
      <SearchContainer
        position='absolute'
        SearchChange={handleSearch}
        SearchValue={searchQuery}
        searchCloseHandle={searchCloseHandle}
        openSearch={openBlogSearch}
        searchIcon="searchIconVideo"
        searchContent="searchContentVideo"
        />
    </div>
    <div className="search-icons-video-container cursor-pointer">
      { 
      searchOpen
      ?
      <Tooltip title="search-icon-video">
          <IconComponent        
          icon={searchIconDir
            ?
            <RiSearchEyeLine 
              style={{
                  color: colors.grey[500],
                  }}
              id="iconSearch-video" 
              onClick={openSearch} 
              className="searchBtn cursor-pointer icon-q" 
              fontSize="small" />
            : 
          <VscSearch 
          style={{
              color: colors.grey[500],
              }}
          id="iconSearch" onClick={openSearch} className="searchBtn cursor-pointer icon-q" fontSize="small" />
      } />
      </Tooltip>
      :
      <span style={{
      color: colors.grey[500],
      }}
      onClick={closeSearch}>x</span>
      }
    </div>
  </div>
  );
};

export default Search;
