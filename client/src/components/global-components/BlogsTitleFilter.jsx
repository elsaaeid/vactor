import React from "react";
import DropdownTabs from "./DropdownTabs";
import {ItemTabs} from "./ItemTabs";



const BlogsTitleFilter = ({orderState, toggleTab, blogs})=>{
  // print items of Dropdown
  const titles = blogs.reduce((acc, {name}) => {
    if (!acc.includes(name)) {
      acc.push(name);
    }
    return acc; 
  }, 
  []).map((name) =>
      {
        // print count of blogs by name
        let counter = 0;
        let filteredName = [];
        for (let i = 0; i < blogs.length; i++) {
          if (blogs[i].name.includes(name)) counter++;
        }
        // filter items by name
        filteredName = blogs.filter((i) => {
          if(i.name.includes(name)) {
            return blogs;
          }
        });
        // console.log(filteredName);

        return(
        <>
        {
          name ?
          <ItemTabs 
          itemClass={orderState == name ? "dropdown-tabs dropdown-active-tabs" : "dropdown-tabs"}
          itemClick={() =>toggleTab(name , counter, name, filteredName)}
          itemTitle={name}
          />
          :
          null
        }
        </>
      )}
      );
      

    return(
    <div className="blogs-filter w-full relative flex flex-row items-center justify-center">
      <DropdownTabs 
        orderState={orderState} 
        toggleTab={toggleTab} 
        blogs={blogs} 
        results={titles} 
        value="title" />
    </div>
    )
}
export default BlogsTitleFilter;