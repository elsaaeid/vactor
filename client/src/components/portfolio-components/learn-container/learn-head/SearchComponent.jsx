import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import {SearchContainer} from "../../../global-components/search-container/SearchContainer";



const SearchComponent = ({ 
  searchItems,
  closeSearch, 
  searchVal,
  setSearchVal,
  openHeaderSearch,
  setOpenHeaderSearch,
}) => { 
 const [orderState, setOrderState] = useState("");
 // Theme Colors Mode
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);


 // filtering For Search Items
 const filteredItems = searchItems.filter((item) => {
  if (searchVal == "") { 
    return null;
  }
  else if (item.name.toLowerCase().includes(searchVal.toLowerCase())) { 
    return item;
  }
  else {
    return null
    }
  });
 //Dropdown
const toggleTab = (order) => {
 setOrderState(order);
};

// search change
const SearchChange = (e)=> {
 setSearchVal(e.target.value);
}

useEffect(()=>{
  if(searchVal == "") {
    setOpenHeaderSearch(true);
  }
  else {
    setOpenHeaderSearch(false);
  }
}, [searchVal]);

  // searchCloseHandle
  const searchCloseHandle = ()=> {
    setSearchVal("");
    setOpenHeaderSearch(true);
  };

 return (
    <div 
        className='flex flex-col items-center'
        style={{
          width: "100%",
          position: "relative",
      }}>
        <div className='flex w-full flex-row justify-center items-center'>
          <SearchContainer
            width= "50%"
            position='absolute'
            SearchChange={SearchChange}
            SearchValue={searchVal}
            searchCloseHandle={searchCloseHandle}
            openSearch={openHeaderSearch}
            searchIcon="searchIconHeader"
            searchContent="searchContentHeader"
          />
        </div>
        <ul style={{
            backgroundColor: colors.grey[700],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
            position: "absolute",
            width: "50%",
            overflowY: "scroll",
            top: "4rem",
            zIndex: "500",
        }}>
        {filteredItems.map((item, index) => (
          <li
            className={orderState === item.name ? "tabs-sections active-tabs-sections" : "tabs-sections"}
            onClick={closeSearch}
           key={index} id={item.id}>
          <Link 
           onClick={() =>toggleTab(item.name)}
          to={item.itemFiltered}
          >{item.name}</Link></li>
        ))}
        </ul>
    </div>
 );
};

export default SearchComponent;