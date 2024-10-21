import React from "react";
import DropdownTabs from "./DropdownTabs";
import {ItemTabs} from "./ItemTabs";



const BlogsCategoryFilter = ({orderState, toggleTab, blogs})=>{
  // print items of Dropdown
  const categories = blogs.reduce((acc, {category}) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc; 
  }, 
  []).map((category) =>
      {
        // print count of blogs by category
        let counter = 0;
        let filteredCategory = [];
        for (let i = 0; i < blogs.length; i++) {
          if (blogs[i].category.includes(category)) counter++;
        }
        // filter items by category
        filteredCategory = blogs.filter((i) => {
          if(i.category.includes(category)) {
            return blogs;
          }
        });

        return(
        <>
        {
          category ?
          <ItemTabs 
          itemClass={orderState == category ? "dropdown-tabs dropdown-active-tabs" : "dropdown-tabs"}
          itemClick={() =>toggleTab(category , counter, category, filteredCategory)}
          itemTitle={category}
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
        value="category" 
        results={categories} />
    </div>
    )
}
export default BlogsCategoryFilter;