import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BLOGS,
  selectFilteredBlogs,
} from "../../../redux/features/blog/filterSlice";
import ReactPaginate from "react-paginate";
import { getBlogs } from "../../../redux/features/blog/blogSlice";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import {
  CALC_CATEGORY,
} from "../../../redux/features/blog/blogSlice";
import { useTranslation } from "react-i18next";
import { CardBlog } from "./CardBlog";
import BlogsCategoryFilter from "../../../components/global-components/BlogsCategoryFilter";
import BlogsTitleFilter from "../../../components/global-components/BlogsTitleFilter";
import SearchBlogs from "../../../components/global-components/SearchBlogs";
import Grid from '@material-ui/core/Grid';
import Spinner from "../../../components/global-components/Spinner";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const BlogContainer = () => {
  	// Translation
	const { t } = useTranslation();
  const [search, setSearch] = useState("");
  //Dropdown
  const [categoryState, setCategoryState] = useState("All");
  const [orderState, setOrderState] = useState("All");


  const filteredBlogs = useSelector(selectFilteredBlogs);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();


//getBlogs
const { blogs } = useSelector(
  (state) => state.blog
);
  
  useEffect(() => {
    dispatch(getBlogs());
    
  }, [dispatch]);
  

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

// calculate blogs
useEffect(() => {
  dispatch(CALC_CATEGORY(blogs));
}, [dispatch, blogs]);

// const blogsLength = blogs.length;
  // console.log(blogsLength)
  useEffect(() => {
    dispatch(FILTER_BLOGS({ blogs, search }));
  }, [blogs, search, dispatch]);
  
  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [numState, setNumState] = useState(blogs.length || null);
  const itemsPerPage = 5;

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


   //Dropdown
 const toggleTab = (category, num, order, filterTap) => {
  setCategoryState(category);
  setNumState(num);
  setOrderState(order);
  setCurrentItems(filterTap);
};
  //End Dropdown

  console.log(blogs);

  return (
    <Box className="blog-list flex flex-col items-center w-full">
      <Box className="blog-list-item flex flex-row justify-evenly items-center">
        <BlogsCategoryFilter 
          orderState={orderState} 
          toggleTab={toggleTab} 
          blogs={blogs}
        />
        <SearchBlogs
            search={search}
            setSearch={setSearch} 
          />
        <BlogsTitleFilter 
          orderState={orderState} 
          toggleTab={toggleTab} 
          blogs={blogs}
          search={search}
          setSearch={setSearch} 
        />
      </Box>
      <Box className="blog-list-item flex flex-col justify-center items-center">
          {blogs.length === 0 ? (
            <Spinner />
            ) : (
              <Box className="blog-content w-full flex flex-col justify-around items-center">
              <Box className="blogs-number w-full flex flex-row justify-around items-center">
                <span>{categoryState}</span>
                <p>
                  <span 
                    style={{
                      color: colors.grey[500],
                    }}>{t("blog.blogsNumber")}
                  </span>
                  <span
                   style={{
                      color: colors.grey[500],
                    }}
                    >{numState}</span>
                </p>
              </Box>
              <Box className="blog-box-container w-full">
                <Grid className="row mt-5" container justifyContent="center" spacing={4}>
                  {currentItems.map((blog, index) => {
                    const { _id, name, category, image } = blog;
                    return (
                      <Grid 
                        key={index}
                        xs={12} sm={6} md={6} lg={6} 
                        className={orderState ? "content-blog active-content" : "content-blog"}>
                        <CardBlog
                          _id={_id}
                          image={image}
                          name={name}
                          category={category}
                          shortenText={shortenText}
                          />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          )}
        {/* pagination */}
        <ReactPaginate
          className={`pagination flex flex-row justify-around items-center`}
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="item activePage"
          previousLabel={<ArrowBackIosIcon style={{ color: colors.grey[500], fontSize: 18, width: 50 }} />}
          nextLabel={<ArrowForwardIosIcon style={{ color: colors.grey[500], fontSize: 18, width: 50 }} />}
          breakClassName={'item break-me'}
          disabledClassName={'disabled-page'}
          marginPagesDisplayed={2}
          nextClassName={"item next"}
          pageClassName={'item pagination-page'}
          previousClassName={"item previous"}
        />
      </Box>
    </Box>
  );
};

export default BlogContainer;