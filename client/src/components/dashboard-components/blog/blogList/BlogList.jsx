import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BLOGS,
  selectFilteredBlogs,
} from "../../../../redux/features/blog/filterSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useTranslation } from "react-i18next";
import {
  deleteBlog,
  getBlogs,
} from "../../../../redux/features/blog/blogSlice";
import { useParams } from "react-router-dom";
import { selectIsLoggedIn } from "../../../../redux/features/auth/authSlice";
import { getBlog } from "../../../../redux/features/blog/blogSlice";
import TableItemsContainer from "./TableItemsContainer";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import useRedirectLoggedOutUser from "../../../../customHook/useRedirectLoggedOutUser";
import {
  CALC_CATEGORY,
} from "../../../../redux/features/blog/blogSlice";
import BlogsCategoryFilter from "../../../global-components/BlogsCategoryFilter";


const BlogList = () => {
  // Translation
  const { t } = useTranslation();
  useRedirectLoggedOutUser("/login");
  const [search, setSearch] = useState("");
  //Dropdown
  const [categoryState, setCategoryState] = useState("All");
  const [orderState, setOrderState] = useState("All");

  const filteredBlogs = useSelector(selectFilteredBlogs);
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // A hook to access the redux dispatch function
  const dispatch = useDispatch();
  // Use Params for id 
  const { id } = useParams();

  // Selecting Login Status
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // blog State Selecting
  const { blogs, isError, message } = useSelector(
    (state) => state.blog
  );

  // Get Blog Depend On Login Status
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getBlog(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);


  // The Shorten Of Text
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  // Blog Deleting Function
  const delBlog = async (id) => {
    console.log(id);
    await dispatch(deleteBlog(id));
    await dispatch(getBlogs());
  };

  // Confirm of blog Deleting Function
  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Blog",
      message: "Are you sure you want to delete this blog.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delBlog(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

// calculate blogs
useEffect(() => {
  dispatch(CALC_CATEGORY(blogs));
}, [dispatch, blogs]);

  // Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [numState, setNumState] = useState(blogs.length || null);
  const itemsPerPage = 5;


  // filtering Blogs And Set Current Items
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredBlogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredBlogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredBlogs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredBlogs.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  // blogs Filtering Side Effect
  useEffect(() => {
    dispatch(FILTER_BLOGS({ blogs, search }));
  }, [blogs, search, dispatch]);

 //Dropdown
 const toggleTab = (category, num, order, filterTap) => {
  setCategoryState(category);
  setNumState(num);
  setOrderState(order);
  setCurrentItems(filterTap);
};

  return (
    <div className="blog-list flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-between mb-3">
          <span>
            <h3 style={{
              color: colors.grey[500],
            }}>{t("blog.blogList.inventoryItems")}</h3>
          </span>
        </div>
        <Box className="w-1/2">
          <BlogsCategoryFilter 
            orderState={orderState} 
            toggleTab={toggleTab} 
            blogs={blogs}
            search={search}
            setSearch={setSearch} 
          />
        </Box>
        <Box className="blogs-number w-full flex flex-row justify-between items-center">
            <span>{categoryState}</span>
            <p><span>{t("blog.blogsNumber")}</span> <span>{numState}</span></p>
        </Box> 
        <Box className="table-container w-full">
            <TableItemsContainer blogs={blogs} pageCount={pageCount} handlePageClick={handlePageClick} confirmDelete={confirmDelete} shortenText={shortenText} currentItems={currentItems} />
        </Box>
      </div>
    </div>
  );
};

export default BlogList;
