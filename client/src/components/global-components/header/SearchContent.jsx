import React from "react";
import SearchComponent from './SearchComponent';
import { useTranslation } from "react-i18next";



const SearchContent = ({
  searchVal,
  searchOpen,
  setSearchVal,
  openHeaderSearch,
  setOpenHeaderSearch,
  closeSearch,
}) => {
  
  const items = [
    {
    id: 1,
    name: "Blogs",
    name_ar: "المدونات",
    itemFiltered: "/blogs",
    },
    {
    id: 2,
    name: "Videos",
    name_ar: "الفديوهات",
    itemFiltered: "/videos",
    },
    {
    id: 3,
    name: "Programming Content",
    name_ar: "محتوى البرمجة",
    itemFiltered: "/learn",
    },
];
     // Translation
     const { i18n } = useTranslation();

     // Search Items
     const searchItems = items.map(item => {
      if(i18n.language === 'ar') {
      return({
        id: item.id,
        name: item.name_ar,
        itemFiltered: item.link,
      })
      }
      return item;
      })
    
  return (
        <SearchComponent
          searchOpen={searchOpen}
          searchVal={searchVal} 
          setSearchVal={setSearchVal}
          searchItems={searchItems} 
          openHeaderSearch={openHeaderSearch}
          setOpenHeaderSearch={setOpenHeaderSearch}
          closeSearch={closeSearch}
        />
  );
};

export default SearchContent;