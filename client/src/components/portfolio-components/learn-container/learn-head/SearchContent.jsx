import React from "react";
import SearchComponent from './SearchComponent';
import { useTranslation } from "react-i18next";



const SearchContent = ({
  searchVal,
  setSearchVal,
  openHeaderSearch,
  setOpenHeaderSearch,
  closeSearch,
}) => {
  
  const items = [
    {
    id: 1,
    name: "Html",
    name_ar: "اتش تى ام ال",
    itemFiltered: "/html",
    },
    {
    id: 2,
    name: "Css",
    name_ar: "سى اس اس",
    itemFiltered: "/css",
    },
    {
    id: 3,
    name: "JavaScript",
    name_ar: "جافا اسكريبت",
    itemFiltered: "/javaScript",
    },
   {
    id: 4,
    name: "Sass",
    name_ar: "ساس",
    itemFiltered: "/sass",
  },
    {
    id: 5,
    name: "Bootstrap",
    name_ar: "بوت استراب",
    itemFiltered: "/bootstrap",
  },
    {
    id: 6,
    name: "React",
    name_ar: "ريأكت",
    itemFiltered: "/react",
  },
   {
  id: 7,
    name: "Tailwind",
    name_ar: "تايل ويند",
    itemFiltered: "/tailwind",
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